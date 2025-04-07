import { Test, TestingModule } from '@nestjs/testing';
import { EsimDevicesService } from './esim-devices.service';

describe('EsimDevicesService', () => {
  let service: EsimDevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsimDevicesService],
    }).compile();

    service = module.get<EsimDevicesService>(EsimDevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
