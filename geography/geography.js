
const buttonOne = document.querySelector('#myButton');


buttonOne.addEventListener('click', function() {
    document.querySelector('#myVideo').play();
})

const timer = 5;
let amountTime = timer * 60;


function calculateTime() {
  const countdown = document.querySelector('#countdown');

  let minutes = Math.floor(amountTime/60);
  let seconds = amountTime%60;

  if (seconds < 10) {
    seconds = "0" + seconds
  }

  countdown.textContent = `${minutes} : ${seconds}`;
 
  amountTime--;
 if (amountTime < 0) {
  stopTimer();
  amountTime = 0;
}
function stopTimer() {
    clearInterval(timerId);
  }
}

let timerId = setInterval(calculateTime, 1000);



const button = document.querySelector('.btn');
const answers = document.querySelectorAll('.answer')


button.addEventListener('click', totalPoints);

const par = document.querySelector('#show');


function totalPoints(e) {
    e.preventDefault();

    let points = 0;

    answers.forEach(answer => {
        if (answer.checked) points++;
    });
    
    par.textContent = 'Your total points:' + points;

}


