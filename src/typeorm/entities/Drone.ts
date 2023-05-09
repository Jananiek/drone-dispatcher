import { Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Load } from './Load';
import { DroneModel, DroneState } from '../../utils/constants';

@Entity()
export class Drone {
  @PrimaryColumn('varchar', { length: 100 })
  serialNumber: string;

  @Column({
    type: 'enum',
    enum: DroneModel,
    default: DroneModel.MIDDLE_WEIGHT,
  })
  model: DroneModel;

  @Column({ default: 500 })
  weightLimit: number;

  @Column('decimal', { default: 0, precision: 5, scale: 2 })
  batteryCapacity: number;

  @Column({
    type: 'enum',
    enum: DroneState,
    default: DroneState.IDLE,
  })
  state: DroneState;

  @OneToMany(() => Load, load => load.drone)
  loads: Load[];
}
