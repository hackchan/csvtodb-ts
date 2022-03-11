import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn, OneToMany,ManyToMany,JoinTable} from 'typeorm'
import {IsEmail, IsUrl, IsOptional} from "class-validator";
import {Entidad} from '../entidad/Entidad'

@Entity()
export class Agenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable:false})
  fechaInicio: Date;

  @Column({nullable:false})
  fechaFin: Date;

  @Column({nullable:false})
  realizado: boolean = false;

  @Column('text')
  observaciones: string;

 @ManyToMany(()=>Entidad, entidad=>entidad.agendas)
  @JoinTable({
    name:'reunion',
    joinColumn:{
      name:'agenda_id'
    },
    inverseJoinColumn:{
    name:'entidad_id'
    }
  })
   entidades: Entidad[]





}