// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli',
                     'Agustus', 'September', 'Oktober', 'November', 'Desember']
            if(!error){
                callback(month)
            } else {
                callback(new Error('Sorry data not found'), [])
            }
    }, 4000);
}
getMonth((data)=>{
    data.map((item, index) =>{
        console.log(`bulan ke ${index +1} adalah bulan ${item}`);
    })
})