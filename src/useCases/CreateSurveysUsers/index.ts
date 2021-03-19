import { CreateSurveysUsersUseCase } from './CreateSurveyUserUseCase';
import { CreateSurveyUserController } from './CreateSurveyUserController';
import { SendMailProvider } from '../../providers/implementations/SendMailProvider';
const sendMailProvider = new SendMailProvider();
const createSurveyUserUseCase = new CreateSurveysUsersUseCase(sendMailProvider);
const createSurveyUserController = new CreateSurveyUserController(createSurveyUserUseCase);

export { createSurveyUserUseCase, createSurveyUserController };