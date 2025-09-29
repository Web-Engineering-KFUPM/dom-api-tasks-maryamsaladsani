/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.addEventListener("DOMContentLoaded", () => {
    const msg = document.getElementById("t1-msg");
    msg.textContent = "Hello, World!";
});

/*

=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
document.addEventListener("DOMContentLoaded", () => {
    // get elements
    const btn = document.getElementById("t2-btn");
    const status = document.getElementById("t2-status");

    // attach event listener
    btn.addEventListener("click", function () {
        status.textContent = "You clicked the button!";
    });
});
/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.quote   // the quote text
data.author    // the author
*/
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("t3-loadQuote");
    const quoteEl = document.getElementById("t3-quote");
    const authorEl = document.getElementById("t3-author");

    btn.addEventListener("click", () => {
        fetch("https://dummyjson.com/quotes/random")
            .then(res => res.json())
            .then(data => {
                quoteEl.textContent = data.quote;   // quote text
                authorEl.textContent = data.author; // author
            })
            .catch(() => {
                quoteEl.textContent = "Could not load quote 😢";
                authorEl.textContent = "";
            });
    });
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("t4-loadWx");
    const temp = document.getElementById("t4-temp");
    const hum  = document.getElementById("t4-hum");
    const wind = document.getElementById("t4-wind");
    const err  = document.getElementById("t4-err");

    const API_KEY = "9c29da573838fd8cdd561179419142d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${API_KEY}&units=metric`;


    btn.addEventListener("click", () => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("HTTP " + res.status);
                return res.json();
            })
            .then(data => {
                temp.textContent = `${Math.round(data.main.temp)} °C`;
                hum.textContent = `${data.main.humidity} %`;
                wind.textContent = `${data.wind.speed} m/s`;
                err.textContent = "";
            })
            .catch(() => {
                temp.textContent = hum.textContent = wind.textContent = "—";
                err.textContent = "Could not load weather. Check your API key or network.";
            });
    });
});
