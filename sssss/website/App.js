/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Function to perform an action on button click
document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
    // Retrieve user input values
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    // Call function to fetch weather data
    getWeatherData(zipCode)
        .then(function (data) {
            // Add data to POST request
            postData('/addWeatherData', {
                temperature: data.temperature,
                date: newDate,
                userResponse: feelings
            });
        })
        .then(updateUI); // Call function to update UI
}

// Function to fetch weather data from API
const getWeatherData = async (zipCode) => {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(apiUrl);
    try {
        const data = await response.json();
        const temperature = data.main.temp;
        return { temperature };
    } catch (error) {
        console.log('Error:', error);
    }
};

// Function to POST data
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('Error:', error);
    }
};

// Function to update UI
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}°C`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.userResponse}`;
    } catch (error) {
        console.log('Error:', error);
    }
};

