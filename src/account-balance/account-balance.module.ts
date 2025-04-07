import { Module } from '@nestjs/common';
import { AccountBalanceService } from './account-balance.service';
import { AccountBalanceController } from './account-balance.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [AccountBalanceController],
  providers: [AccountBalanceService, KeepgoService],
})
export class AccountBalanceModule {}
