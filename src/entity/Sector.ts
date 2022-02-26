import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false, unique:true})
  name: string;

  @Column({nullable: false, unique:true})
  initials: string;


}