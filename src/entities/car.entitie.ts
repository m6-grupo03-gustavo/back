import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entitie";
import { CarImages } from "./car_image.entitie";
import { CarUserComments } from "./car_user_comment.entities";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  color: string;
  @Column()
  km: number;
  @Column()
  year: string;
  @Column()
  fuel: string;
  @Column()
  value: number;
  @Column()
  description: string;
  @Column()
  is_published: boolean;

  @OneToMany(() => CarImages, (carImages) => carImages.car)
  carImages: CarImages[];
  @OneToMany(() => CarUserComments, (carUserComments) => carUserComments.car)
  comments: CarUserComments[];
  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}
