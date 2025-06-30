# ILT Pengembangan di Sisi Server dengan JavaScript

## Pengantar
Project ini digunakan untuk demonstrasi selama kegiatan ILT Back-End Authenticantion dan Authorization.
Mengangkat studi kasus RESTful API sederhana aplikasi pengelola data produk.

Dalam mengimplementasikan demo ini, kami sudah menyiapkan beberapa hal seperti.

1. Package dependencies yang dibutuhkan untuk melakukan demo.
2. Konfigurasi yang dibutuhkan untuk melakukan demo seperti database, server, dan linter.
3. Script npm `start:dev` untuk menjalankan project di development, `migrate` untuk menjalankan migration, dan `lint` untuk menjalankan linter eslint.
5. Berkas yang perlu dilengkapi oleh instruktur (diberi tanda @TODO).
6. Solusi akhir dari implementasi automation pada folder `/solutions`.


### Prerequisite tools

- Visual Studio Code
- Node.js Latest LTS
- Database PostgreSQL
- Postman (atau aplikasi sejenis untuk mengirim request HTTP)
- Google Chrome (atau chromium browser lainnya).


## Petunjuk

Agar instruktur dapat melakukan demo dengan lancar. Harap untuk melakukan hal-hal berikut terlebih dahulu.
1. Clone repository ini.
2. Checkout ke branch 07-backend-auth.
3. Buka directory `starter` dengan menggunakan Visual Studio Code.
4. Pada terminal, jalankan `npm install`.
6. Lengkapi berkas yang ditandai dengan komentar @TODO.

## Hasil Akhir Proyek

### Endpoint Menambahkan Data Produk

- Endpoint ini hanya dapat diakses oleh pengguna yang sudah terautentikasi dan user yang memiliki role `ADMIN`.

- Method: POST

- URL: /products 

- Body request:
```
{
    "name": "Running Shoes",
    "description": "Sepatu Lari",
    "category": "Sepatu",
    "price": "500000",
    "brand": "Lokal"
}
```

- Body response:
```
{
    "status": "success",
    "message": "Product berhasil ditambahkan",
    "data": {
        "productId": "FjSpHZ-KKL6Id1Ja"
    }
}
```

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menambahkan konfigurasi untuk route POST /products
- [ ] Menambahkan konfigurasi untuk route GET /products
- [ ] Menambahkan konfigurasi untuk route GET /users/:id
- [ ] Mendaftarkan plugin JWT dan hacli di server.js 
- [ ] Menambahkan konfigurasi plugin JWT dan hacli di server.js