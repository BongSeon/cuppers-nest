import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cafe } from 'src/entities/cafe.entity'

@Injectable()
export class CafesService {
  constructor(
    @InjectRepository(Cafe)
    private cafeRepository: Repository<Cafe>
  ) {}

  getCafes(): Promise<Cafe[]> {
    return this.cafeRepository.find()
  }
}
