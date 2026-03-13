# ILT Back-End

## Pengantar
Project ini digunakan untuk demonstrasi selama kegiatan ILT Back-End Integrasi AI ke Back-End.
Mengangkat studi kasus RESTful API sederhana untuk mendeteksi penyakit kulit menggunakan Express 5 dan ESM.

Dalam mengimplementasikan demo ini, kami sudah menyiapkan beberapa hal seperti.

1. Package dependencies yang dibutuhkan untuk melakukan demo.
2. Konfigurasi yang dibutuhkan untuk melakukan demo seperti server dan linter.
3. Script npm `start` untuk menjalankan project di development dan `lint` untuk menjalankan linter eslint.
4. Berkas yang perlu dilengkapi oleh instruktur (diberi tanda @TODO).
5. Solusi akhir dari implementasi pada folder `/solution`.


### Prerequisite tools

- Visual Studio Code
- Node.js versi 22 atau lebih rendah
- Postman (atau aplikasi sejenis untuk mengirim request HTTP)
- Google Chrome (atau chromium browser lainnya).


## Petunjuk

Agar instruktur dapat melakukan demo dengan lancar. Harap untuk melakukan hal-hal berikut terlebih dahulu.
1. Clone repository ini.
2. Checkout ke branch 08-backend-ai.
3. Buka directory `starter` dengan menggunakan Visual Studio Code.
4. Pada terminal, jalankan `npm install`.
5. Lengkapi berkas yang ditandai dengan komentar @TODO.

## Tech Stack

- Express 5
- ES Modules (ESM)
- TensorFlow.js Node
- Multer (untuk file upload)

## Hasil Akhir Proyek

### Endpoint Deteksi Penyakit

- Method: POST

- URL: /predict 

- Body request:
```
Multipart/form-data
Key: file
Type: File
```

- Body response:
```
{
    "status": "success",
    "message": "Product berhasil ditambahkan",
    "data": {
        "disease": "Vascular Lesions",
        "confidenceScore": 0.95
    }
}
```

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Memasang library yang dibutuhkan yaitu TensorFlow.js dan Multer.
- [ ] Menambahkan endpoint POST /predict untuk mendeteksi penyakit kulit di routes.js.
- [ ] Menambahkan controller predict-controller.js untuk endpoint POST /predict.
- [ ] Menambahkan service predict-service.js untuk memproses prediksi penyakit kulit menggunakan TensorFlow.js.
