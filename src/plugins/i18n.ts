import { usePage, router } from '@inertiajs/vue3';
import type { PageProps } from '@inertiajs/core';

import { ref, watch } from "vue";

import { i18nVue, loadLanguageAsync } from 'laravel-vue-i18n';
import { useLanguage } from '@/composables/useLanguage';



interface SharedData extends PageProps {
  auth: {
    user: {
      language: string;
    };
  };
}

interface LangModule {
  default: any;
}

interface LangsMap {
  [key: string]: LangModule;
}

export default {
    install: (app: any, options: any) => {

        app.use(i18nVue, {
            resolve: (lang: string) => {
                return (options.langs as LangsMap)[`../../lang/${lang}.json`].default
            },
        });

        let hasRun = false;

        app.mixin({
            mounted() {
                if (hasRun) {
                    return;
                }

                hasRun = true;

                const languagePreference = ref(usePage<SharedData>().props?.auth?.user?.language);

                if (languagePreference.value) {
                    loadLanguageAsync(languagePreference.value);

                    watch(languagePreference, (newVal, oldVal) => {
                        if (newVal !== oldVal) {
                            router.post(options.changeLanguageRoute, {language: newVal}, {
                                onSuccess: () => {
                                    loadLanguageAsync(usePage<SharedData>().props.auth.user.language);
                                },
                            });
                        }
                    });

                    return;
                }

                const { language } = useLanguage();

                loadLanguageAsync(language.value);
            }
        });
    },
};
