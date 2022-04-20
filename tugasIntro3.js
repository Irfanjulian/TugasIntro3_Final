// 1. Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous
// dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:

// const cekHariKerja = (day) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//            let cek = dataDay.find((item)=>{
//                return item === day
//            })
//            if (cek){
//                resolve ('Hari ini adalah hari kerja')
//            } else {
//                reject (new Error ('Hari ini bukan hari kerja'))
//            }
//         }, 3000);
//     })
// }

// then catch
// cekHariKerja('minggu')
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

// try catch
// const getResult = async() => {
//     try {
//         const result = await cekHariKerja()
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getResult()

// then akan berjalan apabila suatu pengkondisian bernilai true atau sukses.
// catch akan berjalan apabila suatu pengkondisian bernilai false atau gagal.
// try => biasa nya kita sisipkan kode javascript yang mungkin terjadi error.
// catch => blok inilah yang akan menangkap error yang terjadi pada blok try apabila pada blok try muncul error.

// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
// const getMonth = (callback) => {
//     setTimeout(() => {
//         let error = false
//         let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli',
//                      'Agustus', 'September', 'Oktober', 'November', 'Desember']
//             if(!error){
//                 callback(month)
//             } else {
//                 callback(new Error('Sorry data not found'), [])
//             }
//     }, 4000);
// }
// getMonth((data)=>{
//     data.map((item, index) =>{
//         console.log(`bulan ke ${index +1} adalah bulan ${item}`);
//     })
// })

// 3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
// Promise syncronous menggunakan then catch.
// const cekNamaBand = (nama) =>{
//     return new Promise((resolve, reject)=>{
//         const dataBand = ['Lamb of God', 'As I Lay Dying', 'Dimmu Borgir', 'Bring Me the Horizon', 'Slipknot']
//         let cari = dataBand.find((item)=>{
//             return item === nama
//         })
//         if (cari){
//             resolve ('Nama band yang di cari ada dalam daftar')
//             // resolve(result)
//         } else {
//             reject (new Error ('Band yang dicari tidak ada dalam daftar'))
//         }
//     })
// }
// cekNamaBand('slipknot')
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

// Promise asyncronous menggunakan async await.
// const brandHP = (merk) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const dataHP = ['samsung', 'apple', 'asus', 'oppo', 'vivo', 'motorolla', 'nokia', 'sony ericsson']
//             let found = dataHP.find((item)=>{
//                 return item === merk
//             })
//             if (found){
//                 resolve (`Selamat data yang kamu cari ada`)
//                 // resolve (result)
//             } else {
//                 reject (new Error (`Data tidak di temukan`))
//                 // reject (result)
//             }
//         }, 2000);
//     })
// }
// const cariHP = async () => {
//     try {
//         const result = await brandHP('politron')
//         console.log(result);
//         setTimeout(() => {
//             console.log('Terimakasih sudah mencoba');
//         }, 2000);
//     } catch (error) {
//         console.log(error);
//     }
// }
// cariHP()

// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
const getData = (method, url) => {
  return new Promise((resolve, reject) => {
      const ajax = new XMLHttpRequest();
      ajax.open(method, url);
      ajax.send();
      ajax.onload = function () {
        if (ajax.status === 200) {
          const result = JSON.parse(ajax.responseText);
          resolve(result);
        } else {
          reject (new Error("Error, cek kembali"));
        }
      };
    });
};
const getResult = async () => {
  try {
    const result = await getData("get", "https://jsonplaceholder.typicode.com/users");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getResult()

// getData('get', 'https://jsonplaceholder.typicofde.com/users')
// .then((result)=>{
//     result.map(({name})=>{
//         console.log(name);
//     })
// })
// .catch((error)=>{
//     console.log(error);
// })
