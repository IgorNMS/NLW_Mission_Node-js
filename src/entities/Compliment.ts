import {v4 as uuid} from "uuid";
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Tag} from "./Tag";

@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export {
    Compliment
}