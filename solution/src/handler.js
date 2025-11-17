class Handler {
    constructor(modelService) {
        this._modelService = modelService;

        this.getPredictResult = this.getPredictResult.bind(this);
    }

    async getPredictResult(request, h) {
        const photo = request.payload;
        const predict = await this._modelService.predictImage(photo.file);
        const { diseaseLabel, confidenceScore } = predict;

        return h.response({
            status: 'success',
            message: 'Predict success',
            data: {
                disease: diseaseLabel,
                confidenceScore
            }
        });
    }
}

module.exports = Handler;