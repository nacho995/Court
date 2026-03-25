import { Inject, Injectable } from '@nestjs/common';
import { Court } from '../domain/court.entity';
import * as courtRepository from '../domain/court.repository';

@Injectable()
export class CourtService {
  constructor(
    @Inject('COURT_REPOSITORY')
    private readonly repo: courtRepository.ICourtRepository,
  ) {}
  findAll(): Promise<Court[]> {
    return this.repo.findAll();
  }
  create(court: Court): Promise<Court> {
    return this.repo.create(court);
  }
}
