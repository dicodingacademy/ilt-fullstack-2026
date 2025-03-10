# ILT Membangun Peta Digital

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi Leaflet.js, OpenStreetMap (OSM), dan Geolocation API. Dengan memanfaatkan teknologi ini, kita bisa membangun aplikasi web interaktif yang menampilkan peta digital serta mengakses lokasi pengguna secara real-time.

Tujuan utama dari hands-on ini adalah mempelajari cara mengintegrasikan peta digital ke dalam aplikasi web dan memahami cara kerja Geolocation API dalam menentukan posisi pengguna.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan proyek dalam direktori `starter`. Direktori ini adalah dasar untuk demo project yang akan dikembangkan sepanjang sesi.

## Hasil Akhir Proyek

Pada akhir hands-on, peserta akan memiliki aplikasi web yang:

- menampilkan peta interaktif menggunakan Leaflet dengan data dari OpenStreetMap.
- menampilkan marker berdasarkan lokasi pengguna yang diperoleh dari Geolocation API.
- memungkinkan interaksi dengan elemen-elemen peta, seperti zoom dan marker tambahan.

Gambaran hasil:

![Store Locator Teaser](store-locator-teaser.png 'Store Locator Teaser')

## Mengenal Scripts di package.json

Di dalam proyek ini, instruktur akan menemukan beberapa scripts yang berguna untuk pengembangan dan produksi:

- `npm run dev`:Menjalankan development server.
- `npm run build`: membuat production build.
- `npm run preview`: menjalankan server statis.

## Checklist Live Demo

Berikut adalah beberapa ceklis yang bisa instruktur lakukan ketika melakukan demo:

- [ ] Runthrough harapan hasil dari demo project melalui direktori `solution`.
  - Masuk ke directory solution dan jalankan local server.
  - Tunjukkan kepada siswa untuk memberi gambaran.
  - Tutup browser dan kembali ke code editor.
- [ ] Runthrough seluruh kode dalam `starter` dan tunjukkan gambaran hasilnya.
- [ ] Memasang seluruh dependencies proyek (`npm install`).
- [ ] Memastikan library Leaflet terpasang (`npm install leaflet`)
- [ ] Menyelesaikan seluruh TODO dalam proyek starter.
  - [ ] Runthrough berbagai API dari [Leaflet Doc](https://leafletjs.com/reference.html).
- [ ] Memastikan hasil akhir sudah sesuai dengan `solution`.
- [ ] (Opsional) Mendemonstrasikan penggunaan Geolocatoin API dalam peta digital.

## Tips Live Demo

- Gunakan browser modern seperti Chrome atau Firefox untuk mendukung Geolocation API.
- Manfaatkan solution/ untuk melihat referensi implementasi lengkap.
- Manfaatkan AI Code Assistant, contoh (Amazon Q atau GitHub Copilot).
