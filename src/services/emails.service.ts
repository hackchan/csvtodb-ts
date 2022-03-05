import { getRepository } from "typeorm";
import { Email } from "../entity/entidad/Email";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class EmailService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Email)
    const newEmail= repo.create(data)
    const errors = await validate(newEmail)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newEmail)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Sectors= await getRepository(Email).find({relations:['entidad']})
    //  const Sectors = await  getRepository(Sector)
    //  .createQueryBuilder("Sector")
    //  .leftJoinAndSelect("Sector.auth", "auth")
    //  .getMany();
     return Sectors
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const sector= await getRepository(Email).findOne(id,{relations:['entidad']})
      if (!sector) {
        throw boom.notFound('Email no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const email = await this.findOne(id)
    getRepository(Email).merge(email, changes)
    const result = await getRepository(Email).save(email)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const email = await this.findOne(id)
      const result = await getRepository(Email).remove(email)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default EmailService