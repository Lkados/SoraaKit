/* eslint-disable vars-on-top */
/* eslint-disable no-var */
// eslint-disable-next-line import/no-extraneous-dependencies
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
