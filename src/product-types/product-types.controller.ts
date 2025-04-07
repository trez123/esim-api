import { Controller, Get, Query } from '@nestjs/common';
import { ProductTypesService } from './product-types.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductTypesResponse } from './dto/product-types-response';

@Controller('product-types')
export class ProductTypesController {
  constructor(private readonly productTypesService: ProductTypesService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Product type is a property of a bundle',
    description:
      'Product type is a property of a bundle. Keepgo currently provides two product types - Lifetime and Travel - with different operation logics. You can add lines on both Lifetime and Travel product types to one account. Each product type comes with a set of bundles. One Line can belong to one product type.',
    operationId: 'getProductTypes',
  })
  @ApiResponse({
    status: 200,
    description: 'Product types fetched Successfully',
    type: ProductTypesResponse,
  })
  async getProductTypes(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<ProductTypesResponse> {
    return this.productTypesService.get_product_types(params);
  }
}
