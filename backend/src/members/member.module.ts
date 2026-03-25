import { Module } from '@nestjs/common';
import { MemberController } from './infrastructure/member.controller';
import { MemberService } from './application/member.service';
import { PrismaService } from '../prisma.service';
import { MemberPrismaRepository } from './infrastructure/member.prisma-repository';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [
    MemberService,
    PrismaService,
    {
      provide: 'MEMBER_REPOSITORY',
      useClass: MemberPrismaRepository,
    },
  ],
})
export class MemberModule {}
