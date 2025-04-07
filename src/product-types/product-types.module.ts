import { Module } from '@nestjs/common';
import { ProductTypesService } from './product-types.service';
import { ProductTypesController } from './product-types.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [ProductTypesController],
  providers: [ProductTypesService, KeepgoService],
})
export class ProductTypesModule {}
