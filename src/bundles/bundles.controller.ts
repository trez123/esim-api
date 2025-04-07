import { Controller, Get, Param, Query } from '@nestjs/common';
import { BundlesService } from './bundles.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BundleResponse, BundlesResponse } from './dto/bundles-response';

@ApiTags('Bundles')
@Controller('bundles')
export class BundlesController {
  constructor(private readonly bundlesService: BundlesService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of bundles',
    description:
      'This request reveals a list of data bundles from the Keepgo Console that you can use in your account. It reveals the bundle’s names, descriptions, coverage, and available refills.',
    operationId: 'getBundles',
  })
  @ApiResponse({
    status: 200,
    description: 'bundles Fetched Successfully',
    type: BundlesResponse,
  })
  async getSimCards(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<BundlesResponse> {
    return this.bundlesService.get_bundles(params);
  }

  @Get('get_details/:id')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get bundle',
    description:
      'This request reveals a specific bundle from Keepgo Console that you can use in your Partner Account. It reveals the bundle’s name, description, coverage, and available refills.',
    operationId: 'getBundleById',
  })
  @ApiResponse({
    status: 200,
    description: 'line details fetched Successfully',
    type: BundleResponse,
  })
  async getBundleById(
    @Query() params: { [key: string]: string | number | boolean },
    @Param('id') id: number,
  ): Promise<BundleResponse> {
    const result = this.bundlesService.get_bundle_by_id(id, params);
    return result;
  }
}
