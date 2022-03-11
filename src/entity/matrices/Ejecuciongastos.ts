import {Entity, Column, PrimaryGeneratedColumn,OneToMany,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Estructuracion } from '../estructuracion/Estructuracion';

@Entity()
export class Ejecuciongastos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  anio: number;

  @Column({nullable:false})
  vigencia: string;

  @Column({nullable:false})
  nit_entidad: number;

  @Column({nullable:false})
  nombre_entidad: string;

  @Column({nullable:false})
  cod_cuenta: string;

  @Column({nullable:false})
  fuente_financiacion: string;

  @Column({nullable:false})
  nombre_cuenta: string;

  @Column({nullable:false})
  macro_campo_nivel_agregado: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  apropiacion_inicial: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  adiciones_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  adiciones_acumuladas: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  reducciones_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  reducciones_acumuladas: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  contracreditos_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  contracreditos_acumulados: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  apropiacion_definitiva: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  aplazamientos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  desaplazamientos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  cdps_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  cdps_acumulado: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  compromisos_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  compromisos_acumulado: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  obligaciones_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  obligaciones_acumulado: number;

  @Column({nullable:false})
  pagos_periodo: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  pagos_acumulado: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  saldo_disponible: number;

  @Column({ type: 'decimal', precision: 9, scale: 2, default: 0,nullable:false })
  porcentaje_ejecucion: number;

  @Column({nullable:false})
  fecha_reporte: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Estructuracion,estructuracion => estructuracion.ejecucionIngreso,{cascade:true,onDelete: "CASCADE"})
  @JoinColumn({name:'estructura_id'})
  estructura: Estructuracion;


}