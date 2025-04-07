import { Injectable } from '@nestjs/common';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';
import { TransactionsResponse } from './dto/transactions-response';

@Injectable()
export class TransactionsService {
  constructor(private keepgoService: KeepgoService) {}

  async get_transactions(params?: {
    [key: string]: string | number | boolean;
  }): Promise<TransactionsResponse> {
    const queryParams = { ...params };
    const result = await this.keepgoService.get(
      `/api/v2/transactions`,
      queryParams,
    );
    return result;
  }
}
