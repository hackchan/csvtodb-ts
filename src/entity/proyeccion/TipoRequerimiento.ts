import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToMany, OneToOne} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Sigedoc } from './Sigedoc';
import { Requerimiento } from './Requerimiento';
@Entity()

export class Tiporequerimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToMany(()=>Requerimiento, reque => reque.tipoRequerimiento)
  requerimientos:Requerimiento[]
}