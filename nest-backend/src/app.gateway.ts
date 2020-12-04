import { Logger } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({origin: 'localhost:3005'})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private logger: Logger = new Logger('AppGateway');
  clients: Socket[] = [];
  counter = 0;

  afterInit(server: Server) {
    this.logger.log('Gateway inits');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`client connected ${client.id}`);
    this.clients.push(client);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`client disconnected ${client.id}`);
    this.clients.splice(this.clients.findIndex(c => {
      return c.id === client.id;
    }), 1);
  }

  emitNewDataMessage(): void {
    this.clients.forEach(c => c.emit('NEW_DATA', `Git updated: ${this.counter++}`));
  }

}
