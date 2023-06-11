import { IsNumber, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  nickname: string

  @IsString()
  description: string

  @IsNumber()
  lv: number
}
