import {Entity, Column, PrimaryGeneratedColumn,OneToOne,CreateDateColumn,UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import {Reporte} from '../reportes/Reporte'
import {Entidad} from '../entidad/Entidad'
import {User} from '../auth/User'
import {Vigencia} from './Vigencia'
import { Requerimiento } from '../proyeccion/Requerimiento';
import { Ejecucioningreso } from '../reportes/Ejecucioningreso';
@Entity()
export class Estructuracion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  file: string;

  @Column({nullable:false})
  peso: string;

  @Column({nullable:false})
  conExito: boolean=false;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @ManyToOne(()=>Reporte)
  @JoinColumn({name:'report_id'})
  reporte: Reporte

  @ManyToOne(()=>Entidad)
  @JoinColumn({name:'entidad_id'})
  entidad: Entidad

  @ManyToOne(()=>User)
  @JoinColumn({name:'user_id'})
  user: User

  @ManyToOne(()=>Vigencia)
  @JoinColumn({name:'vigencia_id'})
  Vigencia: Vigencia

  @ManyToOne(()=>Requerimiento)
  @JoinColumn({name:'requerimiento_id'})
  requerimiento: Requerimiento


   @OneToOne(() => Ejecucioningreso, ejecucion => ejecucion.estructura,{ onDelete: "CASCADE"}) // specify inverse side as a second parameter
   ejecucionIngreso: Ejecucioningreso;



}