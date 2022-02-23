import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { MinLength, MaxLength, IsString } from 'class-validator';
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true,nullable:false})
  @MinLength(5)
  @MaxLength(20)
  username: string;
   @IsString({
    message: 'password debe ser un String',
  })
   @MinLength(6, {
    message: 'password debe contener  6 digitos',
  })

  @Column({nullable: false})
  password: string;


  @Column({nullable:false})
  @IsString()
  @MinLength(3)
  @MinLength(10)
  role: string;

  //  async updatePassword(password:any): Promise<void> {
  //   if (!!password) {
  //     this.password = await bcrypt.hash(password, 10);
  //   }
  // }

}

