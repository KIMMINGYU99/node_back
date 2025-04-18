import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Bread')
@Check('"price">0')
export class Bread {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'int' })
  price: number;
}
