import { Court } from './court.entity';
import { CreateCourtDto } from '../infrastructure/dto/create-court.dto';

export interface ICourtRepository {
  findAll(): Promise<Court[]>;
  create(data: CreateCourtDto): Promise<Court>;
}