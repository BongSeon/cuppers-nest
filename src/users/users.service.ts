import { Injectable } from '@nestjs/common'
import { User } from 'src/entities/user.entity'

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      nickname: '뤼에르 🦢',
      thumbnail_url:
        'https://image-pastemagazine-com-public-bucket.storage.googleapis.com/wp-content/uploads/2023/02/27182000/fire_emblem_engage_main.jpg',
      email: 'user_aaaaa@cuppers.shop',
      lv: 2,
      description: '안녕하세요',
      created_at: '2023-01-20T11:28:58.670Z',
      login_at: new Date().toISOString(),
      user_surveyed: false,
    },
    {
      id: 2,
      nickname: '여름',
      thumbnail_url:
        'https://firebasestorage.googleapis.com/v0/b/cuppers-cafe.appspot.com/o/avatar%2Fcats%2F1.jpg?alt=media&token=dc62f7d6-c43d-43b6-a8ed-78159e28725e',
      email: 'hba@kakao.com',
      lv: 2,
      description: '여행자의 시선으로, 카페를 기록합니다.',
      created_at: '2022-07-23T13:25:15.000Z',
      user_surveyed: false,
    },
    {
      id: 3,
      nickname: '성우',
      thumbnail_url:
        'https://firebasestorage.googleapis.com/v0/b/cuppers-cafe.appspot.com/o/avatar%2Fcats%2F2.jpg?alt=media&token=90ebcf06-8271-47fe-b1d0-2c61389265d6',
      lv: 2,
      email: 'sw@test.com',
      description: '여행자의 시선으로, 카페를 기록합니다.',
      created_at: '2022-07-23T13:25:15.000Z',
      user_surveyed: false,
    },
  ]

  login() {
    return 'login success!'
  }

  getMe(): User {
    return this.users[0]
  }

  getUsers(): User[] {
    return this.users
  }
}
