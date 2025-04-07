import { Test, TestingModule } from '@nestjs/testing';
import { KeepgoService } from './keepgo.service';

describe('KeepgoService', () => {
  let service: KeepgoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeepgoService],
    }).compile();

    service = module.get<KeepgoService>(KeepgoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
