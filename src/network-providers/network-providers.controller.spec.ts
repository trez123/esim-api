import { Test, TestingModule } from '@nestjs/testing';
import { NetworkProvidersController } from './network-providers.controller';
import { NetworkProvidersService } from './network-providers.service';

describe('NetworkProvidersController', () => {
  let controller: NetworkProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworkProvidersController],
      providers: [NetworkProvidersService],
    }).compile();

    controller = module.get<NetworkProvidersController>(NetworkProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
