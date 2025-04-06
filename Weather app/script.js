apiKey=;//API key here 

const  weatherForm=document.querySelector("form");
const result= document.querySelector(".result");
const inputVal=document.querySelector(".cityInput");

weatherForm.addEventListener("submit",async e=>{
    e.preventDefault();
    result.innerHTML="";
    const city=inputVal.value;

    if(city){
        try {
            const data= await getWeatherData(city);
            displayWeather(data);
        } catch (error) {
            console.log(error);
            displayError(error);
        }
    }else{
        result.innerHTML="";
        displayError("Please enter a city name");
    }
})

async function getWeatherData(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response=await fetch(url);

    if(!response.ok){
        throw new Error("Failed to fetch weather data");
    }else{
        return await response.json();
    }
};

function displayWeather(data){
    console.log(data);
    resetAnimation();   
    
    const { name: city,
            main:{temp,humidity},
            weather:[{description,id}]} = data;

            result.style.display = "block";

            const cityName=document.createElement("p");
            const emoji=document.createElement("p");
            const tempVal=document.createElement("p");
            const humidityVal=document.createElement("p");
            const weather=document.createElement("p");

            cityName.textContent=city;
            emoji.textContent=getEmoji(id);
            tempVal.textContent=`${(temp-273.15).toFixed(2)}°C`;
            humidityVal.textContent=`Humidity : ${humidity}%`;
            weather.textContent=`${description}`;

            cityName.classList.add("cityName");
            humidityVal.classList.add("humidity");
            emoji.classList.add("emoji");
            tempVal.classList.add("temp");
            weather.classList.add("weather");

            result.appendChild(cityName);
            result.appendChild(emoji);
            result.appendChild(tempVal);
            result.appendChild(humidityVal);
            result.appendChild(weather);
}


function resetAnimation() {
    result.style.animation = "none";
    void result.offsetWidth; 
    result.style.animation = "";
}

function getEmoji(id){
    if(id>=200 && id<300)
        return "⛈️";
    else if(id>=300 && id<400)
        return "🌦️";
    else if(id>=500 && id<600)
        return "🌧️";
    else if(id>=600 && id<700)
        return "❄️";
    else if(id>=700 && id<800)
        return "🌫️";
    else if(id==800)
        return "☀️";
    else if(id>800 && id<=809)
        return "☁️";
    else
        return "❓"
}

function displayError(msg){
    const errorDisplay=document.createElement("p");
    errorDisplay.innerHTML=msg;
    result.appendChild(errorDisplay);
    errorDisplay.classList.add("temp");
    result.style.display="block";
}
