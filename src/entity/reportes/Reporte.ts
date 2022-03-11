import {Entity, Column, PrimaryGeneratedColumn,JoinColumn, ManyToOne,OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Categoria } from './Categoria';
import { MatricesRequeridas} from '../proyeccion/MatricesRequeridas'
@Entity()
export class Reporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @ManyToOne(()=>Categoria, categoria=>categoria.reportes)
  @JoinColumn({name:'categoria_id'})
  categoria:Categoria

  @OneToMany(()=>MatricesRequeridas, matrices =>matrices.reporte)
  matrices:MatricesRequeridas[]
}