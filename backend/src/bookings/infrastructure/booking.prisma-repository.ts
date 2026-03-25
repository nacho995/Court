import { Injectable } from '@nestjs/common';
import * as bookingRepository from '../domain/booking.repository';
import { Booking } from '../domain/booking.entity';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BookingPrismaRepository implements bookingRepository.BookingRepository{
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Booking[]> {
    return this.prisma.booking.findMany();
  }
  create(booking: Booking): Promise<Booking> {
    return this.prisma.booking.create({data: booking});
  }
}