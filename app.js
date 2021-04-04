const input = document.querySelector('.input');
const section = document.querySelector('.weather_detail');
const weatherTitle = document.querySelector('.weathertitle');
const weatherCity = document.querySelector('.weathercity');
const weatherIcon = document.querySelector('.weathericon');
const weatherIconDesc = document.querySelector('.weathericondesc');
const minMaxStyle = document.querySelector('.minmaxstyle');
const currentDate = document.querySelector('.currentdate');

const getWeather = async (value)=>{
    try{
 const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=6e370cb4c31647f0ffe439a8fd57014b`);
 const data = await result.json();
 console.log(data);
 let todayWeather = data.main.temp;
 let weathericon = data.weather[0].icon;
 let weatherDesc = data.weather[0].main;
 let minTemp = data.main.temp_min;
 let maxTemp = data.main.temp_max;
 let today = new Date();
 let date = today.toLocaleString('default', { month: 'long' }) +" "+ today.getDate() + ", " + today.getFullYear();
 currentDate.innerText = date;
 weatherTitle.innerHTML = `${todayWeather}&#8451;`;
weatherCity.innerText =  data.name+" , "+data.sys.country;
 weatherIcon.src = `http://openweathermap.org/img/w/${weathericon}.png`;
 weatherIconDesc.innerText = weatherDesc;
 minMaxStyle.innerHTML = `${minTemp}&#8451; `+ "/"+ ` ${maxTemp}&#8451;`;
    }
    catch(error){
        console.log("Wrong City!"); 
    }
}

input.addEventListener('keydown', (e)=>{
    if(e.which === 13){
       let val = input.value;
       console.log(val);
       input.value = "";
       getWeather(val);
    }
})