import {Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import {Department} from './Department'
@Entity()
export class Satelital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable: false})
  active: boolean = false;

  @OneToMany(()=> Department, department=>department.satelital,{cascade:true})
  departments: Department[]

}