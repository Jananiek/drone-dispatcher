import { define } from "typeorm-seeding";
import { Medication } from '../entities/Medication';
import * as Faker from 'faker';

define(Medication, (faker: typeof Faker) => {
  const name = faker.random.alphaNumeric(8);
  const weight = faker.finance.amount(0, 1, 2);
  const code = faker.random.alphaNumeric(4);
  const image = faker.image.imageUrl();

    const medication = Object.assign(new Medication(), { name, weight, code, image });
    return medication;
});