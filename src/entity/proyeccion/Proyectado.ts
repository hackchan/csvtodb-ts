import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany,JoinTable,CreateDateColumn,UpdateDateColumn,JoinColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Requerimiento } from './Requerimiento';
import { Entidad } from '../entidad/Entidad';
import { Sigedoc } from './Sigedoc';
@Entity()
export class Proyectado {
  @Column({nullable:false})
  fechaSale: Date;

  @Column({nullable:false})
  fechaEntrega: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @Column('text')
  description: string;

  @ManyToOne(()=>Sigedoc, sigedoc=> sigedoc.proyectados,{primary:true})
  @JoinColumn({name:'sigedoc_id'})
  sigedoc: Sigedoc

  @ManyToOne(()=>Entidad, entidad=> entidad.proyectados,{primary:true})
  @JoinColumn({name:'entidad_id'})
  entidad: Entidad
}