import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";
import {Expose} from "class-transformer";

@Entity("tags")
class Tag {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @Expose({name: "nameCustom"})
    nameCustom(): string {
        return `#${this.name}`;
    }
}

export {
    Tag
}