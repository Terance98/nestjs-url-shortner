import { Test, TestingModule } from '@nestjs/testing';
import { ShortnerController } from './shortner.controller';

describe('ShortnerController', () => {
  let controller: ShortnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortnerController],
    }).compile();

    controller = module.get<ShortnerController>(ShortnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
