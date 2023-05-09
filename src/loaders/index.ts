import expressLoader from './express';
import Logger from './logger';
import Postgres from '../typeorm/postgres';

export default async ({ expressApp }): Promise<void> => {
  new Postgres();
  await expressLoader({ app: expressApp });
  Logger.info('====> Express loaded');
};
