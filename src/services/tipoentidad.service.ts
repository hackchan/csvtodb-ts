import { getRepository } from "typeorm";
import { Tipoentidad } from "../entity/TipoEntidad";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class TipoentidadService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Tipoentidad)
    const newTipoentidad= repo.create(data)
    const errors = await validate(newTipoentidad)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newTipoentidad)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Sectors= await getRepository(Tipoentidad).find()
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
      const sector= await getRepository(Tipoentidad).findOne(id)
      if (!sector) {
        throw boom.notFound('Tipoentidad no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const tipoentidad = await this.findOne(id)
    getRepository(Tipoentidad).merge(tipoentidad, changes)
    const result = await getRepository(Tipoentidad).save(tipoentidad)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const tipoentidad = await this.findOne(id)
      const result = await getRepository(Tipoentidad).remove(tipoentidad)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default TipoentidadService