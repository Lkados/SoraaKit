// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  // FIXME: Add your Sentry DSN
  dsn: 'https://ca5d3b20a1244d92b8344815cc694692@o1216652.ingest.us.sentry.io/6358671',

  // Enable Spotlight in development
  spotlight: process.env.NODE_ENV === 'development',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
