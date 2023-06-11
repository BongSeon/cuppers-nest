import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { CafesModule } from './cafes/cafes.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cafe } from 'src/entities/cafe.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'cuppers',
      entities: [Cafe], // 사용할 entity의 클래스명을 넣어둔다.
      synchronize: false, // false로 해두는 게 안전하다.
    }),
    UsersModule,
    CafesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
