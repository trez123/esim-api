import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LinesModule } from './lines/lines.module';
import { ProductTypesModule } from './product-types/product-types.module';
import { AccountBalanceModule } from './account-balance/account-balance.module';
import { BundlesModule } from './bundles/bundles.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NetworkProvidersModule } from './network-providers/network-providers.module';
import { CountriesRegionsModule } from './countries-regions/countries-regions.module';
import { EsimDevicesModule } from './esim-devices/esim-devices.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LinesModule,
    ProductTypesModule,
    AccountBalanceModule,
    BundlesModule,
    TransactionsModule,
    NetworkProvidersModule,
    CountriesRegionsModule,
    EsimDevicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
