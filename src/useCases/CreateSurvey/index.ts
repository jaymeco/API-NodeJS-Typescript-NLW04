import { CreateSurveyUseCase } from './CreateSurveyUseCase';
import { CreateSurveyController } from './CreateSurveyController';

const createSurveyUseCase = new CreateSurveyUseCase();

const createSurveyController = new CreateSurveyController(createSurveyUseCase);

export { createSurveyController, createSurveyUseCase };