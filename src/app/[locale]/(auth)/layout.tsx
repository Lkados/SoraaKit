import React from 'react';
import { enUS, frFR } from '@clerk/localizations';
import Sidebar from '@/components/sidebar';
import InfoBar from '@/components/infobar';
import { ClerkProvider } from '@clerk/nextjs';
import { AppConfig } from '@/utils/AppConfig';
import { dark } from '@clerk/themes';

type Props = { children: React.ReactNode }

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale !== AppConfig.defaultLocale) {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }
  
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      appearance={{
        baseTheme: dark
      }}
    >
      {props.children}
</ClerkProvider>
  )
}

