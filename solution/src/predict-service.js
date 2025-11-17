const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const metadata = require('../model/metadata.json');

class PredictService {
    async predictImage(photo) {
        // Membuat path ke file model TensorFlow.js
        const modelPath = `file://${path.resolve(__dirname, '..', 'model', 'model.json')}`;
        // Memuat model dari file model.json
        const model = await tf.loadLayersModel(modelPath);

        // Proses input gambar:
        // 1. Decode file gambar
        // 2. Ubah ukurannya menjadi [224, 224] pixel
        // 3. Tambahkan dimensi batch (convert ke bentuk tensor [1, 224, 224, 3])
        // 4. Konversi ke tipe float
        const tensor = tf.node
            .decodeImage(photo)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat();

        // Melakukan prediksi menggunakan model
        const predict = await model.predict(tensor);
        const score = await predict.data();
        // Mengembalikan confidence score tertinggi
        const confidenceScore = Math.max(...score);

        // Mengambil label penyakit berdasarkan indeks prediksi
        const label = tf.argMax(predict, 1).dataSync()[0];
        const diseaseLabels = metadata.labels;
        const diseaseLabel = diseaseLabels[label];

        return { confidenceScore, diseaseLabel };
    }
}

module.exports = PredictService;