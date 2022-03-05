import { getRepository } from "typeorm";
import { Satelital } from "../entity/entidad/Satelital";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class SatelitalsService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Satelital)
    const newSatelital= repo.create(data)
    const errors = await validate(newSatelital)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newSatelital)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const satelitals= await getRepository(Satelital).find({relations:['departments']})
    //  const Deparments = await  getRepository(Deparment)
    //  .createQueryBuilder("Deparment")
    //  .leftJoinAndSelect("Deparment.auth", "auth")
    //  .getMany();
     return satelitals
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const satelital= await getRepository(Satelital).findOne(id,{relations:['departments']})
      if (!satelital) {
        throw boom.notFound('satelital no encontrada')
      }
      return satelital
    } catch (error) {
      throw error
    }
  }

  async update(id:number, changes : object) {
    try {
    const satelital = await this.findOne(id)
    getRepository(Satelital).merge(satelital, changes)
    const result = await getRepository(Satelital).save(satelital)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const satelital = await this.findOne(id)
      const result = await getRepository(Satelital).remove(satelital)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default SatelitalsService