import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { Load } from '../entities/Load';

define(Load, (faker: typeof Faker) => {
  const id = faker.random.alphaNumeric(8);

  const load = new Load();
  load.id = id;
  return load;
});
