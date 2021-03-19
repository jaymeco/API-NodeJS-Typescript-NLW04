import { Request, Response } from "express";
import { GetAllSurveysUseCase } from "./GetAllSurveysUseCase";
import { getConnectionOptions } from 'typeorm';
export class GetAllSurveysController {
    private getAllSurveysUseCase;

    constructor (getAllSurveysUseCase: GetAllSurveysUseCase) {
        this.getAllSurveysUseCase = getAllSurveysUseCase;
    }

    async handle (request: Request, response: Response): Promise<Response> {
        // const defaultOptions = await getConnectionOptions();
        try {
            const surveys = await this.getAllSurveysUseCase.execute();

            return response.status(200).json(surveys)
        } catch (error) {
            
            console.log(error);
            return response.status(400).json({
                message: error.message || 'Unexpected error has occurred!'
            });
        }
    }
}