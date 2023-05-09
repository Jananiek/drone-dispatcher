import { define } from 'typeorm-seeding';
import { Drone } from '../entities/Drone';
import * as Faker from 'faker';
import { DroneModel, DroneState } from '../../utils/constants';

define(Drone, (faker: typeof Faker) => {
  const serialNumber = faker.random.uuid();
  const model = faker.random.objectElement<DroneModel>(DroneModel);
  const weightLimit = faker.random.number({ max: 500 });
  const batteryCapacity = faker.random.number({ min: 0, max: 100 });
  const state = faker.random.objectElement<DroneState>(DroneState);

 const drone = Object.assign(new Drone(), { serialNumber, model, weightLimit, batteryCapacity, state });
 return drone;
});
