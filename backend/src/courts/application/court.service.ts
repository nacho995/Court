import { Inject, Injectable } from '@nestjs/common';
import { Court } from '../domain/court.entity';
import * as courtRepository from '../domain/court.repository';
import {CreateCourtDto} from "../infrastructure/dto/create-court.dto";

@Injectable()
export class CourtService {
  constructor(
    @Inject('COURT_REPOSITORY')
    private readonly repo: courtRepository.ICourtRepository,
  ) {}
  findAll(): Promise<Court[]> {
    return this.repo.findAll();
  }
  create(data: CreateCourtDto): Promise<Court> {
    return this.repo.create(data);
  }
}
