import {Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm'

import {Entidad} from './Entidad'
@Entity()
export class Tipoentidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToMany(()=> Entidad, entidad=>entidad.tipoentidad,{cascade:true})
  entidades: Entidad[]
}