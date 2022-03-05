import {Entity, Column, PrimaryGeneratedColumn, Index,OneToOne,CreateDateColumn,UpdateDateColumn, JoinColumn, OneToMany, ManyToOne} from 'typeorm'
import {IsLatitude, IsLongitude} from 'class-validator';
import {Satelital} from './Satelital'
import {User} from '../auth/User'
import {Entidad} from './Entidad'
@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({ type: 'decimal', precision: 9, scale: 6, default: 0, })
  @IsLatitude()
  latitude: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, default: 0, })
  @IsLongitude()
  longitude: number;

  @Column({nullable:false})
  active: boolean = false;

   @ManyToOne(()=> Satelital, satelital=> satelital.departments)
   @JoinColumn({name:'satelital_id'})
   satelital: Satelital

   @ManyToOne(()=> User, (user)=>user.departments)
   @JoinColumn({name:'user_id'})
   user:User

   @OneToMany(()=> Entidad, entidad=>entidad.departamento,{cascade:true})
   entidades: Entidad[]

  // @OneToOne(() => Auth,auth => auth.user,{cascade:true,onDelete: "CASCADE"})
  // @JoinColumn({name:'auth_id'})
  // auth: Auth;

  //  @OneToOne(() => Auth, auth => auth.user,{ onDelete: "CASCADE"}) // specify inverse side as a second parameter
  //  auth: Auth;
}
