import { getRepository } from "typeorm";
import { Department  } from "../entity/entidad/Department";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class DeparmentService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Department)
    const newDeparment= repo.create(data)
    const errors = await validate(newDeparment)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newDeparment)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Deparments= await getRepository(Department).find({relations:['user','satelital','entidades']})
    //  const Deparments = await  getRepository(Deparment)
    //  .createQueryBuilder("Deparment")
    //  .leftJoinAndSelect("Deparment.auth", "auth")
    //  .getMany();
     return Deparments
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number,) {
    try {
      const deparment= await getRepository(Department).findOne(id,{relations:['user','satelital','entidades']})
      if (!deparment) {
        throw boom.notFound('departamento no encontrado')
      }
      return deparment
    } catch (error) {
      throw error
    }
  }

  async update(id:number, changes : object) {
    try {
    const deparment = await this.findOne(id)
    getRepository(Department).merge(deparment, changes)
    const result = await getRepository(Department).save(deparment)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const deparment = await this.findOne(id)
      const result = await getRepository(Department).remove(deparment)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default DeparmentService