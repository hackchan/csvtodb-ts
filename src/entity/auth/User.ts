import {Entity, Column, PrimaryGeneratedColumn, Index,OneToOne,CreateDateColumn,UpdateDateColumn, JoinColumn, OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import {Auth} from './Auth'
import { Department } from '../entidad/Department';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  name: string;

  @Column({name:'last_name',  nullable: false})
  lastName: string;

  @Column({nullable:false,  unique: true})
  phone: string;

  @Column({nullable:false})
  tipo: string;

  @Column({nullable:false, unique:true})
  @IsEmail()
  email: string;

  @Column({nullable:true})
  @Index({ unique: true, where: "image IS NOT NULL" })
  @IsOptional()
  @IsUrl()
  image?: string;


  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  // @OneToOne(() => Auth,auth => auth.user,{cascade:true,onDelete: "CASCADE"})
  // @JoinColumn({name:'auth_id'})
  // auth: Auth;

   @OneToOne(() => Auth, auth => auth.user,{ onDelete: "CASCADE"}) // specify inverse side as a second parameter
   auth: Auth;

   @OneToMany(()=> Department, department=> department.user)
   departments: Department[]
}

