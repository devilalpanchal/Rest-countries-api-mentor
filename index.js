
const url = "https://restcountries.com/v3.1/all"

fetch('https://restcountries.com/v3.1/all')
    .then((Response) => Response.json()

    )
    .then((data) => {
        let countries = data
        console.log(countries)
        let result = countries.map((item) => {
            return `
        <div class="card">
        <img class="imgOfcountry" src="${item.flags.png}" alt="">
        <div class="other">
        <h3 class="countryName">${item.name.common}</h3>
        <p class="population">Population:${item.population}</p>
        <p class="region">Region:${item.region}</p>
        <p class="capital">Capital:${item.capital}</p>
    </div>
</div>

        `
        });
        mainSection.innerHTML = result.join("")

    }).catch((err) => {
        console.log('Eroor');
    })

    // to drop dwon
    let dropdown = document.querySelector('dropdown-content')
    document.querySelector("filterIcon").addEventListener('click',()=>{
dropdown.classList.toggle()
    })