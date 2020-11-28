import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { Stechy1Gateway } from './stechy1.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
