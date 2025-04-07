import { Controller, Get, Query } from '@nestjs/common';
import { AccountBalanceService } from './account-balance.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountBalanceResponse } from './dto/account-balance-response';

@ApiTags('Account Balance')
@Controller('account-balance')
export class AccountBalanceController {
  constructor(private readonly accountBalanceService: AccountBalanceService) {}

  @Get('/')
  @ApiBearerAuth('Authorization')
  @ApiOperation({
    summary:
      'Returns the financial sum available within a partner’s account in the platform',
    description:
      'This request returns the financial sum available within a partner’s account in the platform. It represents the current amount of funds that a partner has at their disposal for conducting transactions.',
    operationId: 'gatAccountBalance',
  })
  @ApiResponse({
    status: 200,
    description: 'Account balance fetched Successfully',
    type: AccountBalanceResponse,
  })
  async gatAccountBalance(
    @Query() params: { [key: string]: string | number | boolean },
  ): Promise<AccountBalanceResponse> {
    return this.accountBalanceService.get_account_balance(params);
  }
}
