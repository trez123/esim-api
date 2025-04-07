import { Test, TestingModule } from '@nestjs/testing';
import { EsimDevicesController } from './esim-devices.controller';
import { EsimDevicesService } from './esim-devices.service';

describe('EsimDevicesController', () => {
  let controller: EsimDevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsimDevicesController],
      providers: [EsimDevicesService],
    }).compile();

    controller = module.get<EsimDevicesController>(EsimDevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
