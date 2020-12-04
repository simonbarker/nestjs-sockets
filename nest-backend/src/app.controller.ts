import { Controller, Get } from '@nestjs/common';
import { AppGateway } from './app.gateway';

@Controller('')
export class AppController {

  constructor(private appGateway: AppGateway) {}

  @Get('dataUpdated')
  dataUpdated() {
    console.log('received update message');
    
    this.appGateway.emitNewDataMessage();
  }
}