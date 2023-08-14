import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";
import { CarUserComments } from "./car_user_comment.entities";

enum AccountState {
  Buyer = "buyer",
  Saller = "saller",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column({ unique: true })
  cpf: string;
  @Column()
  phone: string;
  @Column()
  birthdate: string;
  @Column({ nullable: true })
  description: string;
  @Column()
  zipcode: string;
  @Column()
  state: string;
  @Column()
  city: string;
  @Column()
  street: string;
  @Column()
  number: number;
  @Column({ nullable: true })
  complement: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;
  @Column({ type: "enum", enum: AccountState })
  account_state: AccountState;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];
  @OneToMany(() => CarUserComments, (carUserComments) => carUserComments.user)
  comments: CarUserComments[];
}
