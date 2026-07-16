
const apiKey="API_KEY";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
	const response=await fetch(apiUrl+ city+ `&appid=${apiKey}`);
	var data=await response.json();

	if(data.cod == "404"){
        alert("City not found");
        return;
    }

	console.log(data);

	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


	if(data.weather[0].main=="Clouds"){
		weatherIcon.src= "images/clouds.png";
	}
	else if(data.weather[0].main=="Clear"){
		weatherIcon.src= "images/sun_6974833.png";
	}
	else if(data.weather[0].main=="Rain"){
		weatherIcon.src= "images/heavy-rain.png";
	}
	else if(data.weather[0].main=="Drizzle"){
		weatherIcon.src= "images/icons8-drizzle-66.png";
	}
	else if(data.weather[0].main=="Mist"){
		weatherIcon.src= "images/icons8-mist-24.png";
	}
	
	
   document.querySelector(".weather").style.display = "block";
   console.log(data.weather[0].main);
   console.log(data.weather[0].description);

}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

checkWeather("London");