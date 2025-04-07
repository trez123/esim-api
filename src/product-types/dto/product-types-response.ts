import { ApiProperty } from '@nestjs/swagger';

export class ProductTypesResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({
    example: [
      'Lifetime',
      'Pay per megabyte',
      'Data expires in X days',
      'Unlimited with slow down',
      'Flex Unlimited',
    ],
  })
  product_types: string[];
}
