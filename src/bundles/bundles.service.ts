import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import { BundleResponse, BundlesResponse } from './dto/bundles-response';

@Injectable()
export class BundlesService {
  constructor(private keepgoService: KeepgoService) {}

  async get_bundles(params?: {
    [key: string]: string | number | boolean;
  }): Promise<BundlesResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(`/api/v2/bundles`, queryParams);
    return result;
  }

  async get_bundle_by_id(
    id: number,
    params?: { [key: string]: string | number | boolean },
  ): Promise<BundleResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/bundles/${id}`,
      queryParams,
    );
    return result;
  }
}
