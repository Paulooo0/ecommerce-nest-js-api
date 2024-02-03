import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Product } from './products/entities/product.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  dataSource.synchronize(true);

  const productRepo = dataSource.getRepository(Product);
  await productRepo.insert([{
    id: '1',
    name: 'Product 1',
    description: 'Product 1 description',
    price: 10,
    image_url: 'https://localhost:9000/products/1.png',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Product 2 description',
    price: 20,
    image_url: 'https://localhost:9000/products/2.png',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Product 3 description',
    price: 30,
    image_url: 'https://localhost:9000/products/3.png',
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'Product 4 description',
    price: 40,
    image_url: 'https://localhost:9000/products/4.png',
  },
  ])
}
bootstrap();
