import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Crud, Crudstatus } from './crud.model';
import { CrudService } from './crud.service';
import { CreateDto } from './dto/create.dto';

@Controller('crud')
export class CrudController {
    constructor(private crudService: CrudService) {}

    @Post()
    create(@Body() createDto:CreateDto){
      return this.crudService.create(createDto)
    }
  
    @Get()
    getAll(){
      return this.crudService.getAll();
    }
  
    @Get('/:id')
    getByID(@Param ('id')id:string):Crud{
      return this.crudService.getByID(id);
    }
  
    @Delete('/:id')
    deleteByID(@Param ('id')id:string){
      return this.crudService.deleteByID(id);
    }
  
    @Put('/:id/status')
    updateByID(
      @Param ('id') id:string ,
      @Body ("status") status:Crudstatus)
      :Crud{
      return this.crudService.updateByID(id,status)
    }
}
