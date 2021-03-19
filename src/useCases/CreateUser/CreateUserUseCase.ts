import { getCustomRepository, getRepository } from "typeorm";
import { Users } from "../../entities/Users";
import { UserRespository } from "../../repositories/UserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
    
    async execute(data: ICreateUserRequestDTO): Promise<Users>{
        const userRepository = getCustomRepository(UserRespository);

        const userExists = await userRepository.findOne({ email: data.email });

        if(userExists){
            throw new Error('User already exists!');
        }

        const user = userRepository.create({
            email: data.email,
            name: data.name
        })

        return await userRepository.save(user);
    }
}