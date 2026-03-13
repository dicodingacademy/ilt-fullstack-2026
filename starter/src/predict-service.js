import tf from '@tensorflow/tfjs-node';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PredictService {
  async predictImage(photo) {
    // Membuat path ke file model TensorFlow.js
    const modelPath = `file://${path.resolve(__dirname, '..', 'model', 'model.json')}`;
    // Memuat model dari file model.json
    const model = await tf.loadLayersModel(modelPath);

    // Membaca metadata
    const metadataPath = path.resolve(__dirname, '..', 'model', 'metadata.json');
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

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

export default PredictService;
