import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.post('/appointments', appointmentsRouter);

export default routes;
