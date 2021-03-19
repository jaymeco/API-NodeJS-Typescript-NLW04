import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";
import { IAnswerSurveyRequestDTO } from "./IAnswerSurveyRequestDTO";

export class AnswerSurveyUseCase {
    async execute(data: IAnswerSurveyRequestDTO): Promise<void> {
        const surveyUserRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUserExists = await surveyUserRepository.findOne({
            id: data.id,
        })

        if(!surveyUserExists){
            throw new Error('Survey User does not exists!')
        }

        surveyUserExists.value = data.value;

        await surveyUserRepository.save(surveyUserExists);
    }
}