import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm'
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

  @ManyToOne(()=>Entidad, entidad => entidad.telefonos)
  entidad: Entidad
}