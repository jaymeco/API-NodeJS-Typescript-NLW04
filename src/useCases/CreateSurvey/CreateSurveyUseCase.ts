import { getCustomRepository } from "typeorm";
import { Survey } from "../../entities/Survey";
import { SurveyRepository } from "../../repositories/SurveyRepository";
import { ICreateSurveyRequestDTO } from "./ICreateSurveyRequestDTO";

export class CreateSurveyUseCase {

    async execute(data: ICreateSurveyRequestDTO): Promise<Survey> {
        const surveyRepository = getCustomRepository(SurveyRepository);

        const survey = surveyRepository.create({
            title: data.title,
            description: data.description
        });

        return await surveyRepository.save(survey);
    }
}