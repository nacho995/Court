import { Injectable } from '@nestjs/common';
import * as bookingRepository from '../domain/booking.repository';
import { Booking } from '../domain/booking.entity';
import { PrismaService } from '../../prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingPrismaRepository
  implements bookingRepository.BookingRepository
{
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Booking[]> {
    return this.prisma.booking.findMany() as unknown as Promise<Booking[]>;
  }
  create(data: CreateBookingDto): Promise<Booking> {
    return this.prisma.booking.create({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: data as any,
    }) as unknown as Promise<Booking>;
  }
}