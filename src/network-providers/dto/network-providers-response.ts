import { ApiProperty } from '@nestjs/swagger';

export class NetworkProviderResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string' },
    example: {
      '1970': '3 (Austria)',
      '2018': '3 (Indonesia)',
      '2341': 'Vodafone (UK)',
      '3120': 'T-Mobile (Netherlands)',
    },
  })
  network_providers: Record<string, string>;
}
