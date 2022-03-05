import {MigrationInterface, QueryRunner} from "typeorm";

export class builkData1646250919999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.manager.createQueryBuilder().insert().into("satelital")
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

    await queryRunner.manager.createQueryBuilder().insert().into("user")
   .values([
        {
          id: 1,
          name: 'Fabio',
          lastName: 'Rojas',
          phone: '3183895020',
          email: 'fabio.rojas@contraloria.gov.co',
          image: null
        },
        {
          id: 2,
          name: 'Hernando',
          lastName: 'Montano',
          phone: '3204463154',
          email: 'hernando.montano@contraloria.gov.co',
          image: null

        },
        {
          id: 3,
          name: 'lilia',
          lastName: 'barraza',
          phone: '3023432591',
          email: 'lilia.barraza@contraloria.gov.co',
          image: null,
          created_at: '2022-01-09'
        },
        {
          id: 4,
          name: 'roberto',
          lastName: 'delahoz',
          phone: '3017888046',
          email: 'roberto.delahoz@contraloria.gov.co',
          image: null
        },
        {
          id: 5,
          name: 'williams',
          lastName: 'avila',
          phone: '3017888047',
          email: 'williams.avila@contraloria.gov.co',
          image: null
        },

        {
          id: 6,
          name: 'leonardo',
          lastName: 'celis',
          phone: '3017888048',
          email: 'leonardo.celis@contraloria.gov.co',
          image: null
        },

        {
          id: 7,
          name: 'Luis',
          lastName: 'celis',
          phone: '3017888049',
          email: 'luise.celis@contraloria.gov.co',
          image: null

        },
        {
          id: 8,
          name: 'fabian',
          lastName: 'velandia',
          phone: '3017888050',
          email: 'fabian.velandia@contraloria.gov.co',
          image: null

        },
         {
          id: 9,
          name: 'admin',
          lastName: 'admin',
          phone: '0',
          email: 'admin@contraloria.gov.co',
          image: null,
        },
        {
          id: 10,
          name: 'monica',
          lastName: 'botello',
          phone: '3017888051',
          email: 'monica.botello@contraloria.gov.co',
          image: null,
        },

      ])
    .execute();

    await queryRunner.manager.createQueryBuilder().insert().into("auth")
   .values([
        {
          id: 1,
          username: 'hackchan',
          password: '1234567',
          role: ['ssj'],
          user:1

        },

        {
          id: 2,
          username: 'frances',
          password: '1234567',
          role: ['ssj'],
          user:2

        }


      ])
    .execute();


      await queryRunner.manager.createQueryBuilder().insert().into("department")
   .values([
       {
          id: 5,
          name: 'Antioquia',
          latitude: 6.25184,
          longitude: -75.56359,
          active: true,
          satelital: 5,
          user: 8
        },
        {
          id: 8,
          name: 'Atlántico',
          latitude: 10.96854,
          longitude: -74.78132,
          active: true,
          satelital: 2,
          user: 3
        },
        {
          id: 11,
          name: 'Bogotá D.C.',
          latitude: 4.60971,
          longitude: -74.08175,
          active: true,
          satelital: 6,
          user: 8
        },
        {
          id: 13,
          name: 'Bolívar',
          latitude: 10.39972,
          longitude: -75.51444,
          active: true,
          satelital: 2,
          user: 3
        },
          {
          id: 15,
          name: 'Boyacá',
          latitude: 5.53528,
          longitude: -73.36778,
          active: true,
          satelital: 1,
          user: 1
        },
         {
          id:17,
          name: 'Caldas',
          latitude: 5.06889,
          longitude: -75.51738,
          active: true,
          satelital: 4,
          user: 1
        },
        {
          id: 18,
          name: 'Caquetá',
          latitude: 1.61438,
          longitude: -75.60623,
          active: true,
          satelital: 3,
          user: 5
        },
        {
          id: 19,
          name: 'Cauca',
          latitude: 2.43823,
          longitude: -76.61316,
          active: true,
          satelital: 3,
          user: 5
        },
        {
          id: 20,
          name: 'Cesar',
          latitude: 10.46314,
          longitude: -73.25322,
          active: true,
          satelital: 2,
          user: 3
        },
         {
          id: 23,
          name: 'Córdoba',
          latitude: 8.74798,
          longitude: -75.88143,
          active: true,
          satelital: 2,
          user: 4
        },
         {
          id: 25,
          name: 'Cundinamarca',
          latitude: 4.60971,
          longitude: -74.08175,
          active: true,
          satelital: 6,
          user: 6
        },
        {
          id: 27,
          name: 'Choco',
          latitude: 5.69188,
          longitude: -76.65835,
          active: true,
          satelital: 5,
          user: 8
        },
        {
          id: 41,
          name: 'Huila',
          latitude: 2.9273,
          longitude: -75.28189,
          active: true,
          satelital: 4,
          user: 1
        },
         {
          id: 44,
          name: 'La Guajira',
          latitude: 11.54444,
          longitude: -72.90722,
          active: true,
          satelital: 2,
          user: 4
        },
        {
          id: 47,
          name: 'Magdalena',
          latitude: 11.24079,
          longitude: -74.19904,
          active: true,
          satelital: 2,
          user: 4
        },
        {
          id: 50,
          name: 'Meta',
          latitude: 4.1429,
          longitude: -73.62664,
          active: true,
          satelital: 6,
          user: 6
        },
        {
          id: 52,
          name: 'Nariño',
          latitude: 1.21361,
          longitude: -77.28111,
          active: true,
          satelital: 3,
          user: 5
        },
        {
          id: 54,
          name: 'Norte de Santander',
          latitude: 7.89391,
          longitude: -72.50782,
          active: true,
          satelital: 1,
          user: 2
        },
         {
          id: 63,
          name: 'Quindío',
          latitude: 4.53389,
          longitude: -75.68111,
          active: true,
          satelital: 4,
          user: 1
        },
        {
          id: 66,
          name: 'Risaralda',
          latitude: 4.81333,
          longitude: -75.69611,
          active: true,
          satelital: 4,
          user: 1
        },
        {
          id: 68,
          name: 'Santander',
          latitude: 7.12539,
          longitude: -73.1198,
          active: true,
          satelital: 1,
          user: 2
        },

        {
          id: 70,
          name: 'Sucre',
          latitude: 9.30472,
          longitude: -75.39778,
          active: true,
          satelital: 2,
          user: 4
        },
        {
          id: 73,
          name: 'Tolima',
          latitude: 4.43889,
          longitude: -75.23222,
          active: true,
          satelital: 4,
          user: 5
        },
        {
          id: 76,
          name: 'Valle del Cauca',
          latitude: 3.43722,
          longitude: -76.5225,
          active: true,
          satelital: 3,
          user: 5
        },
          {
          id: 81,
          name: 'Arauca',
          latitude: 7.08471,
          longitude: -70.75908,
          active: true,
          satelital: 1,
          user: 1
        },
          {
          id:85,
          name: 'Casanare',
          latitude: 5.33775,
          longitude: -72.39586,
          active: true,
          satelital: 1,
          user: 1
        },
        {
          id: 86,
          name: 'Putumayo',
          latitude: 1.15284,
          longitude: -76.65208,
          active: true,
          satelital: 3,
          user: 5
        },

        {
          id: 88,
          name: 'San Andrés',
          latitude: 12.58317,
          longitude: -81.70636,
          active: true,
          satelital: 2,
          user: 3
        },
        {
          id: 91,
          name: 'Amazonas',
          latitude: -4.21528,
          longitude: -69.94056,
          active: true,
          satelital: 6,
          user: 6
        },

        {
          id: 94,
          name: 'Guainía',
          latitude: 2.92409,
          longitude: -68.93526,
          active: true,
          satelital: 6,
          user: 7
        },
        {
          id: 95,
          name: 'Guaviare',
          latitude: 2.57286,
          longitude: -72.64591,
          active: true,
          satelital: 6,
          user: 7
        },
        {
          id: 97,
          name: 'Vaupés',
          latitude: 0.97239,
          longitude: -70.40635,
          active: true,
          satelital: 6,
          user: 7
        },
        {
          id: 99,
          name: 'Vichada',
          latitude: 6.18903,
          longitude: -67.48588,
          active: true,
          satelital: 6,
          user: 7
        }
      ])
    .execute();

     await queryRunner.manager.createQueryBuilder().insert().into("sector")
   .values([
        {
          id: 1,
          name: 'AGROPECUARIO',
          initials: 'AGRO'
        },
        {
          id: 2,
          name: 'COMERCIO Y DESARROLLO REGIONAL',
          initials: 'CODR'
        },
        {
          id: 3,
          name: 'DEFENSA Y SEGURIDAD',
          initials: 'DESE'
        },
        {
          id: 4,
          name: 'INFRAESTRUCTURA',
          initials: 'INFR'
        },
        {
          id: 5,
          name: 'EDUCACIÓN, CIENCIA Y TECNOLOGÍA, CULTURA, RECREACIÓN Y DEPORTE',
          initials: 'ECTC'
        },
        {
          id: 6,
          name: 'GESTIÓN PÚBLICA E INSTITUCIONES FINANCIERAS',
          initials: 'GPIF'
        },
        {
          id: 7,
          name: 'INCLUSIÓN SOCIAL',
          initials: 'INSO'
        },
        {
          id: 8,
          name: 'JUSTICIA',
          initials: 'JUST'
        },
        {
          id: 9,
          name: 'MEDIO AMBIENTE',
          initials: 'MEAM'
        },
        {
          id: 10,
          name: 'MINAS Y ENERGÍA',
          initials: 'MIEN'
        },
        {
          id: 11,
          name: 'SALUD',
          initials: 'SALD'
        },
        {
          id: 12,
          name: 'TECNOLOGIAS DE LA INFORMACION Y LAS COMUNICACIONES.',
          initials: 'TICS'
        },
        {
          id: 13,
          name: 'TRABAJO',
          initials: 'TRAB'
        },
        {
          id: 14,
          name: 'VIVIENDA Y SANEAMIENTO BÁSICO',
          initials: 'VISB'
        },
        {
          id: 15,
          name: 'TRANSVERSAL',
          initials: 'TRSV'
        }
      ])
    .execute();

     await queryRunner.manager.createQueryBuilder().insert().into("subsector")
   .values([
        {
          id: 1,
          name: 'Desarrollo Agroindustrial y Comercialización',
          sector: 1
        },
        {
          id: 2,
          name: 'Fomento y Desarrollo Rural y Agropecuario',
          sector: 1
        },
        {
          id: 3,
          name: 'Investigación, Desarrollo Tecnológico y Transferencia de Tecnología',
          sector: 1
        },
        {
          id: 4,
          name: 'Patrimonios Autónomos',
          sector: 1
        },
        {
          id: 5,
          name: 'Regulador de Políticas',
          sector: 1
        },
        {
          id: 6,
          name: 'Sujetos de Control en Liquidación',
          sector: 1
        },
        {
          id: 7,
          name: 'Desarrollo Regional',
          sector: 2
        },
        {
          id: 8,
          name: 'Industria, Comercio',
          sector: 2
        },
        {
          id: 9,
          name: 'Patrimonios Autónomos',
          sector: 2
        },
        {
          id: 10,
          name: 'Sujetos de Control en Liquidación',
          sector: 2
        },
        {
          id: 11,
          name: 'Turismo',
          sector: 2
        },
        {
          id: 12,
          name: 'Regulador Defensa',
          sector: 3
        },
        {
          id: 13,
          name: 'Seguridad',
          sector: 3
        },
        {
          id: 14,
          name: 'Gestión del Riesgo y Adaptación al Cambio Climático',
          sector: 4
        },
        {
          id: 15,
          name: 'Otros sujetos de Control - Identificación y Proceso Electoral',
          sector: 4
        },
        {
          id: 16,
          name: 'Patrimonios Autónomos',
          sector: 4
        },
        {
          id: 17,
          name: 'Transporte',
          sector: 4
        },
        {
          id: 18,
          name: 'Consejos',
          sector: 5
        },
        {
          id: 19,
          name: 'Cultura',
          sector: 5
        },
        {
          id: 20,
          name: 'Educación – Central',
          sector: 5
        },
        {
          id: 21,
          name: 'Educación – Instituciones de Educación Superior  ',
          sector: 5
        },
        {
          id: 22,
          name: 'Sistema Nacional del Deporte ',
          sector: 5
        },
        {
          id: 23,
          name: 'Administración Pública',
          sector: 6
        },
        {
          id: 24,
          name: 'Hacienda',
          sector: 6
        },
        {
          id: 25,
          name: 'Instituciones Financieras',
          sector: 6
        },
        {
          id: 26,
          name: 'Legislativo ',
          sector: 6
        },
        {
          id: 27,
          name: 'Patrimonios Autónomos',
          sector: 6
        },
        {
          id: 28,
          name: 'Registro, Identificación y Proceso Electoral',
          sector: 6
        },
        {
          id: 29,
          name: 'Regulación, Supervisión y Control',
          sector: 6
        },
        {
          id: 30,
          name: 'Relaciones Exteriores ',
          sector: 6
        },
        {
          id: 31,
          name: 'Transversal',
          sector: 6
        },
        {
          id: 32,
          name: 'Social',
          sector: 7
        },
        {
          id: 33,
          name: 'Administración de Justicia',
          sector: 8
        },
        {
          id: 34,
          name: 'Órganos de Control',
          sector: 8
        },
        {
          id: 35,
          name: 'Sistema Integral de Verdad, Justicia, Reparación y no Repetición',
          sector: 8
        },
        {
          id: 36,
          name: 'Asociaciones, Corporaciones Civiles',
          sector: 9
        },
        {
          id: 37,
          name: 'Autoridades Ambientales',
          sector: 9
        },
        {
          id: 38,
          name: 'Formulador y Regulador de las Políticas',
          sector: 9
        },
        {
          id: 39,
          name: 'Investigaciones Científicas Ambientales e Información Ambiental',
          sector: 9
        },
        {
          id: 40,
          name: 'Patrimonios Naturales ',
          sector: 9
        },
        {
          id: 41,
          name: 'en Liquidación ',
          sector: 10
        },
        {
          id: 42,
          name: 'Energía',
          sector: 10
        },
        {
          id: 43,
          name: 'Hidrocarburos',
          sector: 10
        },
        {
          id: 44,
          name: 'Minas',
          sector: 10
        },
        {
          id: 45,
          name: 'Patrimonios Autónomos',
          sector: 10
        },
        {
          id: 46,
          name: 'Transversal',
          sector: 10
        },
        {
          id: 47,
          name: 'en Liquidación',
          sector: 11
        },
        {
          id: 48,
          name: 'Entidades Adaptadas al Sistema de Seguridad Social en Salud',
          sector: 11
        },
        {
          id: 49,
          name: 'EPS',
          sector: 11
        },
        {
          id: 50,
          name: 'Otras Entidades Supradepartamentales',
          sector: 11
        },
        {
          id: 51,
          name: 'Prestadores de Servicios de Salud ',
          sector: 11
        },
        {
          id: 52,
          name: 'Salud y Proteccción Social - Central',
          sector: 11
        },
        {
          id: 53,
          name: 'Patrimonios Autónomos',
          sector: 12
        },
        {
          id: 54,
          name: 'Telecomunicaciones',
          sector: 12
        },
        {
          id: 55,
          name: 'Administradoras de Riesgos Laborales',
          sector: 13
        },
        {
          id: 56,
          name: 'Cajas de Compensación Familiar',
          sector: 13
        },
        {
          id: 57,
          name: 'Central',
          sector: 13
        },
        {
          id: 58,
          name: 'Pensiones Administradoras de Regímenes de Prima Media, Especiales y Exceptuados',
          sector: 13
        },
        {
          id: 59,
          name: 'Pensiones, Administradoras de Ahorro Individual',
          sector: 13
        },
        {
          id: 60,
          name: 'Patrimonios Autónomos',
          sector: 14
        },
        {
          id: 61,
          name: 'Vivienda',
          sector: 14
        },
        {
          id: 62,
          name: 'Transversal',
          sector: 15
        }
      ])
    .execute();

    await queryRunner.manager.createQueryBuilder().insert().into("tipoentidad")
   .values([
        {
          id: 1,
          name: 'Alcaldia',

        },
        {
          id: 2,
          name: 'Gobernacion',

        }
      ])
    .execute();

    await queryRunner.manager.createQueryBuilder().insert().into("entidad")
   .values([
        {
          id: 1,
          nit: '123456789',
          name:'Alcaldía Municipal de Tunja',
          db: 'GPIF_ORIENTE_Mpio_TunjaBoy',
          capital:true,
          cgn:'210115001',
          divipola:'15001',
          categoria:1,
          tipoentidad:1,
          departamento:15,
          subsector:23

        },

      ])
    .execute();
      await queryRunner.manager.createQueryBuilder().insert().into("email")
   .values([
        {
          id: 1,
          email:'contactenos@tunja-boyaca.gov.co',
          entidad:1
        },
         {
          id: 2,
          email:'juridica@tunja.gov.co',
          entidad:1
        },
         {
          id: 3,
          email:'atencionalciudadano@tunja.gov.co',
          entidad:1
        }

      ])
    .execute();

    await queryRunner.manager.createQueryBuilder().insert().into("telefono")
   .values([
        {
          id: 1,
          email:'contactenos@tunja-boyaca.gov.co',
          entidad:1
        },
         {
          id: 2,
          email:'juridica@tunja.gov.co',
          entidad:1
        },
         {
          id: 3,
          email:'atencionalciudadano@tunja.gov.co',
          entidad:1
        }

      ])
    .execute();
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
