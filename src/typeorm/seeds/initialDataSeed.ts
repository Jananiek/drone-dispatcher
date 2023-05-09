import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { MedicationLoad } from '../entities/MedicationLoad';
import { Load } from '../entities/Load';
import { Drone } from '../entities/Drone';
import { Medication } from '../entities/Medication';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const drones = await factory(Drone)().createMany(10);
    const loads = await factory(Load)()
      .map(async load => {
        load.drone = drones[Math.floor(Math.random() * drones.length)];
        return load;
      })
      .createMany(20);
    const medications = await factory(Medication)().createMany(30);
     await factory(MedicationLoad)()
      .map(async medicationLoad => {
        medicationLoad.loadId = loads[Math.floor(Math.random() * loads.length)].id;
        medicationLoad.medicationName = medications[Math.floor(Math.random() * medications.length)].name;
        return medicationLoad
      })
      .createMany(40);
  }
}
