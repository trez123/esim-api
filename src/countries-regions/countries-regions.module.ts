import { Module } from '@nestjs/common';
import { CountriesRegionsService } from './countries-regions.service';
import { CountriesRegionsController } from './countries-regions.controller';
import { KeepgoService } from 'src/shared/services/keepgo/keepgo.service';

@Module({
  controllers: [CountriesRegionsController],
  providers: [CountriesRegionsService, KeepgoService],
})
export class CountriesRegionsModule {}
