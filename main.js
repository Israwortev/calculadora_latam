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

// Define las constantes para los elementos <td>
const valormin1_2 = document.getElementById('valormin1-2');
const valormin3_4 = document.getElementById('valormin3-4');
const valormin5_6 = document.getElementById('valormin5-6');
const valormin7_9 = document.getElementById('valormin7-9');
const valormin10 = document.getElementById('valormin10');
const valormid3_4 = document.getElementById('valormid3-4');
const valormid5_6 = document.getElementById('valormid5-6');
const valormid7_9 = document.getElementById('valormid7-9');
const valormid10 = document.getElementById('valormid10');
const valormax5_6 = document.getElementById('valormax5-6');
const valormax7_9 = document.getElementById('valormax7-9');
const valormax_10 = document.getElementById('valormax10');

inversionMount.addEventListener('keydown', function (event) {
  if (!(event.key === 'Backspace' || event.key === 'Delete') && !/\d/.test(event.key)) {
    event.preventDefault();
  }
});

const valorIndefinido = [
  {1: 0},
  {2: 0},
  {3: 0},
  {4: 0},
  {5: 0},
  {6: 0},
  {7: 0},
  {8: 0},
  {9: 0},
  {10: 0}
];

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
let numeroIngresado; 

function resultadoCirculo(numeroIngresado, resultadoRendimiento) {
  const numero = parseFloat(numeroIngresado);
  const rendimiento = parseFloat(resultadoRendimiento);
  const sumaDeCantidades = numero + rendimiento;
  const divisionDeCantidades = (rendimiento * 100) / sumaDeCantidades;
  const resultadoDeCantidades = +divisionDeCantidades.toFixed(0);

  return resultadoDeCantidades;
}

console.log(`este es el resultado de ${resultadoCirculo(numeroIngresado,resultadoRendimiento)}`);



function defaultValues () {

  
  if (inversionMount.value === '' || inversionMount.value === '0') {
    inversionMount.value = 2500;
  } 
   numeroIngresado = inversionMount.value;

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
    valormin1_2.className = (selectedValue === '1' || selectedValue === '2') ? 'tinygreenfont' : '';
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
  mount.textContent = `$ ${(value !== 0 ? value : '').toFixed(2)}`;
  rightMonto.textContent = `$${(value !== 0 ? value : '').toFixed(2)}`
  circleInversion.textContent = `$${(value !== 0 ? value : '').toFixed(2)}`

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

  updateRangeBackground()

  const resultadoDeCirculo = resultadoCirculo(numeroIngresado, resultadoRendimiento);
updateProgressBar(resultadoDeCirculo);



updateTimeText();

};


inversionMount.addEventListener('input', (e) => {
  const numeroIngresado = inversionMount.value

  defaultValues();

  if(numeroIngresado < 2500){
    arrayAsignado = valorIndefinido;
    range.value = 1;
  } else if (numeroIngresado > 2499 && numeroIngresado <= 24999) {
    arrayAsignado = valorMinimo;
    range.value = '1';
    console.log('aqui estamos en el valor minimo');
  } else if (numeroIngresado > 24999 && numeroIngresado <= 249000) {
    arrayAsignado = valorMedio;
    range.value = '3';
    console.log('aqui estamos en el medio');
  } else if (numeroIngresado >= 250000) {
    arrayAsignado = valorMaximo;
    range.value = '5';
    console.log('aqui es el valor max');
  }
  
  updateTimeText()
  
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
  mount.textContent = `$ ${(value !== 0 ? value : '').toFixed(2)}`;
  rightMonto.textContent = `$${(value !== 0 ? value : '').toFixed(2)}`
  circleInversion.textContent = `$${(value !== 0 ? value : '').toFixed(2)}`

  console.log(rightMonto);

  updateRangeBackground();
  

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

  const resultadoDeCirculo = resultadoCirculo(numeroIngresado, resultadoRendimiento);
  updateProgressBar(resultadoDeCirculo);

});



window.addEventListener('load', defaultValues);


const range = document.getElementById('rangeyears');
const time = document.getElementById('years');

// FUNCION PARA EL COLOR DEL RANGE
function updateRangeBackground() {
  const tempSliderValue = Number(range.value); // Convierte el valor a número
  const progress = (tempSliderValue / range.max) * 100;
  range.style.background = `linear-gradient(to right, #14DA13 ${progress}%, #2B2B2B ${progress}%)`;
  
}


// LLAMADA INICIAL PARA COLOR DE RANGE
updateRangeBackground();

const selectedValue = range.value;
time.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;
returnTotalYears.textContent = `${selectedValue} ${selectedValue === '1' ? 'año' : 'años'}`;
textPosition();
function defaultRange () {
  if (range.value === '' || range.value === '0') {
    range.value = '1';
  }
};



range.addEventListener('input', (e) => {
  let selectedValue = range.value;
  const numeroIngresado = inversionMount.value;

  const porcentajeSeleccionado = selectedYears();
  const resultadoRendimiento = porcent(Number(inversionMount.value), porcentajeSeleccionado);
  rendimientoBruto.textContent = `$ ${resultadoRendimiento}`;
  returnTotal.textContent = `$ ${resultadoRendimiento}`;
  circleRendimiento.textContent = `$ ${resultadoRendimiento}`;

  
  textPosition();
  defaultRange ();
  updateTimeText();
  
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

  const resultadoDeCirculo = resultadoCirculo(numeroIngresado, resultadoRendimiento);
  updateProgressBar(resultadoDeCirculo);

  if (arrayAsignado === valorMinimo) {
    valormin1_2.className = (selectedValue === '1' || selectedValue === '2') ? 'tinygreenfont' : '';
    valormin3_4.className = (selectedValue === '3' || selectedValue === '4') ? 'tinygreenfont' : '';
    valormin5_6.className = (selectedValue === '5' || selectedValue === '6') ? 'tinygreenfont' : '';
    valormin7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? 'tinygreenfont' : '';
    valormin10.className = (selectedValue === '10') ? 'tinygreenfont' : '';
  } else {
    valormin1_2.className = (selectedValue === '1' || selectedValue === '2') ? '' : '';
    valormin3_4.className = (selectedValue === '3' || selectedValue === '4') ? '' : '';
    valormin5_6.className = (selectedValue === '5' || selectedValue === '6') ? '' : '';
    valormin7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? '' : '';
    valormin10.className = (selectedValue === '10') ? '' : '';
  }
  // Aquí establecemos las clases para valorMedio
  if (arrayAsignado === valorMedio) {
    valormid3_4.className = (selectedValue === '3' || selectedValue === '4') ? 'tinygreenfont' : '';
    valormid5_6.className = (selectedValue === '5' || selectedValue === '6') ? 'tinygreenfont' : '';
    valormid7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? 'tinygreenfont' : '';
    valormid10.className = (selectedValue === '10') ? 'tinygreenfont' : '';
  } else {
    valormid3_4.className = (selectedValue === '3' || selectedValue === '4') ? '' : '';
    valormid5_6.className = (selectedValue === '5' || selectedValue === '6') ? '' : '';
    valormid7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? '' : '';
    valormid10.className = (selectedValue === '10') ? '' : '';
  }
  // Aquí establecemos las clases para valorMaximo
  if (arrayAsignado === valorMaximo) {
    valormax5_6.className = (selectedValue === '5' || selectedValue === '6') ? 'tinygreenfont' : '';
    valormax7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? 'tinygreenfont' : '';
    valormax_10.className = (selectedValue === '10') ? 'tinygreenfont' : '';
  } else {
    valormax5_6.className = (selectedValue === '5' || selectedValue === '6') ? '' : '';
    valormax7_9.className = (selectedValue === '7' || selectedValue === '8' || selectedValue === '9') ? '' : '';
    valormax_10.className = (selectedValue === '10') ? '' : '';
  }

});



function updateTimeText() {
  const selectedValue = Number(range.value);
  time.textContent = `${selectedValue} ${selectedValue === 1 ? 'año' : 'años'}`;
  returnTotalYears.textContent = `${selectedValue} ${selectedValue === 1 ? 'año' : 'años'}`;
}
updateTimeText()

function selectedYears() {
  const numeroIngresado = inversionMount.value
  const selectedValue = Number(range.value); // Convierte el valor a número

  const objetoEncontrado = arrayAsignado.find(objeto => Object.keys(objeto)[0] == selectedValue);
  const porcentajeSeleccionado = objetoEncontrado ? objetoEncontrado[selectedValue] : null;

  if (selectedValue < 1) {
    range.value = 1;
    selectedValue = 1;
  }

  updateTimeText()
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

  progressCircle.style.transition = 'stroke-dashoffset 0.3s ease';
  progressCircle.setAttribute('stroke-dashoffset', offset);
  // progressText.textContent = `${progress}%`;

}

// Create the progress bar
createProgressBar();

const resultadoDeCirculo = resultadoCirculo(numeroIngresado, resultadoRendimiento);
updateProgressBar(resultadoDeCirculo);