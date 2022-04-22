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

// Program tebak angka menggunakan math random.
const tebakAngka = (param) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let result = ''
          const angkaAcak = Math.floor(Math.random() * 5);
          if(angkaAcak === param){
              result = (`Angka yang keluar adalah ${angkaAcak} anda menebak angka yang benar.`);
              resolve (result)
          } else {
              result = new Error (`Sayang sekali angka yang keluar adalah ${angkaAcak} anda salah menebak.`);
              reject (result)
          }
      }, 1000);
  })
  }
  const hasilAngka = async () => {
      try {
          const result = await tebakAngka(4);
          console.log(result);
      } catch (error) {
          console.log(error);
      }
  }
  hasilAngka()