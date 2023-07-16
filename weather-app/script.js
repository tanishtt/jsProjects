document.getElementById("btn-search")
.addEventListener('click',function(event)
{
    event.preventDefault();
    const cityInput = document.getElementById("input-city");
    const city = cityInput.value; 
    console.log(city);
    updatetemp(city);
});

const updatetemp=(city)=>{
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7157b77356msh855731455d890c5p165721jsn66da0bedfe59',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(url,options)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        
                // Convert the Unix timestamp to a Date object
        const sunriseDate = new Date(data.sunrise * 1000);
        const sunsetDate = new Date(data.sunset * 1000);

        // Get the time in a readable format (HH:MM:SS)
        const sunriseTime = sunriseDate.toLocaleTimeString();
        const sunsetTime = sunsetDate.toLocaleTimeString();

        document.querySelector("#sunrise").innerText=sunriseTime;
        document.querySelector("#sunset").innerText=sunsetTime;

        document.querySelector("#max-temp").innerText=data.max_temp;
        document.querySelector("#min-temp").innerText=data.min_temp;

        document.querySelector("#main-temp").innerText=data.temp;
        document.querySelector("#place").innerText=city;


        document.querySelector("#humidity1").innerText=data.humidity;
        document.querySelector("#windspeed1").innerText=data.wind_speed;
        document.querySelector("#feelslike1").innerText=data.feels_like;

    })
    .catch((err)=>{
        console.log("Error : ",err);
    });
}






