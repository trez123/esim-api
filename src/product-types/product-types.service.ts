import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import { ProductTypesResponse } from './dto/product-types-response';

@Injectable()
export class ProductTypesService {
  constructor(private keepgoService: KeepgoService) {}

  async get_product_types(params?: {
    [key: string]: string | number | boolean;
  }): Promise<ProductTypesResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/product_types`,
      queryParams,
    );
    return result;
  }
}
