import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateBookingDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly memberId: number;
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly courtId: number;
  @IsDateString()
  @IsNotEmpty()
  readonly startTime: string;
  @IsDateString()
  @IsNotEmpty()
  readonly endTime: string;
}