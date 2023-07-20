const inversionMount = document.getElementById('inversion-mount');
const invalidMount = document.getElementsByClassName('inputext')[0];
const mount = document.getElementById('monto');
const rendimientoBruto = document.getElementById('rendimiento');
const rightMonto = document.getElementById('montodeinversion');
const rendimientoMensual= document.getElementById('permonth');
const porcentajeMensual = document.getElementById('porcentajemonth');
const rendimientoPerYear = document.getElementById('returnperyear');
const returnPorcent = document.getElementById('porcentajeanual');
const returnTotalYears = document.getElementById('totalreturnyears');
const returnTotal = document.getElementById('rendimientototal');
const circleInversion = document.getElementById('inversion-circulo');
const circleRendimiento = document.getElementById('rendimientos-circulo');

inversionMount.addEventListener('keydown', function (event) {
  if (!(event.key === 'Backspace' || event.key === 'Delete') && !/\d/.test(event.key)) {
    event.preventDefault();
  }
});

const valorMinimo = [
  {1: 0.12},
  {2: 0.24},
  {3: 0.42},
  {4: 0.56},
  {5: 0.80},
  {6: 0.96},
  {7: 1.26},
  {8: 1.44},
  {9: 1.62},
  {10: 2.00}
];

const valorMedio = [
  {3: 0.48},
  {4: 0.64},
  {5: 0.90},
  {6: 1.08},
  {7: 1.40},
  {8: 1.60},
  {9: 1.80},
  {10: 2.20}
];

const valorMaximo = [
  {5: 1.00},
  {6: 1.20},
  {7: 1.54},
  {8: 1.76},
  {9: 1.98},
  {10: 2.40}
];

let arrayAsignado = [];
let resultadoRendimiento;

function defaultValues () {
  if (inversionMount.value === '' || inversionMount.value === '0') {
    inversionMount.value = '2500';
  }
};


inversionMount.addEventListener('input', (e) => {
  const numeroIngresado = inversionMount.value;

  defaultValues();

  if (numeroIngresado > 2499 && numeroIngresado <= 24999) {
    arrayAsignado = valorMinimo;
    range.value = 1;
  } else if (numeroIngresado > 24999 && numeroIngresado <= 249000) {
    arrayAsignado = valorMedio;
    range.value = 3;
  } else if (numeroIngresado >= 250000) {
    arrayAsignado = valorMaximo;
    range.value = 5;
  }

  if (arrayAsignado === valorMinimo) {
    time.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;
  } else if (arrayAsignado === valorMedio) {
    // Aquí puedes establecer el valor mínimo de años para valorMedio
    const minYears = 3;
    const selectedYears = range.value < minYears ? minYears : range.value;
    time.textContent = `${selectedYears} ${selectedYears === '3' ? 'año' : 'años'}`;
  } else if (arrayAsignado === valorMaximo) {
    // Aquí puedes establecer el valor mínimo de años para valorMaximo
    const minYears = 5;
    const selectedYears = range.value < minYears ? minYears : range.value;
    time.textContent = `${selectedYears} ${selectedYears === '5' ? 'año' : 'años'}`;
  }
  
  if (numeroIngresado === '0') {
    inversionMount.value = '';
  } else if (numeroIngresado.charAt(0) === '0') {
    inversionMount.value = numeroIngresado.slice(1);
  }

  const value = Number(inversionMount.value);

  // SI EL VALOR ES MENOR A 2500 Rojo
  if (value < 2500) {
    invalidMount.className = 'redinput';
  } else {
    invalidMount.className = 'inputext';
  }

  // Si el value es igual a 0 no renderiza nada 
  mount.textContent = `$ ${value !== 0 ? value : ''}`;
  rightMonto.textContent = `$${value !== 0 ? value : ''}`
  circleInversion.textContent = `$${value !== 0 ? value : ''}`

  console.log(rightMonto);


  const porcentajeSeleccionado = selectedYears();
  const resultadoRendimiento = porcent(value, porcentajeSeleccionado);
  rendimientoBruto.textContent = `$ ${resultadoRendimiento}`;
  returnTotal.textContent = `$ ${resultadoRendimiento}`;
  circleRendimiento.textContent = `$ ${resultadoRendimiento}`;
  console.log(porcentajeSeleccionado);
  console.log(resultadoRendimiento);
  textPosition();

  // AQUI SE RENDERIZA EL MONTO INICIAL
  const resultadoMesesInicial = months(selectedValue, resultadoRendimiento);
  rendimientoMensual.textContent = `$${resultadoMesesInicial} `;
  console.log(resultadoMesesInicial);

  // AQUI SE RENDERIZA EL PORCENTAJE EL PORCENTAJE MENSUAL
  const resultadoPorcentajePerMonth = porcentajePerMonth(selectedValue, porcentajeSeleccionado);
  porcentajeMensual.textContent = `${resultadoPorcentajePerMonth}%`;

  // AQUI SE RENDERIZA LOS RENDIMIENTOS POR AÑO
  const opRendimientoAnual = rendimientoPorAnio (resultadoRendimiento, selectedValue);
  const rendimientoAnual = opRendimientoAnual.toFixed(2)
  rendimientoPerYear.textContent = `$${rendimientoAnual}`;

  // AQUI SE RENDERIZA EL PORCENTAJE POR AÑO
  const resultadoPorcentajeYear = porcentajePorAnio(porcentajeSeleccionado, selectedValue);
  returnPorcent.textContent = `${resultadoPorcentajeYear}%`;

  const porcentajeProgress = porcentajeSeleccionado * 100;
  const resultProgress = porcentajeProgress.toFixed(0)
  // Aqui es donde recibiria el valor a renderizar
setTimeout(function() {
  // Prueba cambiando el valor
updateProgressBar(resultProgress);
}, 1000);

updateRangeBackground();
  
});

window.addEventListener('load', defaultValues
);


const range = document.getElementById('rangeyears');
const time = document.getElementById('years');

// FUNCION PARA EL COLOR DEL RANGE
function updateRangeBackground() {
  const tempSliderValue = range.value;
  const progress = (tempSliderValue / range.max) * 100;
  range.style.background = `linear-gradient(to right, #14DA13 ${progress}%, #2B2B2B ${progress}%)`;
}

// LLAMADA INICIAL PARA COLOR DE RANGE
updateRangeBackground();

const selectedValue = range.value;
time.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;
textPosition();
returnTotalYears.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;

function defaultRange () {
  if (range.value === '' || range.value === '0') {
    range.value = '1';
  }
};

range.addEventListener('input', (e) => {
  let selectedValue = range.value;
  time.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;
  returnTotalYears.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;

  const porcentajeSeleccionado = selectedYears();
  const resultadoRendimiento = porcent(Number(inversionMount.value), porcentajeSeleccionado);
  rendimientoBruto.textContent = `$ ${resultadoRendimiento}`;
  returnTotal.textContent = `$ ${resultadoRendimiento}`;

  textPosition();
  defaultRange ()

  if (range.value < 1) {
    range.value = 1;
  }
  

  // AQUI ESTA EL COLOR DEL SLIDER
  updateRangeBackground();

  // AQUI ESTA EL RENDIMIENTO POR MES 
  const resultadoMeses = months(selectedValue, resultadoRendimiento);
  rendimientoMensual.textContent = `$${resultadoMeses} `;
  console.log(resultadoMeses);

  // AQUI ESTA EL PORCENTAJE POR MES 
  const resultadoPorcentajePerMonth = porcentajePerMonth(selectedValue, porcentajeSeleccionado);
  porcentajeMensual.textContent = `${resultadoPorcentajePerMonth}%`;
  
  // AQUI ESTA EL RENDIMIENTO ANUAL
  const rendimientoAnual = rendimientoPorAnio (resultadoRendimiento, selectedValue);
  rendimientoPerYear.textContent = `$${rendimientoAnual}`;

  // AQUI ESTA EL PORCENTAJE ANUAL 
  const resultadoPorcentajeYear = porcentajePorAnio(porcentajeSeleccionado, selectedValue);
  returnPorcent.textContent = `${resultadoPorcentajeYear}%`;

  const porcentajeProgress = porcentajeSeleccionado * 100;
  const resultProgress = porcentajeProgress.toFixed(0)
  // Aqui es donde recibiria el valor a renderizar
setTimeout(function() {
  // Prueba cambiando el valor
updateProgressBar(resultProgress);
}, 1000);
  
});

function selectedYears() {
  const objetoEncontrado = arrayAsignado.find(objeto => Object.keys(objeto)[0] == range.value);
  const porcentajeSeleccionado = objetoEncontrado ? objetoEncontrado[range.value] : null;
  
  return porcentajeSeleccionado;
}

function porcent(valor, porcentajeSeleccionado) {
  const operacion = valor * porcentajeSeleccionado;
  const resultado = operacion.toFixed(2);
  return  resultado;
}

function months(selectedValue, resultadoRendimiento){
  const multiplicacionMeses= 12 * selectedValue;
  const divisionMeses= resultadoRendimiento/multiplicacionMeses;
  resultadoMeses = divisionMeses.toFixed(2)
  return resultadoMeses
}

function porcentajePerMonth(selectedValue, porcentajeSeleccionado){
  const multiplicacionPorcentaje = 12 * selectedValue;
  const divisionPorcentaje = porcentajeSeleccionado / multiplicacionPorcentaje;
  const preResultado = divisionPorcentaje *100;
   const resultadoPorcentajeMensual = preResultado.toFixed(0)

  return resultadoPorcentajeMensual
}

function rendimientoPorAnio (resultadoRendimiento, selectedValue) {
  const rendimientoEntreAnios = resultadoRendimiento / selectedValue;
  
  return rendimientoEntreAnios;
}

function porcentajePorAnio(porcentajeSeleccionado, selectedValue){
  const porcentajeEntreAnios = porcentajeSeleccionado / selectedValue;
  const multiplicacionPorcentajeAnios = porcentajeEntreAnios * 100;
  const resultadoPorcentajeAnios = multiplicacionPorcentajeAnios.toFixed(0);

  return resultadoPorcentajeAnios;
}

function textPosition() {
  const rangeWidth = range.offsetWidth;
  const rangeValue = range.value;
  const rangeMax = range.max;
  const yearsWidth = time.offsetWidth;

  const rangeOffset = (rangeValue / rangeMax) * rangeWidth - yearsWidth / 2;
  time.style.left = `${rangeOffset}px`;
}



// ****************************************************************************
 // Function para crear el circulo progresivo
 function createProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('viewBox', '0 0 100 100');

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  backgroundCircle.setAttribute('cx', '50');
  backgroundCircle.setAttribute('cy', '50');
  backgroundCircle.setAttribute('r', radius);
  backgroundCircle.setAttribute('stroke', '#ccc');
  backgroundCircle.setAttribute('stroke-dasharray', circumference);
  backgroundCircle.setAttribute('stroke-dashoffset', 0);

  const progressCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  progressCircle.setAttribute('cx', '50');
  progressCircle.setAttribute('cy', '50');
  progressCircle.setAttribute('r', radius);
  progressCircle.setAttribute('stroke', '#f00');
  progressCircle.setAttribute('stroke-dasharray', circumference);
  progressCircle.setAttribute('stroke-dashoffset', 0);

  const progressText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  progressText.setAttribute('x', '50');
  progressText.setAttribute('y', '50');
  progressText.setAttribute('id', 'progress-text');

  // svg.appendChild(backgroundCircle);
  // svg.appendChild(progressCircle);
  svg.appendChild(progressText);

  progressBar.appendChild(svg);
}

// Function para  actualizar el progreso 
function updateProgressBar(progress) {
  const svg = document.querySelector('#progress-bar svg');
  const progressCircle = svg.querySelector('circle:nth-child(2)');
  const progressText = svg.querySelector('#progress-text');
  const radius = parseFloat(progressCircle.getAttribute('r'));
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  progressCircle.setAttribute('stroke-dashoffset', offset);
  progressText.textContent = `${progress}%`;

}

// Create the progress bar
createProgressBar();

// Aqui es donde recibiria el valor a renderizar
// setTimeout(function() {
//     // Prueba cambiando el valor
//   updateProgressBar(selectedYears.porcentajeSeleccionado);
// }, 1000);

const porcentajeProgress = porcentajeSeleccionado * 100;
const resultProgress = porcentajeProgress.toFixed(0)
  // Aqui es donde recibiria el valor a renderizar
setTimeout(function() {
  // Prueba cambiando el valor
updateProgressBar(resultProgress);
}, 1000);

