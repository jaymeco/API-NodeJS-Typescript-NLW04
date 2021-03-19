import { Router } from 'express';
import { createSurveyController } from './useCases/CreateSurvey';
import { createUserController } from './useCases/CreateUser';
import { getAllSurveysController } from './useCases/GetAllSurveys';
import { createSurveyUserController } from './useCases/CreateSurveysUsers';
import { answerSurveyController } from './useCases/AnswerSurvey';
import { npsCalculationController } from './useCases/NpsCalculation';
const routes = Router();

routes.post('/users', (request, response)=>{
    return createUserController.handle(request, response);
});

routes.post('/surveys', (request, response)=>{
    return createSurveyController.handle(request, response);
});

routes.get('/surveys', (request, response)=>{
    return getAllSurveysController.handle(request, response);
});

routes.post('/surveysUsers_Sendmail', (request, response)=>{
    return createSurveyUserController.handle(request, response);
});

routes.get('/answers/:value', (request, response)=>{
    return answerSurveyController.handle(request, response);
})

routes.get('/nps/:survey_id', (request, response)=>{
    return npsCalculationController.handle(request, response);
})

export { routes };
