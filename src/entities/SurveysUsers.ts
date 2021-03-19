import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Survey } from './Survey';
import { Users } from './Users';

@Entity('surveys_users')
export class SurveyUser {

    @PrimaryColumn()
    readonly id: string;

    @ManyToOne(()=>Users)
    @JoinColumn({name: 'user_id'})
    user: Users;

    @ManyToOne(()=>Survey)
    @JoinColumn({name: 'survey_id'})
    survey: Survey;
    
    @Column()
    user_id: string;

    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor () {
        if(!this.id){
            this.id = uuid();
        }
    }
}