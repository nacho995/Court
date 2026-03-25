import { Inject, Injectable } from '@nestjs/common';
import * as bookingRepository from '../domain/booking.repository';
import { Booking } from '../domain/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @Inject('BOOKING_REPOSITORY')
     private readonly repo: bookingRepository.BookingRepository,
  ) {}
  findAll(): Promise<Booking[]>{
    return this.repo.findAll();
  }
  create(booking: Booking): Promise<Booking>{
    return this.repo.create(booking);
  }
}