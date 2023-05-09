import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { MedicationLoad } from '../entities/MedicationLoad';

define(MedicationLoad, (faker: typeof Faker) => {
  const quantity = faker.random.number({ min: 1, max: 20 });

  const medicationLoad = new MedicationLoad();
  medicationLoad.quantity = quantity;
  return medicationLoad;
});
