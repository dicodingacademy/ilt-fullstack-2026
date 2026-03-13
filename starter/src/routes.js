import multer from 'multer';

const upload = multer();

const routes = (app, predictController) => {
  app.post('/predict', upload.single('file'), predictController.predict);
};

export default routes;
