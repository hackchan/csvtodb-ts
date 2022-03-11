import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany,JoinTable, OneToMany,OneToOne, JoinColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Requerimiento } from './Requerimiento';
import { Entidad } from '../entidad/Entidad';
import { Proyectado } from './Proyectado';
@Entity()
export class Sigedoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable:true})
  // @Index({ unique: true, where: "image IS NOT NULL" })
  // @IsOptional()
  @IsUrl()
  image?: string;

  @ManyToOne(()=>Requerimiento, requerimiento=> requerimiento.sigedoc,{ onDelete: "CASCADE"})
  @JoinColumn({name:'requerimiento_id'})
  requerimiento: Requerimiento

  @OneToMany(()=>Proyectado, proyectado =>proyectado.sigedoc)
  proyectados:Proyectado[]

  // @ManyToMany(()=>Entidad, entidad=>entidad.sigedocs)
  // @JoinTable({
  //   name:'proyeccion',
  //   joinColumn:{
  //     name:'sigedoc_id'
  //   },
  //   inverseJoinColumn:{
  //   name:'entidad_id'
  //   }
  // })
  // entidades: Entidad[]
}