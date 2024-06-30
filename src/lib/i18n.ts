import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  const messages = (await import(`../locales/${locale}.json`)).default;
  return { messages };
});
