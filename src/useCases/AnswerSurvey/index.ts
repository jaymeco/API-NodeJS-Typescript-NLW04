import { AnswerSurveyUseCase } from './AnswerSurveyUseCase';
import { AnswerSurveyController } from './AnswerSurveyController';

const answerSurveyUseCase = new AnswerSurveyUseCase();
const answerSurveyController = new AnswerSurveyController(answerSurveyUseCase);

export { answerSurveyUseCase, answerSurveyController };