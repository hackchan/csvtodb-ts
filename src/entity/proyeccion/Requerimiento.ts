import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToMany, OneToOne, ManyToOne} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Sigedoc } from './Sigedoc';
import { Tiporequerimiento } from './TipoRequerimiento';
import { MatricesRequeridas } from './MatricesRequeridas';
@Entity()
export class Requerimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToMany(()=>Sigedoc, (sigedoc)=> sigedoc.requerimiento)
  sigedoc: Sigedoc[]

  @ManyToOne(()=>Tiporequerimiento, tiporec => tiporec.requerimientos)
  @JoinColumn({name:'tiporequerimiento_id'})
  tipoRequerimiento: Tiporequerimiento

  @OneToMany(()=>MatricesRequeridas, matrices =>matrices.requerimiento)
  matrices:MatricesRequeridas[]
}