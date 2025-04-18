import { Entity, Column, PrimaryGeneratedColumn, Check } from 'typeorm';

enum Rank {
  Silver = 'Silver',
  Gold = 'Gold',
  Platinum = 'Platinum',
}

@Entity('Customer')
@Check(`"age" >= 0`) // 나이는 0 이상
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'enum', enum: Rank, default: Rank.Silver })
  rank: Rank;

  @Column({ type: 'int' })
  age: number;
}
