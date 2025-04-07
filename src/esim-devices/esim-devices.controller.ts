import { Controller, Get, Query } from '@nestjs/common';
import { EsimDevicesService } from './esim-devices.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EsimDevicesResponse } from './dto/esim-devices-response';

@ApiTags('eSIM devices')
@Controller('esim-devices')
export class EsimDevicesController {
  constructor(private readonly esimDevicesService: EsimDevicesService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of eSIM enabled devices',
    description:
      'This request receives a list of eSIM-enabled devices compatible with Keepgo eSIM bundles.',
    operationId: 'getEsimEnabledDevices',
  })
  @ApiResponse({
    status: 200,
    description: 'Esim enabled devices fetched Successfully',
    type: EsimDevicesResponse,
  })
  async getEsimEnabledDevices(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<EsimDevicesResponse> {
    return this.esimDevicesService.get_esim_enabled_devices(params);
  }
}
