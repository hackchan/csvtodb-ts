import {Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany} from 'typeorm'
import { MinLength, MaxLength, IsString, IsArray, ArrayNotEmpty, IsNotEmpty} from 'class-validator';
import {User} from './User'
@Entity()
export class TypeUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true,nullable:false})
  @MinLength(5)
  @MaxLength(20)
  name: string;

  @OneToMany(()=>User,user=>user.tipo,{cascade:true})
  users: User[]


}

