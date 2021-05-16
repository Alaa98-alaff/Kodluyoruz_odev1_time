'strict';

const clock = document.querySelector('.clock');
const myName = document.getElementById('myName');

// Adding the user name to the DOM
const askName = prompt('What is your name ? :)');
myName.innerHTML = askName;

// Check if the number > 10 or not
const check0 = function (input) {
  return input >= 10 ? input : '0' + input;
};

// Generate the current time (hour,min,sec)
const currentTime = function () {
  const dateNow = new Date();

  const secs = dateNow.getSeconds();
  const mins = dateNow.getMinutes();
  const hours = dateNow.getHours();

  clock.innerHTML = `${check0(hours)}:${check0(mins)}:${check0(secs)}`;
};

// calling time render function every one sec
setInterval(currentTime, 1000);
