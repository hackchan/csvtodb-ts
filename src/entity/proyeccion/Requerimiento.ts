import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToMany, OneToOne} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Sigedoc } from './Sigedoc';
@Entity()
export class Requerimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToOne(()=>Sigedoc, (sigedoc)=> sigedoc.requerimiento)
  @JoinColumn({name:'sigedoc_id'})
  sigedoc: Sigedoc

}