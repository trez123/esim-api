import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, KeepgoService],
})
export class TransactionsModule {}
