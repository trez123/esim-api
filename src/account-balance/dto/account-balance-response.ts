import { ApiProperty } from '@nestjs/swagger';

export class AccountBalanceResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ example: '8.63' })
  account_balance: string;
}
