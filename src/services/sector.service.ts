import { getRepository } from "typeorm";
import { Sector } from "../entity/Sector";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class SectorService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Sector)
    const newSector= repo.create(data)
    const errors = await validate(newSector)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newSector)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Sectors= await getRepository(Sector).find({relations:['subsectores']})
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
      const sector= await getRepository(Sector).findOne(id)
      if (!sector) {
        throw boom.notFound('sector no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const sector = await this.findOne(id)
    getRepository(Sector).merge(sector, changes)
    const result = await getRepository(Sector).save(sector)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const sector = await this.findOne(id)
      const result = await getRepository(Sector).remove(sector)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default SectorService