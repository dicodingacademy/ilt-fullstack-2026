# ILT Berkomunikasi dengan RESTful API

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi Asynchronous JavaScript Request. Ini adalah studi kasus lanjutan dari ILT DOM manipulation dengan event (interactivity).

Hands-on kali ini berfokus pada penyediaan productive musics dari API (Server).

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Calm Headphones](calm-headphones-final.png?raw=true)

![Network DevTools in Calm Headphones](calm-headphones-network-devtools.png?raw=true)

## Menampilkan Data dari Musics API

Untuk menyediakan music secara online, kita memerlukan API yang menyediakan data tersebut. Kami telah menyediakan API untuk hands-on ini bernama Calm Music API. Instruktur bisa menggunakan dokumentasi berikut.

> [https://calm-music-api.dicoding.dev](https://calm-music-api.dicoding.dev/#/)

## Checklist Live Demo

Instruktur dapat memanfaatkan checklist live demo berikut agar sesi hands-on lebih terstruktur.

- [ ] Menjalankan starter project.
  - Masuk ke folder `starter` dengan perintah: `cd starter` 
  - Memasang dependencies dengan menggunakan perintah `npm install`
  - Menjalankan server development dengan perintah `npm run dev`
  - Buka aplikasi di browser dengan mengujungi http://localhost:8080
- [ ] Runthrough exisiting code untuk mendapatkan gambaran kode yang ada saat ini.
- [ ] Membuat fungsi `getAllMusics` untuk mendapatkan data `musics` dari API di berkas `assets/scripts/data/api.js`.
- [ ] Gunakan fungsi tersebut di berkas `assets/scripts/app.js` menggantikan versi lokal.
- [ ] (Optional) Eksplorasi tentang Axios (Library untuk melakukan HTTP API).
