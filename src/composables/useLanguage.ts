import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import type { PageProps } from '@inertiajs/core';
import { setCookie } from './useCookie';
import { loadLanguageAsync } from 'laravel-vue-i18n';

interface SharedData extends PageProps {
  app: {
    locale: string;
  };
}

type Language = string;

const language = ref('en');

export function useLanguage() {

  if(usePage<SharedData>().props?.app?.locale) {
    language.value = usePage<SharedData>().props.app.locale;

    console.log(language.value);
  }

  const savedLanguage = localStorage.getItem('language') as Language;

  if (savedLanguage) {
    language.value = savedLanguage;
  }

  function updateLanguage(value: Language) {

    language.value = value;

    // Store in localStorage for client-side persistence...
    localStorage.setItem('language', value);

    // Store in cookie for SSR...
    setCookie('language', value);

    loadLanguageAsync(value);
  }

  return {
    language,
    updateLanguage,
  };
}
