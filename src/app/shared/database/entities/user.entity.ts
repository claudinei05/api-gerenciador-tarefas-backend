import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { TanksEntity } from "./tanks.entity";

@Entity({
  name: "users",
})
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 50,
  })
  nome: string;

  @Column({ unique: true })
  usuario: string;

  @Column({
    length: 10,
  })
  senha: string;

  @Column({
    length: 10,
    name: "confirm_password",
  })
  confirmPassword: string;

  @CreateDateColumn({
    name: "dthr_criacao",
  })
  dthrCriacao: Date;

  @OneToMany(() => TanksEntity, (tanks) => tanks.user)
  tanks: TanksEntity[];
}
