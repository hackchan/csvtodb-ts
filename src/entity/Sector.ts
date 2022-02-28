import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Subsector } from './Subsector';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable: false, unique:true})
  initials: string;

  @OneToMany(()=>Subsector, subsector => subsector.sector,{cascade:true})
  subsectores: Subsector[]
}