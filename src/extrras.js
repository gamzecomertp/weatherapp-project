unction convertToCe(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFa);
let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCe);

function displayTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `the current temperature is ${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let searchFormInput = document.querySelector("#form-control-input");
  h1.innerHTML = searchFormInput.value;
}
let formattedDate = document.querySelector("#date");
let currentTime = new Date();
formattedDate.innerHTML = formatDate(currentTime);


let h1 = document.querySelector("#city");
  h1.innerHTML = `${city}`;
  let tempCity = document.querySelector("#temperature 1");
  tempCity.innerHTML = `${temperature}`;
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);

  <span class="temperature" id="temperature1"></span><span class="units"><a href="#" id="celcius-link">ºC</a> / 
           <a href="#" id="fahrenheit-link">ºF</a> </span>
        </div>

        function displayCurrentTemp(response) {
  let temperatureCurrent = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("temperature1");
  currentTemp.innerHTML = `${temperatureCurrent}`;
}