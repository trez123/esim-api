import { ApiProperty } from '@nestjs/swagger';
import { Bundle } from './bundles.dto';

export class BundlesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: [Bundle] })
  bundles: Bundle[];
}

export class BundleResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: Bundle })
  bundle: Bundle;
}
