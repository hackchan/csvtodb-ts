import { getRepository } from "typeorm";
import { TypeUser } from "../entity/auth/TypeUser";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class TipoUserService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(TypeUser)
    const newtipoUser= repo.create(data)
    const errors = await validate(newtipoUser)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newtipoUser)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Sectors= await getRepository(TypeUser).find()
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
      const sector= await getRepository(TypeUser).findOne(id)
      if (!sector) {
        throw boom.notFound('Tipouser no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const tipoUser = await this.findOne(id)
    getRepository(TypeUser).merge(tipoUser, changes)
    const result = await getRepository(TypeUser).save(tipoUser)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const tipoUser = await this.findOne(id)
      const result = await getRepository(TypeUser).remove(tipoUser)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default TipoUserService