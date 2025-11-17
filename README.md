# ILT Back-End

## Pengantar
Project ini digunakan untuk demonstrasi selama kegiatan ILT Back-End Integrasi AI ke Back-End.
Mengangkat studi kasus RESTful API sederhana untuk mendeteksi penyakit kulit.

Dalam mengimplementasikan demo ini, kami sudah menyiapkan beberapa hal seperti.

1. Package dependencies yang dibutuhkan untuk melakukan demo.
2. Konfigurasi yang dibutuhkan untuk melakukan demo seperti database, server, dan linter.
3. Script npm `start` untuk menjalankan project di development dan `lint` untuk menjalankan linter eslint.
5. Berkas yang perlu dilengkapi oleh instruktur (diberi tanda @TODO).
6. Solusi akhir dari implementasi automation pada folder `/solutions`.


### Prerequisite tools

- Visual Studio Code
- Node.js Latest LTS
- Postman (atau aplikasi sejenis untuk mengirim request HTTP)
- Google Chrome (atau chromium browser lainnya).


## Petunjuk

Agar instruktur dapat melakukan demo dengan lancar. Harap untuk melakukan hal-hal berikut terlebih dahulu.
1. Clone repository ini.
2. Checkout ke branch 08-backend-ai.
3. Buka directory `starter` dengan menggunakan Visual Studio Code.
4. Pada terminal, jalankan `npm install`.
6. Lengkapi berkas yang ditandai dengan komentar @TODO.

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

- [ ] Memasang library yang dibutuhkan yaitu TensorFlow.js.
- [ ] Menambahkan endpoint POST /predict untuk mendeteksi penyakit kulit.
- [ ] Menambahkan handler untuk endpoint POST /predict.
- [ ] Menambahkan services predict-service.js untuk memproses prediksi penyakit kulit.