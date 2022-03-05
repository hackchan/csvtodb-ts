import {Entity, Column, PrimaryGeneratedColumn,OneToMany,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Estructuracion } from './Estructuracion';
@Entity()
export class Errorlog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  name: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Estructuracion,estructuracion => estructuracion.ejecucionIngreso,{cascade:true,onDelete: "CASCADE"})
  @JoinColumn({name:'estructura_id'})
  estructura: Estructuracion;





}