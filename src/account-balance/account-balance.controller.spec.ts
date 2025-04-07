import { Test, TestingModule } from '@nestjs/testing';
import { AccountBalanceController } from './account-balance.controller';
import { AccountBalanceService } from './account-balance.service';

describe('AccountBalanceController', () => {
  let controller: AccountBalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountBalanceController],
      providers: [AccountBalanceService],
    }).compile();

    controller = module.get<AccountBalanceController>(AccountBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
