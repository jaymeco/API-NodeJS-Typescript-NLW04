import { GetAllSurveysUseCase } from './GetAllSurveysUseCase';
import { GetAllSurveysController } from './GetAllSurveysController';

const getAllSurveysUseCase = new GetAllSurveysUseCase();

const getAllSurveysController = new GetAllSurveysController(getAllSurveysUseCase);

export { getAllSurveysController, getAllSurveysUseCase };