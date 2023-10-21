import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommitsController } from './controllers/commits.controller';
import { AppService } from './app.service';
import { CommitsService } from './services/commits.service';

@Module({
  imports: [],
  controllers: [AppController, CommitsController],
  providers: [AppService, CommitsService],
})
export class AppModule {}
