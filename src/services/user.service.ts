import { getRepository } from "typeorm";
import { User } from "../entity/User";
import boom from '@hapi/boom'

class UserService {
  constructor(){

  }
  async create(data:object) {
   try {
    const newUser= getRepository(User).create(data)
    const result = await getRepository(User).save(newUser)
    return result
   } catch (error) {
     console.log('error go go:', error)
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