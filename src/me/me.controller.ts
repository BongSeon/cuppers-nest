import { Controller, Get, Post } from '@nestjs/common'
import { MeService } from './me.service'
import { User } from 'src/entities/user.entity'

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  getMe(): User {
    return this.meService.getMe()
  }

  @Post()
  login(): boolean {
    return true
  }
}
