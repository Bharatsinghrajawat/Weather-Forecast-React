import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App ()  {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const key = '0f5069732198cf381afc65fd291fc99e';

    const search = e => {
        if(e.key==='Enter'){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);

            })
        }
    }


// const getWeather = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }


  const date = (d) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${date} ${month} ${year}`
  }
    
    return(
        // <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16)? 'app-cloudy' : 'app') : 'app'}>
        <div className={(typeof weather.main != 'undefined') ? (weather.weather[0].main) : 'default'}>
       
            <main>
                <div className='search-box'> 
                    <input className='search-bar' onChange={e => setQuery(e.target.value)} 
                    onKeyPress={search} value={query} type='text' placeholder='Location.....'  />
                </div>
                {(typeof weather.main!= 'undefined') ? (
                <div>
                <div style={{color : 'white'}} className='location-box'>
                    <div className='location'>
                        {weather.name} , {weather.sys.country}
                    </div>
                    <div className='date'>{date(new Date())}</div>
                </div>
                <div style={{color : 'white'}} className='weather-box'>
                    <div className='temperature'>{Math.round(weather.main.temp)}°C</div>
                    <div className='weather'>{weather.weather[0].main}</div>
                </div>
                </div>
                ):('')}
            </main>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));