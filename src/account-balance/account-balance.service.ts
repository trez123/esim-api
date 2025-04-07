import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import { AccountBalanceResponse } from './dto/account-balance-response';

@Injectable()
export class AccountBalanceService {
  constructor(private keepgoService: KeepgoService) {}

  async get_account_balance(params?: {
    [key: string]: string | number | boolean;
  }): Promise<AccountBalanceResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/account_balance`,
      queryParams,
    );
    return result;
  }
}
