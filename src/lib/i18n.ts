import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  console.log(`Loading messages for locale: ${locale}`);
  const messages = (await import(`../locales/${locale}.json`)).default;
  return { messages };
});
