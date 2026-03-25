import { Member } from './member.entity';
import { CreateMemberDto } from '../infrastructure/dto/create-member.dto';

export interface IMemberRepository {
  findAll(): Promise<Member[]>;
  create(data: CreateMemberDto): Promise<Member>;
}