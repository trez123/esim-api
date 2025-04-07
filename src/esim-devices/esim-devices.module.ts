import { Module } from '@nestjs/common';
import { EsimDevicesService } from './esim-devices.service';
import { EsimDevicesController } from './esim-devices.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [EsimDevicesController],
  providers: [EsimDevicesService, KeepgoService],
})
export class EsimDevicesModule {}
