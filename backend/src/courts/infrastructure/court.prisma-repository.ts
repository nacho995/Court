import { Injectable } from '@nestjs/common';
import * as courtRepository from '../domain/court.repository';
import { PrismaService } from '../../prisma.service';
import { Court } from '../domain/court.entity';
import { CreateCourtDto } from './dto/create-court.dto';
@Injectable()
export class CourtPrismaRepository implements courtRepository.ICourtRepository
{
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Court[]> {
    return this.prisma.court.findMany() as unknown as Promise<Court[]>;
  }
  create(data: CreateCourtDto): Promise<Court> {
    return this.prisma.court.create({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: data as any,
    }) as unknown as Promise<Court>;
  }
}