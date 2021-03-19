import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";
import { INpsCalculationRequestDTO } from "./INpsCalculationRequestDTO";

export class NpsCalculationUseCase {
    async execute (data: INpsCalculationRequestDTO): Promise<Object>{
        const surveyUserRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUserExists = await surveyUserRepository.find({
            survey_id: data.survey_id,
            value: Not(IsNull())
        })
        const detractors = surveyUserExists.filter(survey=>{
            return survey.value >= 0 && survey.value <= 6;
        }).length;

        const passives = surveyUserExists.filter(survey=>{
            return survey.value >= 7 && survey.value <= 8;
        }).length;

        const promoters = surveyUserExists.filter(survey=>{
            return survey.value >=9 && survey.value <=10; 
        }).length;

        const totalAnswers = surveyUserExists.length;

        const nps = ((promoters - detractors)/ totalAnswers)*100;

        return {
            detractors,
            passives,
            promoters,
            totalAnswers,
            nps
        };
    }
}