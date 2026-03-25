import { Injectable } from '@nestjs/common';
import * as courtRepository from '../domain/court.repository';
import { PrismaService } from '../../prisma.service';
import { Court } from '../domain/court.entity';
@Injectable()
export class CourtPrismaRepository implements courtRepository.ICourtRepository
{
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Court[]> {
    return this.prisma.court.findMany();
  }
    create(court: Court): Promise<Court> {
    return this.prisma.court.create({data: court});
  }
}