import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import {
  CountriesResponse,
  RegionsResponse,
} from './dto/countries-regions-response';

@Injectable()
export class CountriesRegionsService {
  constructor(private keepgoService: KeepgoService) {}

  async get_countries(params?: {
    [key: string]: string | number | boolean;
  }): Promise<CountriesResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/countries`,
      queryParams,
    );
    return result;
  }

  async get_regions(params?: {
    [key: string]: string | number | boolean;
  }): Promise<RegionsResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(`/api/v2/regions`, queryParams);
    return result;
  }
}
