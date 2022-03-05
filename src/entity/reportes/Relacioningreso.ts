import {Entity, Column, PrimaryGeneratedColumn,OneToMany,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Estructuracion } from '../estructuracion/Estructuracion';

@Entity()
export class Relacioningreso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, name:'anio_reporte'})
  anio: number;

  @Column({nullable:false})
  vigencia: string;

  @Column({nullable:false,  name:'nit_entidad_reportante'})
  nit: number;

  @Column({nullable:false,  name:'nombre_entidad_reportante'})
  nombre: string;

  @Column({nullable:false,  name:'codigo_presupuestal'})
  codigo: string;

  @Column({nullable:false,  name:'macro_campo_nivel_agregado'})
  macro: string;

  @Column({nullable:false,name:'fecha_de_recaudo'})
  fecha: Date;

  @Column({nullable:false,  name:'numero_recibo'})
  recibo: string;

  @Column({nullable:false,  name:'numero_reconocimiento'})
  reconocimiento: number;

  @Column({nullable:false,  name:'numero_identificacion_tercero'})
  terceroId: number;

  @Column({nullable:false,  name:'nombre_tercero'})
  terceroNombre: string;

  @Column({nullable:false,  name:'concepto_recaudo'})
  concepto: string;

  @Column({nullable:false})
  valor: number;

  @Column({nullable:false, name:'cuenta_bancaria_dest'})
  cuentaDest: number;

  @Column({nullable:false,  name:'nombre_banco'})
  banco: string;

  @Column({nullable:false, name:'no_cuenta_banco_orig'})
  cuentaOrig: number;

  @Column({nullable:false,  name:'cta_contable'})
  ctaContable: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Estructuracion,estructuracion => estructuracion.ejecucionIngreso,{cascade:true,onDelete: "CASCADE"})
  @JoinColumn({name:'estructura_id'})
  estructura: Estructuracion;


}