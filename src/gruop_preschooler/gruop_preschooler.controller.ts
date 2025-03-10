import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateGruopPreschoolerDto } from './dto/create-gruop_preschooler.dto';
import { UpdateGruopPreschoolerDto } from './dto/update-gruop_preschooler.dto';
import { GroupPreschoolerService } from './gruop_preschooler.service';

@Controller('gruop-preschooler')
export class GruopPreschoolerController {
  constructor(private readonly groupPreschoolerService: GroupPreschoolerService) {}

  @Post()
  create(@Body() createGruopPreschoolerDto: CreateGruopPreschoolerDto) {
    return this.groupPreschoolerService.create(createGruopPreschoolerDto);
  }

  @Get()
  findAll() {
    return this.groupPreschoolerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupPreschoolerService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupPreschoolerService.delete(+id);
  }
}
