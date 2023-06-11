import { Controller, Get } from '@nestjs/common'
import { CafesService } from './cafes.service'

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  getCafes() {
    return this.cafesService.getCafes()
  }
}
