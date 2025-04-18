import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Rank {
  Silver = 'Silver',
  Gold = 'Gold',
  Platinum = 'Platinum',
}

@Entity('Customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'enum', enum: Rank, default: Rank.Silver })
  rank: Rank;
}
