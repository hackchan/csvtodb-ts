import {Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Categoria } from './Categoria';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @OneToMany(()=>Categoria, categoria=>categoria.modelo, {cascade:true})
  categorias:Categoria[]
}