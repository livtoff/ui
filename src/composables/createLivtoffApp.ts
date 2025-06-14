import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createInertiaApp } from "@inertiajs/vue3";
import type { DefineComponent } from "vue";
import { createApp, h } from "vue";

type AppOptions = {
  title: string;
  pageComponents: Record<string, () => Promise<DefineComponent>>;
}

export const createLivtoffApp = (options: AppOptions) => {
  return createInertiaApp({
      title: (title) => `${title} - ${options.title}`,
      resolve: (name) =>
          resolvePageComponent(
              `./pages/${name}.vue`,
              options.pageComponents,
          ),
      setup({ el, App, props, plugin }) {
          createApp({ render: () => h(App, props) })
              .use(plugin)
              .mount(el);
      },
      progress: {
        includeCSS: false
      },
  });
};