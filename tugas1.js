// 1. Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode Asynchronous
// dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:

const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
           let cek = dataDay.find((item)=>{
               return item === day
           })
           if (cek){
               resolve ('Hari ini adalah hari kerja')
           } else {
               reject (new Error ('Hari ini bukan hari kerja'))
           }
        }, 3000);
    })
}

// cekHariKerja('senin')
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

// try catch
const getResult = async() => {
    try {
        const result = await cekHariKerja('minggu')
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getResult()

// then akan berjalan apabila suatu pengkondisian bernilai true atau sukses.
// catch akan berjalan apabila suatu pengkondisian bernilai false atau gagal.
// try => biasa nya kita sisipkan kode javascript yang mungkin terjadi error.
// catch => blok inilah yang akan menangkap error yang terjadi pada blok try apabila pada blok try muncul error.