import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from './transactions.dto';

class Data {
  @ApiProperty({ type: [Transaction] })
  data: Transaction[];
}

export class TransactionsResponse {
  @ApiProperty({ example: 'success' })
  ack: string;

  @ApiProperty({ type: Data })
  transactions: Data;
}
