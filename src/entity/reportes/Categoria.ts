import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn, OneToMany} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Modelo } from './Modelo';
import { Mode } from 'fs';
import { Reporte } from './Reporte';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @ManyToOne(()=>Modelo, modelo=>modelo.categorias)
  @JoinColumn({name:'modelo_id'})
  modelo: Modelo

  @OneToMany(()=>Reporte,reporte=>reporte.categoria,{cascade:true})
  reportes: Reporte[]
}