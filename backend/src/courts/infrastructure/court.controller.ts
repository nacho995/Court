import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourtService } from '../application/court.service';

@Controller('api/courts')
export class CourtController {
  constructor(private readonly service: CourtService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() court){
    return this.service.create(court);
  }
}
