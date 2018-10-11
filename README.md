# Notulite Front Server 

Repository ini berisi source code server dan static html yang digunakan untuk landing page notulite online transcription

### Prerequisites

Sebelum memulai instalasi dan penggunaan Notulite Front Server, diperlukan beberapa pengetahuan dasar terkait stack teknologi yang dipakai pada project ini, yaitu: 
* HTML
* CSS
* JS
* Nodejs
* Jest
* Express framework
* Webpack
  
Sebelum melakukan cloning repository ini, diharapkan untuk melakukan instalasi Nodejs. Cara instalasi Nodejs dapat dilihat [disini.](https://blog.teamtreehouse.com/install-node-js-npm-windows)


### Installing

Jalankan command ini secara berurutan: 

```
git clone http://10.226.174.138:8880/raha/notulite-front-server.git

cd notulite-front-server

npm install

npm run build
```

### Running

Jalankan command ini secara berurutan: 

```
npm run start
```

Server akan otomatis berjalan pada url localhost dan port 4000.

### Testing 

Jalankan command ini secara berurutan:

```
npm run test
```

Sistem akan otomatis melakukan pengetesan untuk semua test case yang berada pada folder ```test/```

### Configurations

#### .env
file ```.env``` pada saat ini merupakan file yang berisi konfigurasi alamat server. File ini dapat dikonfigurasi berdasarkan kebutuhan. Pastikan package ```dotenv``` sudah terinstall pada repository ini. Berikut adalah list variable dari yang terdapat pada file ```.env```:

| Variabel    | Keterangan   |
|:-------------:|:------------:|
|EXPRESS_SERVER_URL| Lokasi dari server notulite **frontend**|
|EXPRESS_SERVER_PORT| Port dari server notulite **frontend**|
|NOTULA_MAIN_SERVER_URL| Lokasi dari server utama **platfrom** notulite|
|NOTULA_MAIN_SERVER_PORT| Port dari server utama **platform** notulite|

#### Static HTML
Secara default, lokasi static html yang akan disiapkan oleh server ada di folder ```public/```. 

### Contact 

presteniko : preste@bahasakita.co.id
faqih: faqih@bahasakita.co.id
farisya: farisya@bahasakita.co.id