import { Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from 'src/entities/user.entity'

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login() {
    return this.usersService.login()
  }

  @Get('me')
  getMe(): User {
    return this.usersService.getMe()
  }

  @Get('users')
  getUsers() {
    return this.usersService.getUsers()
  }
}
