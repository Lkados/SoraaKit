// src/middleware.ts

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from './utils/AppConfig';

// Initialize the internationalization middleware
const intlMiddleware = createMiddleware({
  locales: AllLocales, // List of supported locales
  localePrefix: AppConfig.localePrefix, // Configuration for locale prefix
  defaultLocale: AppConfig.defaultLocale, // Default locale
});

// Define route patterns for protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
  '/settings(.*)',
  '/:locale/settings(.*)',
]);

// Main middleware function that applies Clerk authentication and internationalization
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the route with Clerk authentication
  }
  return intlMiddleware(req); // Apply internationalization middleware
});

// Configuration for the middleware to match specific paths
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    '/((?!.+\\.[\\w]+$|_next).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)',
  ],
  runtime: 'edge', // Ensure the middleware uses the Edge runtime
};
