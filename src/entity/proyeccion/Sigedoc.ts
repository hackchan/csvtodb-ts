import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, ManyToOne, ManyToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Requerimiento } from './Requerimiento';


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

  @ManyToOne(()=>Requerimiento, requerimiento=> requerimiento.sigedocs)
  requerimiento: Requerimiento


}