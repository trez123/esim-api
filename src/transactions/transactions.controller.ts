import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionsResponse } from './dto/transactions-response';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary: 'Get a list of transactions',
    description:
      'This request reveals a list of transactions referred to a specific Line belonging to your account and integrates them into your platform.',
    operationId: 'getTransactions',
  })
  @ApiResponse({
    status: 200,
    description: 'transactions Fetched Successfully',
    type: TransactionsResponse,
  })
  async getTransactions(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<TransactionsResponse> {
    return this.transactionsService.get_transactions(params);
  }
}
