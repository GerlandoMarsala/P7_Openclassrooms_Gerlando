import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: "users" })

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstname: string;

    @Column({ length: 100 })
    lastname: string;

    @Column({ type: "date" })
    birthday: Date;

    @Column({ length: "255", unique: true })
    email: string;

    @Column({ type: "text" })
    profile: string;
}