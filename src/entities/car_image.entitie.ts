import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";

@Entity("car_images")
export class CarImages {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  url: string;

  @ManyToOne(() => Car, (car) => car.carImages, { onDelete: "CASCADE" })
  car: Car;
}
