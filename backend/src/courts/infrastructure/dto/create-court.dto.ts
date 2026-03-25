import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CourtType, Surface } from '../../domain/court.entity';

export class CreateCourtDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsEnum(CourtType)
  @IsNotEmpty()
  readonly type: CourtType;
  @IsEnum(Surface)
  @IsNotEmpty()
  readonly surface: Surface;
  @IsBoolean()
  @IsNotEmpty()
  readonly indoor: boolean;
}
