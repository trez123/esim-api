import { ApiProperty } from '@nestjs/swagger';

export class Refills {
  @ApiProperty({ example: '100MB' })
  title: string;

  @ApiProperty({ example: 100 })
  amount_mb: number;

  @ApiProperty({ example: null, required: false, nullable: true })
  amount_days: number | null;

  @ApiProperty({ example: 3 })
  price_usd: number;
}

export class Network {
  @ApiProperty({ example: 'Austria' })
  title: string;

  @ApiProperty({ example: ['3', 'A1', 'T-Mobile'] })
  local_networks: string[];

  @ApiProperty({ example: 'https://myaccount.keepgo.com/img/flags/1x1/at.svg' })
  flag: string;
}

export class Bundle {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1, required: false, nullable: true })
  type_id: number;

  @ApiProperty({ example: 'Orion' })
  name: string;

  @ApiProperty({ example: 'country', required: false, nullable: true })
  bundle_type: string;

  @ApiProperty({
    example: 'https://myaccount.keepgo.com/img/bundle_img.png',
    required: false,
  })
  img: string;

  @ApiProperty({ example: 'Affordable data bundle for Europe and the USA' })
  description: string;

  @ApiProperty({
    example: ['Austria', 'Belgium', 'Bulgaria'],
    required: false,
    nullable: true,
  })
  coverage: string[];

  @ApiProperty({ type: [Refills] })
  refills: Refills[];

  @ApiProperty({ example: 'Netherlands', required: false, nullable: true })
  privacy_ip: string;

  @ApiProperty({ type: [Network], required: false, nullable: true })
  networks: Network[];
}
