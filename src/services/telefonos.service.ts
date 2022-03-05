import { getRepository } from "typeorm";
import { Telefono } from "../entity/entidad/Telefono";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class TelefonoService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Telefono)
    const newTelefono= repo.create(data)
    const errors = await validate(newTelefono)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newTelefono)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const telefonos= await getRepository(Telefono).find({relations:['entidad']})
    //  const Sectors = await  getRepository(Sector)
    //  .createQueryBuilder("Sector")
    //  .leftJoinAndSelect("Sector.auth", "auth")
    //  .getMany();
     return telefonos
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const sector= await getRepository(Telefono).findOne(id,{relations:['entidad']})
      if (!sector) {
        throw boom.notFound('Telefono no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const telefono = await this.findOne(id)
    getRepository(Telefono).merge(telefono, changes)
    const result = await getRepository(Telefono).save(telefono)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const telefono = await this.findOne(id)
      const result = await getRepository(Telefono).remove(telefono)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default TelefonoService