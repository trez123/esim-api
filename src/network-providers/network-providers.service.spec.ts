import { Test, TestingModule } from '@nestjs/testing';
import { NetworkProvidersService } from './network-providers.service';

describe('NetworkProvidersService', () => {
  let service: NetworkProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkProvidersService],
    }).compile();

    service = module.get<NetworkProvidersService>(NetworkProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
