import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne,OneToMany} from 'typeorm'
import {IsInt, Min, Max} from "class-validator";
import {Auth} from './Auth'
import {Tipoentidad } from './TipoEntidad';
import {Department} from './Department';
import {Subsector} from './Subsector';
import {Email} from './Email'
import {Telefono} from './Telefono'
@Entity()
export class Entidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  nit: string;

  @Column({nullable:false})
  name: string;

  @Column({nullable: false})
  db: string;

  @Column({nullable:false})
  capital: boolean=false;

  @Column({nullable:true, unique:true})
  cgn: string;

  @Column({nullable:true, unique:true})
  divipola: string;

  @Column({nullable:true})
  @IsInt()
  @Min(1)
  @Max(6)
  categoria: number;

  @ManyToOne(()=> Tipoentidad, (tipoentidad)=>tipoentidad.entidades)
  @JoinColumn({name:'tipoentidad_id'})
  tipoentidad:Tipoentidad

  @OneToOne(() => Auth,{ onDelete: "CASCADE"}) // specify inverse side as a second
  @JoinColumn({name:'auth_id'})
  auth: Auth;

  @ManyToOne(()=> Department, department=> department.entidades)
  @JoinColumn({name:'depart_id'})
  departamento: Department

  @ManyToOne(()=> Subsector)
  @JoinColumn({name:'subsector_id'})
  subsector: Subsector

  @OneToMany(()=> Email, email=> email.entidad,{cascade:true})
  emails: Email[]

  @OneToMany(()=> Telefono, telefono => telefono.entidad,{cascade:true})
  telefonos: Telefono[]
}
