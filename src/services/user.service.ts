import { getRepository } from "typeorm";
import { User } from "../entity/auth/User";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class UserService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(User)
    const newUser= repo.create(data)
    const errors = await validate(newUser)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newUser)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const users= await getRepository(User).find({ relations: ["auth"] })
    //  const users = await  getRepository(User)
    //  .createQueryBuilder("user")
    //  .leftJoinAndSelect("user.auth", "auth")
    //  .getMany();
     return users
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const user= await getRepository(User).findOne(id)
      if (!user) {
        throw boom.notFound('usuario no encontrado')
      }
      return user
    } catch (error) {
      throw error
    }
  }

   async findByUserName(username: string) {
    try {
      const user= await getRepository(User).findOne({relations:['auth'],where:{auth:{username}}},)
      if (!user) {
        throw boom.notFound('usuario no encontrado')
      }
      const response = JSON.parse(JSON.stringify(user))
      return response
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const user = await this.findOne(id)
    getRepository(User).merge(user, changes)
    const result = await getRepository(User).save(user)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const user = await this.findOne(id)
      const result = await getRepository(User).remove(user)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default UserService