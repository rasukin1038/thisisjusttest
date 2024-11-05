import { CacheModule } from '@nestjs/cache-manager';
import { Logger, Module, ModuleMetadata } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheConfigService } from 'server/cache-config.service';
import { ProxyController } from './proxy.controller';
import { ProxyService } from './proxy.service';

const moduleMetadata: ModuleMetadata = {
  providers: [ProxyService, Logger],
  controllers: [ProxyController],
  imports: [
    ConfigModule.forRoot(),
    CacheModule.registerAsync({
      useClass: CacheConfigService
    })
  ]
};

@Module(moduleMetadata)
export class ProxyModule {}
