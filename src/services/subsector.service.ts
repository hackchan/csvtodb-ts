import { getRepository } from "typeorm";
import { Subsector } from "../entity/Subsector";
import boom from '@hapi/boom'
import { validate } from "class-validator";

class SubsectorService {
  constructor(){

  }
  async create(data:object) {
   try {
    const repo = getRepository(Subsector)
    const newsubSector= repo.create(data)
    const errors = await validate(newsubSector)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      throw [constraints]
    }
    const result = await repo.save(newsubSector)
    return result
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Sectors= await getRepository(Subsector).find({relations:['sector']})
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
      const sector= await getRepository(Subsector).findOne(id)
      if (!sector) {
        throw boom.notFound('subsector no encontrado')
      }
      return sector
    } catch (error) {
      throw error
    }
  }

    async update(id:number, changes : object) {
    try {
    const subsector = await this.findOne(id)
    getRepository(Subsector).merge(subsector, changes)
    const result = await getRepository(Subsector).save(subsector)
    return result
    } catch (error) {
      throw error
    }
  }

  async delete(id:number) {
    try {
      const subsector = await this.findOne(id)
      const result = await getRepository(Subsector).remove(subsector)
      return result
    } catch (error) {
      throw error
    }
  }
}

export default SubsectorService