// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://809731bf8c66c94120fdee097e46ba1a@o4509002522951680.ingest.de.sentry.io/4509002533503056',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  environment: process.env.NODE_ENV,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
})
