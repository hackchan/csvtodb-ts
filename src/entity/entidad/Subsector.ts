import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn, OneToMany} from 'typeorm'
import { Sector } from './Sector';
import {Entidad} from './Entidad'
@Entity()
export class Subsector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  name: string;

  @ManyToOne(()=>Sector, sector => sector.subsectores)
  @JoinColumn({name:'sector_id'})
  sector:Sector

  @OneToMany(()=>Entidad, entidad =>entidad.subsector)
  entidad:Entidad

}