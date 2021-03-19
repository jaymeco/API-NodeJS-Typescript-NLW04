import { getCustomRepository } from "typeorm";
import { IMailProvider } from "../../providers/IMailProvider";
import { SurveyRepository } from "../../repositories/SurveyRepository";
import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";
import { UserRespository } from "../../repositories/UserRepository";
import { ICreateSurveysUsersRequestDTO } from "./CreateSurveysUsersRequestDTO";
import path from 'path';

export class CreateSurveysUsersUseCase {
    private mailProvider: IMailProvider;

    constructor (mailProvider: IMailProvider) {
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateSurveysUsersRequestDTO){
        const userRepository = getCustomRepository(UserRespository);
        const surveysRepository = getCustomRepository(SurveyRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const templateHbs = path.resolve(__dirname, '..', '..', 'views', 'emails', 'npsMail.hbs');

        const userExists = await userRepository.findOne({ email: data.email });

        if(!userExists){
            throw new Error('This user does not exists!');
        }

        const surveysExists = await surveysRepository.findOne({ id: data.survey_id });

        if(!surveysExists){
            throw new Error('This survey does not exists!');
        }

        const surveyUserExists = await surveysUsersRepository.findOne({
            where: { user_id: userExists.id, value: null }
        });

        if(surveyUserExists){
            await this.mailProvider.sendMail({
                to: {
                    address: data.email,
                    name: userExists.name
                },
                from: {
                    address: 'noreplay@nps.com.br',
                    name: 'Equipe da Api'
                },
                subject: surveysExists.title,
                body: surveysExists.description
            }, templateHbs, surveyUserExists.id
            );
            return;
        }

        const surveyUser = surveysUsersRepository.create({
            survey_id: data.survey_id,
            user_id: userExists.id
        });

        await surveysUsersRepository.save(surveyUser);

        

        await this.mailProvider.sendMail({
            to: {
                address: data.email,
                name: userExists.name
            },
            from: {
                address: 'noreplay@nps.com.br',
                name: 'Equipe da Api'
            },
            subject: surveysExists.title,
            body: surveysExists.description
        }, templateHbs, userExists.id
        );
    }
}