import { ApiProperty } from '@nestjs/swagger';
import { Device } from './esim-devices.dto';

export class EsimDevicesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: Device })
  data: Device;
}
