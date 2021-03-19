import { Request, Response } from "express";
import { CreateSurveysUsersUseCase } from "./CreateSurveyUserUseCase";

export class CreateSurveyUserController {
    private createSurveyUserUseCase;

    constructor(createSurveyUserUseCase: CreateSurveysUsersUseCase){
        this.createSurveyUserUseCase = createSurveyUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { email, survey_id } = request.body;

        try {            
            await this.createSurveyUserUseCase.execute({ email, survey_id });
            return response.status(201).json();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error!'
            });
        }
    }
}