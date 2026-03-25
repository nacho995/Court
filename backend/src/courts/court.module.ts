import { Module } from '@nestjs/common';
import { CourtController } from './infrastructure/court.controller';
import { CourtService } from './application/court.service';
import { PrismaService } from '../prisma.service';
import { CourtPrismaRepository } from './infrastructure/court.prisma-repository';

@Module({
  imports: [],
  controllers: [CourtController],
  providers: [CourtService,
    PrismaService,
    {
    provide: 'COURT_REPOSITORY',
    useClass: CourtPrismaRepository,
    }],
})

export class CourtModule {}