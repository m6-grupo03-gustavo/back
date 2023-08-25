import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entitie";
import { CarUserComments } from "./car_user_comment.entities";
import { hash } from "bcryptjs";

enum AccountState {
  Buyer = "buyer",
  Seller = "seller",
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
  number: string;
  @Column({ nullable: true })
  complement: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  register_date: Date;
  @Column({ type: "enum", enum: AccountState })
  account_state: AccountState;
  @Column({ nullable: true })
  reset_token: string
  @Column({ nullable: true, type: "timestamp" })
  reset_token_expiration: Date;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];
  @OneToMany(() => CarUserComments, (carUserComments) => carUserComments.user)
  comments: CarUserComments[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
