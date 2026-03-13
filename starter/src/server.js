import express from 'express';
import routes from './routes.js';
import PredictService from './predict-service.js';
import PredictController from './predict-controller.js';

const init = async () => {
  const app = express();
  const port = 3000;
  const host = '0.0.0.0';

  const predictService = new PredictService();
  const predictController = new PredictController(predictService);

  routes(app, predictController);

  app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  });
};

init();