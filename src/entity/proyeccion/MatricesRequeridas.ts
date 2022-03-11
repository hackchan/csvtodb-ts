import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany,JoinTable,CreateDateColumn,UpdateDateColumn,JoinColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Requerimiento } from './Requerimiento';
import { Entidad } from '../entidad/Entidad';
import { Sigedoc } from './Sigedoc';
import { Reporte } from '../reportes/Reporte';
import { Periocidad } from './Periocidad';
@Entity()
export class MatricesRequeridas {

  @ManyToOne(()=>Requerimiento, requerimiento=> requerimiento.matrices,{primary:true})
  @JoinColumn({name:'requerimiento_id'})
  requerimiento: Requerimiento

  @ManyToOne(()=>Reporte, reporte=> reporte.matrices,{primary:true})
  @JoinColumn({name:'reporte_id'})
  reporte: Reporte

  @ManyToOne(()=>Periocidad, periocidad=> periocidad.matrices)
  @JoinColumn({name:'periocidad_id'})
  periocidad: Periocidad


}