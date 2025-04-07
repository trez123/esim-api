import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRegionsController } from './countries-regions.controller';
import { CountriesRegionsService } from './countries-regions.service';

describe('CountriesRegionsController', () => {
  let controller: CountriesRegionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesRegionsController],
      providers: [CountriesRegionsService],
    }).compile();

    controller = module.get<CountriesRegionsController>(CountriesRegionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
