import { Court } from './court.entity';

export interface ICourtRepository {
  findAll(): Promise<Court[]>;
  create(court: Court): Promise<Court>;
}