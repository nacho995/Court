import { Member } from './member.entity';

export interface IMemberRepository {
  findAll(): Promise<Member[]>;
  create(member: Member): Promise<Member>;
}