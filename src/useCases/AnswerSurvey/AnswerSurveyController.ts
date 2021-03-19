import { Request, Response } from "express";
import { AnswerSurveyUseCase } from "./AnswerSurveyUseCase";

export class AnswerSurveyController {
    private answerSurveyUseCase;

    constructor(answerSurveyUseCase: AnswerSurveyUseCase) {
        this.answerSurveyUseCase = answerSurveyUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { value } = request.params;
        const { u } = request.query;

        const surveyUser_id = String(u);
        const surveyValue = Number(value);

        try {
            await this.answerSurveyUseCase.execute({
                value: surveyValue,
                id: surveyUser_id
            })

            return response.status(200).json({
                message: 'Success'
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}