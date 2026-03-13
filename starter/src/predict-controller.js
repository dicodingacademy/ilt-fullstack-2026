class PredictController {
  constructor(modelService) {
    this._modelService = modelService;

    this.predict = this.predict.bind(this);
  }

  async predict(req, res) {
    const photo = req.file;
    const predict = await this._modelService.predictImage(photo.buffer);
    const { diseaseLabel, confidenceScore } = predict;

    res.json({
      status: 'success',
      message: 'Predict success',
      data: {
        disease: diseaseLabel,
        confidenceScore
      }
    });
  }
}

export default PredictController;
