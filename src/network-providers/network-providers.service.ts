import { Injectable } from '@nestjs/common';
import { NetworkProviderResponse } from './dto/network-providers-response';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Injectable()
export class NetworkProvidersService {
  constructor(private keepgoService: KeepgoService) {}

  async get_network_providers(params?: {
    [key: string]: string | number | boolean;
  }): Promise<NetworkProviderResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/network_providers`,
      queryParams,
    );
    return result;
  }
}
