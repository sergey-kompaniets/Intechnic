const hourFrom = document.querySelector('#hour-from');
const hourTo = document.querySelector('#hour-to');
const toggle_1 = document.querySelector('#toggle-1');

const arrowUpLeft = document.querySelector('.time-arrow-up-left');
const arrowDownLeft = document.querySelector('.time-arrow-down-left');
const arrowUpRight = document.querySelector('.time-arrow-up-right');
const arrowDownRight = document.querySelector('.time-arrow-down-right');

const minValue = 7;
const maxValue = 22;

let changeValueLeft = minValue;
let changeValueRight = changeValueLeft;

arrowUpLeft.addEventListener('click', (e) => {
  if(changeValueLeft >= maxValue || changeValueLeft < minValue ) {
    return false
  }
  hourFrom.value = changeValueLeft++;
  
  changeValueRight = changeValueLeft;
});

arrowUpRight.addEventListener('click', (e) => {
  if(changeValueRight >= maxValue || changeValueRight < minValue) {
    return false
  }
  hourTo.value = changeValueRight++;
});

arrowDownLeft.addEventListener('click', (e) => {
  if(changeValueLeft > maxValue || changeValueLeft <= minValue) {
    return false
  }
  hourFrom.value = changeValueLeft--;
  // changeValueRight = changeValueLeft;
  
});

arrowDownRight.addEventListener('click', (e) => {
  if(changeValueRight > maxValue || changeValueRight <= minValue) {
    return false
  } 
  hourTo.value = changeValueRight--;
});



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
});







