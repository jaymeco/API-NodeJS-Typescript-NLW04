import { Request, Response } from "express";
import { NpsCalculationUseCase } from "./NpsCalculationUseCase";

export class NpsCalculationController {
    private npsCalculationUseCase;

    constructor (npsCalculationUseCase: NpsCalculationUseCase) {
        this.npsCalculationUseCase = npsCalculationUseCase;
    }

    async handle (request: Request, response: Response): Promise<Response>{
        const { survey_id } = request.params;

        try {
            const results = await this.npsCalculationUseCase.execute({
                survey_id
            });

            return response.status(200).json(results);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}