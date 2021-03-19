import { Request, Response } from "express";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";

export class CreateSurveyController {
    private createSurveyUseCase;

    constructor (createSurveyUseCase: CreateSurveyUseCase) {
        this.createSurveyUseCase = createSurveyUseCase;
    }

    async handle (request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;

        try {
            const survey = await this.createSurveyUseCase.execute({
                title,
                description
            });

            return response.status(201).json(survey);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error has occurred!'
            });
        }
    }
}