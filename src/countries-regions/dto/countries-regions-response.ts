import { ApiProperty } from '@nestjs/swagger';

export class CountriesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string' },
    example: {
      '1': 'Afghanistan',
      '2': 'Albania',
      '3': 'Algeria',
      '4': 'American Samoa',
      '5': '...',
      '6': '...',
    },
  })
  countries: Record<string, string>;
}

export class RegionsResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'string' },
    example: {
      '1': 'Africa',
      '2': 'Asia',
      '3': 'Europe',
      '4': 'North America',
      '5': 'Pacific',
      '6': 'EMEA',
      '7': 'Middle East',
    },
  })
  regions: Record<string, string>;
}
