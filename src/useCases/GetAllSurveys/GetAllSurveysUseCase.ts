import { getCustomRepository } from "typeorm";
import { Survey } from "../../entities/Survey";
import { SurveyRepository } from "../../repositories/SurveyRepository";

export class GetAllSurveysUseCase {
    async execute(): Promise<Survey[]> {
        const surveyRepository = getCustomRepository(SurveyRepository);

        const surveys = await surveyRepository.find();

        return surveys;
    }
}