import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Cafe {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cafe_id' })
  cafe_id: number

  @Column('varchar', { name: 'cafe_name_pr', length: 100 })
  cafe_name_pr: string

  @Column()
  cafe_address: string

  @Column()
  headquater_id: number

  @Column()
  created_at: string
}
