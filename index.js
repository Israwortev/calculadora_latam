const inversionMount = document.getElementById('inversion-mount');
const invalidMount = document.getElementsByClassName('inputext')[0];
const mount = document.getElementById('monto');
const rendimientoBruto = document.getElementById('rendmiento');

inversionMount.addEventListener('keydown', function (event) {
    if (
      !(event.key === 'Backspace' || event.key === 'Delete') &&
      !/\d/.test(event.key)
    ) {
      event.preventDefault();
    }
  });

  valorMinimo={
    1: 0.12,
    2: 0.24,
    3: 0.42,
    4: 0.56,
    5: 0.80,
    6: 0.96,
    7: 1.26,
    8: 1.44,
    9: 1.62,
    10: 2.00
  }
  valorMedio={
    3:0.48,
    4:0.64,
    5:0.90,
    6:1.08,
    7:1.40,
    8:1.60,
    9:1.80,
    10:2.20,
  }
  valorMaximo={
    5:1.00,
    6:1.20,
    7:1.54,
    8:1.76,
    9:1.98,
    10:2.40,
  }
  
// valor predeterminado inicial
  inversionMount.value = 2500;


  let objetoAsignado = {};


inversionMount.addEventListener('input', (e) => {

  // obtener el valor del input
    const numeroIngresado = inversionMount.value;
    let objetoAsignado = {}

    // obtener que tipo de monto es
    if(numeroIngresado > 2499 && numeroIngresado <= 24999){
      objetoAsignado = valorMinimo;
      console.log(`este es el monto minimo ${numeroIngresado} ${objetoAsignado}`)
      console.dir(objetoAsignado);
    } else if (numeroIngresado > 24999 && numeroIngresado <= 249000){
      objetoAsignado = valorMedio;
      console.log(`este es el valor medio ${numeroIngresado}${objetoAsignado}`);
      console.dir(objetoAsignado);
    } else if(numeroIngresado >= 250000){
      objetoAsignado = valorMaximo;
    console.log(`este es el valor maximo ${numeroIngresado} ${objetoAsignado}`);
    console.dir(objetoAsignado);
    }

    // este es el object.entries
    const yearsAsign = Object.entries(objetoAsignado);
console.log(yearsAsign);


  // Validar si el número comienza con cero
  if (numeroIngresado === '0') {
    inversionMount.value = ''; 
  } else if (numeroIngresado.charAt(0) === '0') {
    inversionMount.value = numeroIngresado.slice(1); 
  }
  const value = Number(inversionMount.value);
  // si el numero es menor de 2500 marcar error
  if (value < 2500) {
    invalidMount.className='redinput'
  } else {
    invalidMount.className = 'inputext';
  }
  mount.textContent =`$ ${value !== 0 ? value : ''}`;
});

const range = document.getElementById('rangeyears');
const years = document.getElementById('years');

range.value = 1

years.textContent = `${range.value} año`;
positionYears();

range.addEventListener('input', () => {

  if (range.value < 1) {
    range.value = 1;
  }

  years.textContent = range.value

  if (range.value == 1){
    years.textContent =`${range.value} año`; 
  } else{
      years.textContent =`${range.value} años`;
    }

    
    positionYears();
    console.log(years);
    
})

function positionYears() {
  const rangeWidth = range.offsetWidth;
  const rangeValue = range.value;
  const rangeMax = range.max;
  const yearsWidth = years.offsetWidth;

  const rangeOffset = (rangeValue / rangeMax) * rangeWidth - yearsWidth / 2;
  years.style.left = `${rangeOffset}px`;
}

// const yearsAsign = Object.entries(objetoAsignado);
//   console.log(yearsAsign);




