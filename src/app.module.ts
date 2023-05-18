import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ItemModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    autoLoadEntities:true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}