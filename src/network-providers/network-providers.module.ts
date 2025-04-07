import { Module } from '@nestjs/common';
import { NetworkProvidersService } from './network-providers.service';
import { NetworkProvidersController } from './network-providers.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [NetworkProvidersController],
  providers: [NetworkProvidersService, KeepgoService],
})
export class NetworkProvidersModule {}
