import { ApiProperty } from '@nestjs/swagger';

export class Transaction {
  @ApiProperty({ example: '2021-09-24 09:15:49' })
  created_at: string;

  @ApiProperty({ example: 'Completed' })
  status: string;

  @ApiProperty({ example: '277.00' })
  amount: string;

  @ApiProperty({ example: 'EUR' })
  currency: string;

  @ApiProperty({ example: 'ideal' })
  type: string;

  @ApiProperty({ example: 'f391a7537acf5775989d20772cc01736' })
  invoice_hash: string;

  @ApiProperty({ example: 51200 })
  refill_amount_mb: number;

  @ApiProperty({ example: 'Account Mr. Smith (Refill)' })
  reason: string;

  @ApiProperty({ example: 'AB_49406_58' })
  transaction_id: string;
}
