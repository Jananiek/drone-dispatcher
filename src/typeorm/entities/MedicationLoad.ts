import { Entity, Column, ManyToOne, PrimaryColumn, Index, JoinColumn } from 'typeorm';
import { Load } from './Load';
import { Medication } from './Medication';

@Entity()
export class MedicationLoad {
  @PrimaryColumn()
  @Index()
  medicationName: string;

  @PrimaryColumn()
  @Index()
  loadId: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Load, load => load.loadConnection)
  @JoinColumn({ name: 'loadId', referencedColumnName: 'id' })
  loadConnection: Load;

  @ManyToOne(() => Medication, medication => medication.medicationConnection)
  @JoinColumn({ name: 'medicationName', referencedColumnName: 'name' })
  medicationConnection: Medication;
}
