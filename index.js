
const url = "https://restcountries.com/v3.1/all"

fetch('https://restcountries.com/v3.1/name/{name}')
.then((Response)=>Response.json()


)
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('Eroor');
})