import { Controller, Get } from '@nestjs/common'

@Controller('users')
export class UsersController {
  private users = [
    {
      user_id: 1,
      user_email: 'hba@kakao.com',
      user_introduce: '여행자의 시선으로, 카페를 기록합니다.',
      user_lv: 2,
      user_thumbnail_url:
        'https://firebasestorage.googleapis.com/v0/b/cuppers-cafe.appspot.com/o/avatar%2Fcats%2F1.jpg?alt=media&token=dc62f7d6-c43d-43b6-a8ed-78159e28725e',
      user_nickname: '여름',
      created_at: '2022-07-23T13:25:15.000Z',
      user_surveyed: 0,
    },
    {
      user_id: 2,
      user_email: 'sw@test.com',
      user_introduce: '성우',
      user_lv: 2,
      user_thumbnail_url:
        'https://firebasestorage.googleapis.com/v0/b/cuppers-cafe.appspot.com/o/avatar%2Fcats%2F2.jpg?alt=media&token=90ebcf06-8271-47fe-b1d0-2c61389265d6',
      user_nickname: '성우',
      created_at: '2022-07-23T13:25:15.000Z',
      user_surveyed: 0,
    },
  ]

  @Get()
  getUsers() {
    return this.users
  }
}
