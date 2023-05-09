import { Entity, PrimaryColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm';
import { Drone } from './Drone';
import { MedicationLoad } from './MedicationLoad';

@Entity()
export class Load {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Drone, drone => drone.loads)
  drone: Drone;

  @OneToMany(() => MedicationLoad, medicationLoads => medicationLoads.loadConnection)
  @JoinTable()
  loadConnection: MedicationLoad[];
}
