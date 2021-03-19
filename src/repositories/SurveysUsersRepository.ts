import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../entities/SurveysUsers";

@EntityRepository(SurveyUser)
export class SurveysUsersRepository extends Repository<SurveyUser>{}