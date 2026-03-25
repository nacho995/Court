import { Injectable } from '@nestjs/common';
import { IMemberRepository } from '../domain/member.repository';
import { Member } from '../domain/member.entity';
import { PrismaService } from '../../prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberPrismaRepository implements IMemberRepository{
  constructor(private readonly prisma: PrismaService) {
  }
  findAll(): Promise<Member[]> {
    return this.prisma.member.findMany() as unknown as Promise<Member[]>;
  }
  create(data: CreateMemberDto): Promise<Member> {
    return this.prisma.member.create({ data }) as unknown as Promise<Member>;
  }
}
