import { ApiProperty } from '@nestjs/swagger';

class Brand {
  @ApiProperty({ example: 'ASUS' })
  title: string;

  @ApiProperty({
    example: ['ASUS VivoBook Flip 14 TP401NA', 'ASUS NovaGo TP370QL'],
  })
  models: string[];
}

export class Device {
  @ApiProperty({ example: 'Tablets & laptops' })
  type: string;

  @ApiProperty({ type: [Brand] })
  brands: Brand[];
}
