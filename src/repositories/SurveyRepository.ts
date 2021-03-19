import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../entities/Survey";

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {}