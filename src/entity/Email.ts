import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm'
import {IsEmail} from "class-validator";
import {Entidad} from './Entidad'
@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  @IsEmail()
  email: string;

  @ManyToOne(()=> Entidad, entidad=> entidad.emails)
  @JoinColumn({name:'email_id'})
  entidad: Entidad

}