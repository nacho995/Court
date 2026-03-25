import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourtService } from '../application/court.service';
import { CreateCourtDto } from './dto/create-court.dto';

@Controller('api/courts')
export class CourtController {
  constructor(private readonly service: CourtService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() dto: CreateCourtDto) {
    return this.service.create(dto);
  }
}
