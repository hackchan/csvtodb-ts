import {Entity, Column, PrimaryGeneratedColumn,OneToMany,OneToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import { Estructuracion } from '../estructuracion/Estructuracion';

@Entity()
export class Relacioncdps {
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
  fuente_financiacion: string;

  @Column({nullable:false})
  nombre_cuenta: string;

  @Column({nullable:false})
  macro_campo_nivel_agregado: string;

  @Column({nullable:false})
  numero_cdp: string;

  @Column({nullable:false})
  fecha_cdp: Date;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0,nullable:false })
  valor_cdp: number;

  @Column({nullable:false})
  detalle_cdp: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date

  @OneToOne(() => Estructuracion,estructuracion => estructuracion.ejecucionIngreso,{cascade:true,onDelete: "CASCADE"})
  @JoinColumn({name:'estructura_id'})
  estructura: Estructuracion;


}