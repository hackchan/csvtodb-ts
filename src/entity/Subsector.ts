import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm'
import { Sector } from './Sector';

@Entity()
export class Subsector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @ManyToOne(()=>Sector, sector => sector.subsectores)
  @JoinColumn({name:'sector_id'})
  sector:Sector

}