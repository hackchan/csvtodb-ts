import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm'
import {IsEmail, IsUrl, IsOptional, IsDateString} from "class-validator";
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

  @Column({nullable:false})
  @IsDateString()
  createdAt?: Date;

}

