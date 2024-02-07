//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
// fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1342f8dd595eda677ca40143519800de').then((data) => data.json()).then((parsedData) => console.log(parsedData));
// weather.js
// let a = do
// Replace 'YOUR_API_KEY' with your actual API key
// const apiKey = 'YOUR_API_KEY';
 // Replace with the API URL

// Function to fetch weather data from the API
// weather.js

// Function to fetch weather data from the API
// weather.js

// Function to fetch weather data from the API based on the location
async function getWeatherData(location) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=68f0e59acfce30ebbbb4885d38342493`);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  
  function updateWeatherUI(weatherData) {
    if (!weatherData) {
      console.error('No weather data available');
      return;
    }
    
    document.querySelector('.location').textContent = weatherData.name;
    document.querySelector('.date').textContent = new Date().toDateString();
    document.querySelector('.temp.avg').textContent = `${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
    document.querySelector('.weather').textContent = weatherData.weather[0].main;
    document.querySelector('.temp.min-max').textContent = `${(weatherData.main.temp_min - 273.15).toFixed(2)}°C / ${(weatherData.main.temp_max - 273.15).toFixed(2)}°C`;
  }
  
  async function fetchAndUpdateWeather() {
    const location = document.getElementById('username').value; 
    const weatherData = await getWeatherData(location);
    updateWeatherUI(weatherData);
  }
  
  window.addEventListener('load', fetchAndUpdateWeather);
  
  // Listen for changes in the input field and update weather data 
  document.getElementById('username').addEventListener('change', fetchAndUpdateWeather);
  