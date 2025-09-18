let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ol")
var key = "9f6290d6cda9a36a63755fadee71f83d"

btn.addEventListener("click", () => {
    let city = inp.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res)
            show(res)
        })
})

function show(res) {
    ul.innerHTML = ""

    // City name
    let cityLi = document.createElement('li')
    cityLi.innerText = `City: ${res.name}, ${res.sys.country}`
    ul.append(cityLi)

    // Temperature
    let tempLi = document.createElement('li')
    tempLi.innerText = `Temperature: ${res.main.temp} °C`
    ul.append(tempLi)

    // Feels like
    let feelsLi = document.createElement('li')
    feelsLi.innerText = `Feels Like: ${res.main.feels_like} °C`
    ul.append(feelsLi)

    // Humidity
    let humLi = document.createElement('li')
    humLi.innerText = `Humidity: ${res.main.humidity}%`
    ul.append(humLi)

    // Pressure
    let pressLi = document.createElement('li')
    pressLi.innerText = `Pressure: ${res.main.pressure} hPa`
    ul.append(pressLi)

    // Weather condition
    let weatherLi = document.createElement('li')
    weatherLi.innerText = `Condition: ${res.weather[0].main} (${res.weather[0].description})`
    ul.append(weatherLi)

    // Wind
    let windLi = document.createElement('li')
    windLi.innerText = `Wind: ${res.wind.speed} m/s, Direction: ${res.wind.deg}°`
    ul.append(windLi)

    // Visibility
    let visLi = document.createElement('li')
    visLi.innerText = `Visibility: ${res.visibility / 1000} km`
    ul.append(visLi)
}


let name = 20
let string = `rajnesh${name}`
console.log(string)