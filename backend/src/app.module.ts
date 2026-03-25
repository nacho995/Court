import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { MemberModule } from './members/member.module';
import { CourtModule } from './courts/court.module';
import { BookingModule } from './bookings/booking.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [MemberModule, CourtModule, BookingModule, AiModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
