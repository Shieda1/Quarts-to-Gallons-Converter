// https://www.omnicalculator.com/conversion/quarts-to-gallons-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonsRadio = document.getElementById('gallonsRadio');
const quartsRadio = document.getElementById('quartsRadio');

let gallons;
let quarts = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Quarts';
  quarts = v;
  result.textContent = '';
});

quartsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;

  else if(quartsRadio.checked)
    result.textContent = `Quarts = ${computequarts().toFixed(5)}`;
})

// calculation

function computegallons() {
  return Number(quarts.value) / 4;
}

function computequarts() {
  return Number(gallons.value) * 4;
}