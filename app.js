const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//get date
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempdate = new Date();
let tempyear = tempdate.getFullYear();
let tempmonth = tempdate.getMonth();
let tempday = tempdate.getDate();
// let futuredate = new Date(2022, 11, 31, 11, 59, 59);
const futuredate = new Date(tempyear, tempmonth, tempday + 10, 11, 30, 0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
const date = futuredate.getDate();
const day = weekdays[futuredate.getDay()];

giveaway.textContent = `giveaway end on ${day}, ${date} ${month} ${year} ${hours}:${minutes}am  `;

// future time in ms
const futuretime = futuredate.getTime();

// count down

function getRemaningTime() {
  const today = new Date().getTime();
  const t = futuretime - today;

  // 1s=1000ms
  //1m=60s
  //1hr=60min
  //1d=24hr

  //values in ms
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  const onesec = 1000;
  // calc all values
  // days
  let days = t / oneday;
  days = Math.floor(days);
  // hours
  let hours = Math.floor((t % oneday) / onehour);

  // mins
  let minutes = Math.floor((t % onehour) / oneminute);

  // secs
  let secs = Math.floor((t % oneminute) / onesec);

  //set array
  const values = [days, hours, minutes, secs];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = ` <h4 class="expired">sorry,this giveaway has exired</h4>`;
  }
}
//countdown
let countdown = setInterval(getRemaningTime, 1000);

getRemaningTime();
