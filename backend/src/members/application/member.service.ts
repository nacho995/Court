import { Inject, Injectable } from '@nestjs/common';
import * as memberRepository from '../domain/member.repository';
import { Member } from '../domain/member.entity';
import { CreateMemberDto } from '../infrastructure/dto/create-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MEMBER_REPOSITORY')
    private readonly repo: memberRepository.IMemberRepository,
  ) {}
  findAll(): Promise<Member[]> {
    return this.repo.findAll();
  }
  create(data: CreateMemberDto): Promise<Member> {
    return this.repo.create(data);
  }
}
