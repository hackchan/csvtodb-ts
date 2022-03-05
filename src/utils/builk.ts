
import { Satelital } from "../entity/entidad/Satelital";
import { getRepository } from "typeorm";
export const seed = () => {
   getRepository(Satelital).createQueryBuilder("satelital").insert().into(Satelital)
   .values([
        {
          id: 1,
          name: 'Satelital Oriente',
          active: true
        },
        {
          id: 2,
          name: 'Satelital Caribe',
          active: true
        },
        {
          id: 3,
          name: 'Satelital Pacifico',
          active: true
        },
        {
          id: 4,
          name: 'Satelital Eje Cafetero',
          active: true
        },
        {
          id: 5,
          name: 'Satelital antioquia-choco',
          active: true
        },
        {
          id: 6,
          name: 'Nivel central territorial',
          active: true
        }
     ])
    .execute();
}
