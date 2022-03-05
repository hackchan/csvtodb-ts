import { getRepository } from "typeorm";
import { Entidad } from "../entity/entidad/Entidad";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class EntidadService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Entidad)
    const newEntidad= repo.create(data)
    const errors = await validate(newEntidad)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newEntidad)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Entidads= await getRepository(Entidad).find({relations:['emails','telefonos','departamento','tipoentidad','auth','subsector']})
    //  const Deparments = await  getRepository(Deparment)
    //  .createQueryBuilder("Deparment")
    //  .leftJoinAndSelect("Deparment.auth", "auth")
    //  .getMany();
     return Entidads
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const entidad= await getRepository(Entidad).findOne(id,{relations:['emails','telefonos','departamento','tipoentidad','auth','subsector']})
      if (!entidad) {
        throw boom.notFound('Entidad no encontrada')
      }
      return entidad
    } catch (error) {
      throw error
    }
  }

  async update(id:number, changes : object) {
    try {
    const entidad = await this.findOne(id)
    getRepository(Entidad).merge(entidad, changes)
    const result = await getRepository(Entidad).save(entidad)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const entidad = await this.findOne(id)
      const result = await getRepository(Entidad).remove(entidad)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default EntidadService