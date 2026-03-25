import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { MemberService } from '../application/member.service';
import { Member } from '../domain/member.entity';

@Controller('api/members')
export class MemberController {
  constructor(private readonly service: MemberService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() member) {
    return this.service.create(member);
  }
}