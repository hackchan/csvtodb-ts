import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne,JoinColumn} from 'typeorm'
import { Entidad } from './Entidad';


@Entity()
export class Telefono {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  numero: string;

  @Column({nullable: true})
  contacto: string;

  @Column({nullable: true})
  cargo: string;

  @ManyToOne(()=>Entidad, entidad => entidad.telefonos,{nullable:false})
  @JoinColumn({name:'entidad_id'})
  entidad: Entidad
}