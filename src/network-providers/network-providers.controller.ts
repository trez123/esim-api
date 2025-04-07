import { Controller, Get, Query } from '@nestjs/common';
import { NetworkProvidersService } from './network-providers.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NetworkProviderResponse } from './dto/network-providers-response';

@ApiTags('Network Providers')
@Controller('network-providers')
export class NetworkProvidersController {
  constructor(
    private readonly networkProvidersService: NetworkProvidersService,
  ) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of network providers',
    description:
      ' The /network_providers request reveals a list of all operators we have in bundles.',
    operationId: 'getNetworkProviders',
  })
  @ApiResponse({
    status: 200,
    description: 'network providers Fetched Successfully',
    type: NetworkProviderResponse,
  })
  async getNetworkProviders(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<NetworkProviderResponse> {
    return this.networkProvidersService.get_network_providers(params);
  }
}
