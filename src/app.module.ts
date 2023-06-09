import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { MeModule } from './me/me.module'

@Module({
  imports: [UsersModule, MeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
