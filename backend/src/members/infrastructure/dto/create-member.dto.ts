import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MemberLevel } from '../../domain/member.entity';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsEnum(MemberLevel)
  @IsNotEmpty()
  readonly level: MemberLevel;
}
