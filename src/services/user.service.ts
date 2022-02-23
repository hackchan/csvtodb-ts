import { getRepository } from "typeorm";
import { User } from "../entity/User";
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
     const users= await getRepository(User).find()
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

  async update(id:number, changes : object) {
    const user = await this.findOne(id)
    getRepository(User).merge(user, changes)
    const result = await getRepository(User).save(user)
    return result
  }

  async delete(id:number) {
    const user = await this.findOne(id)
    const result = await getRepository(User).delete(user)
    return result
  }
}

export default UserService