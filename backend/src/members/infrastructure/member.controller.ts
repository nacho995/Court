import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from '../application/member.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('api/members')
export class MemberController {
  constructor(private readonly service: MemberService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Post()
  create(@Body() dto: CreateMemberDto) {
    return this.service.create(dto);
  }
}