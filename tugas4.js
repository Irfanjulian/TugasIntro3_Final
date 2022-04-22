// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => {
data.map(({name}) =>{
console.log(name)})
})
.catch((error) => {
  console.log(error);
})