import React from 'react'
import { useState } from 'react';

const App = () => {
  const fakeWeatherAPI = (city) => {
    const data = {
      Delhi: { temp: 32, condition: "Sunny" },
      Paris: { temp: 18, condition: "Cloudy" },
      Tokyo: { temp: 25, condition: "Rainy" },
      NewYork: { temp: 22, condition: "Windy" },
      London: { temp: 15, condition: "Foggy" },
      Berlin: { temp: 20, condition: "Sunny" },
      Sydney: { temp: 28, condition: "Stormy" },
      Madrid: { temp: 24, condition: "Clear" },
      Cairo: { temp: 35, condition: "Hot" },
      Moscow: { temp: 10, condition: "Snowy" }
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(data[city]){
          resolve(data[city]);
        } else {
          reject("City not found");
        }
      }, 1000)
    });
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cityWeatherData, setCityWeatherData] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <div>
        <input type="text" placeholder='Search for City...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div>
        {isLoading ? 'Loading...': (
          <div>
            <p>RESULTS</p>
            -<p>city: {searchTerm}</p>
            -<p>temprature: {cityWeatherData.temp}</p>
            -<p>condition: {cityWeatherData.condition}</p>
          </div>
        )}
      </div>
      <div>
        <p>RECENT SEARCHES:</p>
      </div>
    </>
  )
}

export default App