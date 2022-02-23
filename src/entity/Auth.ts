import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { MinLength, MaxLength, IsString, IsArray, ArrayNotEmpty, IsNotEmpty,ValidateNested } from 'class-validator';
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


  @Column("simple-array", { default: "",nullable: false })
  @IsString({each: true})
  @ArrayNotEmpty()
  @IsArray()
  @IsNotEmpty()

 

  role: string[];

  //  async updatePassword(password:any): Promise<void> {
  //   if (!!password) {
  //     this.password = await bcrypt.hash(password, 10);
  //   }
  // }

}

