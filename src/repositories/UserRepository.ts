import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";

@EntityRepository(Users)
export class UserRespository extends Repository<Users> {}