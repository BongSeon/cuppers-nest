import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CafesController } from './cafes.controller'
import { CafesService } from './cafes.service'
import { Cafe } from 'src/entities/cafe.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Cafe])],
  controllers: [CafesController],
  providers: [CafesService],
})
export class CafesModule {}
