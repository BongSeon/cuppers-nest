import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from 'src/entities/user.entity'
import { CreateUserDto } from './dtos/create-user.dto'

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

  @Get('users/:id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id)
  }

  @Post('users')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.createUser(body)
  }
}
