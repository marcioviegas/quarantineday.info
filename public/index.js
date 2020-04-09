var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var todayElement = document.querySelector("#today");
todayElement.textContent = days[new Date().getDay()];
