import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRegionsService } from './countries-regions.service';

describe('CountriesRegionsService', () => {
  let service: CountriesRegionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesRegionsService],
    }).compile();

    service = module.get<CountriesRegionsService>(CountriesRegionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
