document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("response").innerText = "Please fill all fields!";
  } else {
    document.getElementById("response").innerText = "Message sent successfully!";
  }
});
async function getWeather() {
  let city = document.getElementById("city").value;

  let apiKey = "3df47e238daeff43933ed04fa0e79fc6";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  

  let response = await fetch(url);
  let data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerText =
      `Temperature: ${data.main.temp}°C`;
  } else {
    document.getElementById("weatherResult").innerText =
      "City not found!";
  }
}