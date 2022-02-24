import { getRepository } from "typeorm";
import { Auth } from "../entity/Auth";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class AuthService {
  constructor(){

  }
  async create(data:object) {
   try {

    const repo = getRepository(Auth)
    const auth = repo.create(data)
    const errors = await validate(auth)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      console.log(constraints)
      throw [constraints]
    }
    const newAuth= repo.create(data)
    const result = await repo.save(newAuth)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Auths= await getRepository(Auth).find({ relations: ["user"]})
     return Auths
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const auth= await getRepository(Auth).findOne(id)
      if (!auth) {
        throw boom.notFound('auth no encontrado')
      }
      return auth
    } catch (error) {
      throw error
    }
  }

  async update(id:number, changes : object) {
    const auth = await this.findOne(id)
    getRepository(Auth).merge(auth, changes)
    const result = await getRepository(Auth).save(auth)
    return result
  }

  async delete(id:number) {
    const auth = await this.findOne(id)
    const result = await getRepository(Auth).remove(auth)
    return result
  }
}

export default AuthService