import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    private createUserUseCase;

    constructor (createUserUsecase: CreateUserUseCase){
        this.createUserUseCase = createUserUsecase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email } = request.body;

        try {
            const user = await this.createUserUseCase.execute({ name, email });

            return response.status(201).json(user);
        } catch (error) {
            console.log(error);
            return response.status(400).json({
                message: error.message || 'Unexpected error has occurred!'
            });
        }
    }
}