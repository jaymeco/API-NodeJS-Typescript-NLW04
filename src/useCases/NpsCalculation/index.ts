import { NpsCalculationUseCase } from './NpsCalculationUseCase';
import { NpsCalculationController } from './NpsCalculationController';

const npsCalculationUseCase = new NpsCalculationUseCase();

const npsCalculationController = new NpsCalculationController(npsCalculationUseCase);

export { npsCalculationUseCase, npsCalculationController };