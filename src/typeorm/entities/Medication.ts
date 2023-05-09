import { Entity, Column, PrimaryColumn, OneToMany, JoinTable } from 'typeorm';
import { MedicationLoad } from './MedicationLoad';

@Entity()
export class Medication {
  @PrimaryColumn()
  name: string;

  @Column('decimal', { default: 0, precision: 4, scale: 2 })
  weight: number;

  @Column({ nullable: false })
  code: string;

  @Column()
  image: string;

  @OneToMany(() => MedicationLoad, medicationLoads => medicationLoads.medicationConnection)
  @JoinTable()
  medicationConnection: MedicationLoad[];
}
