import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { config } from 'dotenv';
config();

const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER;
const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS;

@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: `amqp://${RABBITMQ_DEFAULT_USER}:${RABBITMQ_DEFAULT_PASS}@localhost:5672`
    })
  ],
  exports: [RabbitMQModule]
})
export class RabbitmqModule {}
