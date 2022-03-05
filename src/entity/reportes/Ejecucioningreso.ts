import {Entity, Column, PrimaryGeneratedColumn,OneToMany,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Estructuracion } from '../estructuracion/Estructuracion';

@Entity()
export class Ejecucioningreso {
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

  @Column({nullable:false,  name:'nombre_rubro'})
  rubro: string;

  @Column({nullable:false,  name:'presupuesto_inicial'})
  presupuestoInicial: number;

  @Column({nullable:false,  name:'adiciones_del_periodo'})
  adicionesPeriodo: number;

  @Column({nullable:false,  name:'adiciones_acumuladas'})
  adicionesAcumuladas: number;

  @Column({nullable:false,  name:'reducciones_del_periodo'})
  reduccionesPeriodo: number;

  @Column({nullable:false,  name:'reducciones_acumuladas'})
  reduccionesAcumuladas: number;

  @Column({nullable:false,  name:'apropiacion_definitiva'})
  apropiacionDefinitiva: number;

  @Column({nullable:false,  name:'reconocimientos_del_periodo'})
  reconocimientoPeriodo: number;

  @Column({nullable:false,  name:'reconocimientos_acumulados'})
  reconocimientoAcumulado: number;

  @Column({nullable:false,  name:'recaudos_del_periodo'})
  recaudosPeriodo: number;

  @Column({nullable:false,  name:'recaudos_acumulados'})
  recaudosAcumulados: number;

  @Column({nullable:false,name:'fecha_reporte'})
  fecha: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Estructuracion,estructuracion => estructuracion.ejecucionIngreso,{cascade:true,onDelete: "CASCADE"})
  @JoinColumn({name:'estructura_id'})
  estructura: Estructuracion;


}