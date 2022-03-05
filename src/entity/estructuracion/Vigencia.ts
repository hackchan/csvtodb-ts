import {Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";

@Entity()
export class Vigencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: number;

}