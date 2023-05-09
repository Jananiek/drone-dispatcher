
const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['src/typeorm/entities/**.ts', 'src/typeorm/entities/**/**.ts'],
  seeds: ['src/typeorm/seeds/*{.ts,.js}'],
  factories: ['src/typeorm/factories/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/typeorm/entities',
    migrationsDir: 'src/typeorm/migrations',
    subscribersDir: 'src/typeorm/subscriber',
  },
};

export = config;
