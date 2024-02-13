import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestControllerController } from './test-controller/test-controller.controller';
import { TestServiceService } from './test-service/test-service.service';

@Module({
  imports: [],
  controllers: [AppController, TestControllerController],
  providers: [AppService, TestServiceService],
})
export class AppModule {}
