import { Module } from '@nestjs/common';
import { BookingController } from './infrastructure/booking.controller';
import { BookingService } from './application/booking.service';
import { PrismaService } from '../prisma.service';
import { BookingPrismaRepository } from './infrastructure/booking.prisma-repository';

@Module({
  imports: [],
  controllers: [BookingController],
  providers: [
    BookingService,
    PrismaService,
    {
      provide: 'BOOKING_REPOSITORY',
      useClass: BookingPrismaRepository,
    },
  ],
})
export class BookingModule {}
