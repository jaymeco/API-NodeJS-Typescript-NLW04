import { PrimaryColumn, Column, Entity, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Users {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor () {
        if(!this.id){
            this.id = uuid();
        }
    }
}