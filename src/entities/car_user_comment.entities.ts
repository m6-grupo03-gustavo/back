import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";
import { User } from "./user.entitie";

@Entity("car_user_comments")
export class CarUserComments {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  comment: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;
  @ManyToOne(() => Car, (car) => car.comments)
  car: Car;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
