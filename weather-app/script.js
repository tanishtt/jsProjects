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
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
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
                
        document.querySelector("#sunrise").innerText=data.sunrise;
        document.querySelector("#sunset").innerText=data.sunset;

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






