import {Entity, Column, PrimaryGeneratedColumn, Index,OneToOne,CreateDateColumn,UpdateDateColumn, JoinColumn, OneToMany, ManyToOne} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import {Auth} from './Auth'
import { Department } from '../entidad/Department';
import { TypeUser } from './TypeUser';
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

  @OneToOne(() => Auth, auth => auth.user,{nullable:true,  onDelete: "SET NULL",onUpdate:"CASCADE"})
  auth: Auth;

  @OneToMany(()=> Department, department=> department.user)
  departments: Department[]

  @ManyToOne(()=>TypeUser, typeuser=>typeuser.users,{nullable:false,onDelete: "CASCADE",onUpdate:"CASCADE"})
  @JoinColumn({name:'type_id'})
  tipo:TypeUser

}

