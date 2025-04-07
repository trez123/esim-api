import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import { EsimDevicesResponse } from './dto/esim-devices-response';

@Injectable()
export class EsimDevicesService {
  constructor(private keepgoService: KeepgoService) {}

  async get_esim_enabled_devices(params?: {
    [key: string]: string | number | boolean;
  }): Promise<EsimDevicesResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/esim_enabled_devices`,
      queryParams,
    );
    return result;
  }
}
