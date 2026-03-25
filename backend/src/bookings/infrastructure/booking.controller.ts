import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from '../application/booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('api/bookings')
export class BookingController {
  constructor(private readonly service: BookingService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.create(dto);
  }
}
