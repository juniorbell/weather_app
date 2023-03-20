const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const weatherBox =document.querySelector('.weather-box');
const weatherDetails =document.querySelector('.weather-details');
const error404 =document.querySelector('.not-found');


search .addEventListener('click',() =>{

    const APIKey='8ff3fedc32a060ca35f75569ba9d2139';
    const city= document.querySelector('.search-box input').value;

    if(city ==='')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}').then(response=> response.json()).then(json=>{

        if(json.cod === '404'){
            container.style.heigt = '400px';
            weatherBox.style.display ='none';
            weatherDetails.style.display ='none';
            error404.style.display ='block';
            error404.classList.add('fadeIn');
            return;
        }
        error404.style.display ='none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch (json.weather[0].main) {
            case 'Clear':
                image.scr='images/kuririn.png';
                break;

                case'Rains':
                image.scr='images/rick.png';
                break;
                case'Snow':
                image.scr='images/pooh.png';
                break;
                case'Clouds':
                image.scr='images/pool.png';
                break;
                case'Haze':
                image.scr='images/seya.png';
                break;


                default:
                    image.src='';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';






    });
});