import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { MatricesRequeridas } from './MatricesRequeridas';

@Entity()
export class Periocidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable:true})
  dias: number;

  @OneToMany(()=>MatricesRequeridas, matrices => matrices.periocidad)
  matrices: MatricesRequeridas[]
}

