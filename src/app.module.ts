import { Module } from '@nestjs/common';
import { CrudController } from './crud/crud.controller';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [CrudModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
