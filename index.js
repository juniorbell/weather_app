const container =document.querySelector('.container');
const search =document.querySelector('.search-box button');
const weatherBox =document.querySelector('.weather-box');
const weatherDetails =document.querySelector('.weather-details');
const error404 =document.querySelector('.not-found');


search .addEventListener('click',() =>{

    const APIKey='0fe3fc1d3a0aae82cb3c7b9bf60b3df7';
    const city= document.querySelector('.search-box input').value;

    if(city ==='')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}').then(response=> response.json()).then(json=>{

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
        const temperatura = document.querySelector('.weather-box .temperatura');
        const descricao = document.querySelector('.weather-box .descricao');
        const humidade = document.querySelector('.weather-details .humidade span');
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

        temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        descricao.innerHTML = `${json.weather[0].descricao}`;
        humidade.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';






    });
});