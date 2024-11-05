/* eslint-disable no-var */
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

declare module '#app' {
  interface PageMeta {
    headless?: boolean;
  }
}

declare global {
  var nestApp: NestFastifyApplication;
}

export {};
