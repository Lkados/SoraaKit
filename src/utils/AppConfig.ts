import type { LocalePrefix } from 'next-intl/routing';

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'Soraa',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'fr',
      name: 'Français',
    },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map((locale) => locale.id);
