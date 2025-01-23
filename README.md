# ILT Membangun Project dan Bundling dengan Webpack

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi Webpack sebagai module bundler. Dengan memanfaatkan Webpack, kita bisa mengelola berkas-berkas JavaScript, CSS, dan aset lainnya (seperti gambar dan font) secara efisien dalam satu workflow.

Tujuan utama dari hands-on ini adalah mempelajari cara mengonfigurasi Webpack dan mempraktikkan build process untuk menghasilkan aplikasi yang terstruktur serta mudah dikembangkan.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`. Direktori tersebut adalah hasil akhir dari demo project pada ILT Membuat Websitemu Lebih Interaktif.

## Hasil Akhir Proyek

Pada akhir hands-on, kita akan menghasilkan bundle yang siap dijalankan di browser dengan hanya memuat berkas-berkas yang sudah teroptimasi, yaitu dalam direktori `dist`.

## Mengenal Scripts di package.json

Di dalam proyek ini, instruktur akan menemukan beberapa scripts yang berguna untuk pengembangan dan produksi:

- `npm run dev`:

  Menjalankan development server dengan Webpack Dev Server, menggunakan konfigurasi **webpack.dev.js**. Server akan berjalan (biasanya pada port 8080) dan menyediakan hot reload sehingga memudahkan proses pengembangan.

- `npm run build`:

  Membuat production build menggunakan webpack.prod.js. Berkas hasil build akan disimpan di direktori `dist`. Pada mode ini, Webpack akan melakukan minification, optimization, dan tree-shaking sehingga ukuran berkas lebih kecil dan optimal.

- `npm run serve`:

  Menjalankan server statis menggunakan http-server untuk menyajikan berkas di direktori `dist/`. Ini berguna untuk memeriksa hasil production build secara cepat.

## Checklist Live Demo
> Goal dari demo: Memberikan kemudahan dalam proses development dan build production ready dengan menggunakan module bundler (webpack)

Berikut adalah beberapa ceklis yang bisa instruktur lakukan ketika melakukan demo:

- [ ] Runthrough kode di `starter` untuk memberikan gambaran ke siswa seberapa banyak berkas .js dan .css untuk membuat website ini.
- [ ] Menjalankan starter project untuk memberikan gambaran project hands-on demo.
  - Masuk ke directory `starter` dengan `cd starter`
  - Kemudian jalankan local server dengan perintah `npx http-server .`
  - Setelah memberikan gambaran ke siswa, hentikan server dengan `CTRL+C`
- [ ] Menginisiasi proyek Node.js dengan `npm init --y`.
- [ ] Memasang dependencies `webpack` dan package pendukung lainnya.
  - `npm install webpack webpack-cli webpack-dev-server webpack-merge css-loader style-loader clean-webpack-plugin copy-webpack-plugin html-webpack-plugin`
  - Menjelaskan perlahan fungsi-fungsi dependencies yang dipasang.
- [ ] Menyiapkan runner scripts pada package.json (bisa merujuk pada solution)
- [ ] Menuliskan konfigurasi webpack sambil menjelaskan secara perlahan.
  - Mulai dari `webpack.common.js`
  - Lanjut `webpack.dev.js`
  - Lanjut `webpack.prod.js`
- [ ] Menyesuaikan kode agar align dengan konfigurasi webpack.
  - Menyesuaikan kode di `index.html`
    - Menghapus import manual di akhir <body>
    - Menghapus import manual CSS di <head>
  - Menyesuaikan kode di `assets/scripts/app.js`
    - Mengimpor style di berkas `app.js`
- [ ] Menjalankan development server dengan -> `npm run dev`
  - Menjelaskan tentang fitur hot-reload
- [ ] Build website to production ready -> `npm run build`
  - Runthrough hasil build
  - Jalankan hasil build dengan perintah -> `npm run serve`
