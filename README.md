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

Agar sesi hands-on berjalan terstruktur, berikut adalah beberapa poin yang disarankan untuk dilakukan saat demo:

- [ ] Menyiapkan starter project

  - Buka repository dan pastikan semua dependency telah terpasang dengan npm install.
  - Tinjau berkas package.json untuk memahami scripts yang tersedia.
  - Cek struktur folder dan file utama pada src/.

- [ ] Menjalankan Proyek dalam Mode Development

  - Jalankan `npm run dev`.
  - Tunjukkan cara kerja hot reload dengan mengubah kode di src/ dan melihat hasilnya langsung di peramban.

- [ ] Membedah Konfigurasi Webpack (webpack.dev.js dan webpack.prod.js)

  - Jelaskan entry point, output, serta loaders yang digunakan (misal css-loader, style-loader, dsb.).
  - Tunjukkan penggunaan plugin seperti HtmlWebpackPlugin, CleanWebpackPlugin, dan CopyWebpackPlugin (jika ada).

- [ ] Menjelaskan Perbedaan Development Mode dan Production Mode

  - Bagaimana cara Webpack melakukan minification.
  - Penggunaan devtool (mis. source-map) pada mode development.

- [ ] Membuat Production Build

  - Jalankan npm run build.
  - Perlihatkan hasil yang di-bundle di direktori dist/.
  - Jika diperlukan, jelaskan tree-shaking dan optimasi lain.

- [ ] Mendemonstrasikan Proyek Final

  - Jalankan npm run serve untuk menyajikan bundle dari dist/.
  - Tunjukkan bahwa berkas JavaScript, CSS, dan aset lainnya telah di-bundle dengan benar.

- [ ] (Opsional) Menambahkan Fitur Lanjutan

  - Code splitting atau lazy loading modul.
  - Menggunakan babel-loader untuk transpile ES6+ ke ES5.
  - Mengonfigurasi alias path agar penulisan import lebih ringkas.
