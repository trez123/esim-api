import { Module } from '@nestjs/common';
import { LinesService } from './lines.service';
import { LinesController } from './lines.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [LinesController],
  providers: [LinesService, KeepgoService],
})
export class LinesModule {}
