import { CacheModuleOptions, CacheOptionsFactory, CacheStore } from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';
import type { StoreConfig } from 'cache-manager';
import { RedisClientOptions } from 'redis';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  async createCacheOptions(): Promise<CacheModuleOptions> {
    if (process.env.NODE_ENV === 'production') {
      const { redisStore } = await import('cache-manager-redis-yet');
      const redisOptions: RedisClientOptions & StoreConfig = {
        socket: {
          host: process.env.VIEWTUBE_REDIS_HOST,
          port: parseInt(process.env.VIEWTUBE_REDIS_PORT)
        },
        database: 0
      };

      if (process.env.VIEWTUBE_REDIS_PASSWORD) {
        redisOptions.password = process.env.VIEWTUBE_REDIS_PASSWORD;
      }

      const store = await redisStore(redisOptions);

      return {
        store: store as unknown as CacheStore,
        max: 20000,
        ttl: 1800000
      };
    }

    // Development options
    return {
      store: {
        get: (..._args) => undefined,
        set: (..._args) => undefined,
        del: (..._args) => undefined
      }
    };
  }
}
