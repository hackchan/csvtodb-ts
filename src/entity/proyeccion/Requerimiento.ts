import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Sigedoc } from './Sigedoc';


@Entity()
export class Requerimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToMany(()=>Sigedoc, (sigedoc)=> sigedoc.requerimiento)
  sigedocs: Sigedoc[]

}