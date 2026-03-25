import { Injectable } from '@nestjs/common';
import { IMemberRepository } from '../domain/member.repository';
import { Member } from '../domain/member.entity';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class MemberPrismaRepository implements IMemberRepository{
  constructor(private readonly prisma: PrismaService) {
  }
  findAll(): Promise<Member[]> {
    return this.prisma.member.findMany();
  }
  create(member: Member): Promise<Member> {
    return this.prisma.member.create({ data: member });
  }
}