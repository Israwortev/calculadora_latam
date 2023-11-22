//     // Tipo de persona
//     const typePerson = document.getElementById('selectPersona')

//     // valor de la inversion
//     const inversionMount = document.getElementById('inversion-mount')
//     const invalidMount = document.querySelector('.inputext')
//     const inversionDe = document.getElementById('inversionDe')
//     const rendimientoBruto = document.getElementById('rendimientoBruto')
    
//     // Const Modal
//     const clicktoModalPerson = document.querySelector(".clickto-modal-person");
//     const modalPerson = document.querySelector(".modal-person");
//     const containbtnperson = document.querySelector(".containbtnperson");
//     // Constante del range 
//     const capitalRange = document.querySelector("#capital-range");
//     const sliderValue = document.querySelector(".value2");
//     const anioText = document.querySelector(".anio");
//     const aniosText = document.querySelector(".anios");
    
//     // PAGOS
//     const pagoMensual = document.getElementById('pago-mensual');
//     const pagoAnual = document.getElementById('pago-anual');
    
//     // CIRCULO
//     const circleInversion = document.getElementById('inversion-circulo');
//     const circleRendimiento = document.getElementById('rendimientos-circulo');
    
//     //CARD DERECHA
//     const inversionRight = document.getElementById('inversion-right');
//     const rendimientowIva = document.getElementById('rendimientoIVA');
//     const rendimientosinIva = document.getElementById('rendimientosinIVA');
//     const totalMensual = document.getElementById('totalMensual');
//     const resultMonth = document.getElementById('resultmonth');
//     const resultYear = document.getElementById('resultyear');
    
//     // DATOS PERSONA FISICO
//     const retIva = document.getElementById('retencionPorIVA');
//     const retIsr = document.getElementById('retencionPorISR');
//     const sumRetention = document.getElementById('totalconretenciones')
//     // Modal monto minimo
//     const minMount = document.getElementById('modalmin');
    
//     inversionMount.addEventListener('input', (event)=>{
//         const inversion = inversionMount.value
    
//         if(inversion < 10000){
//             invalidMount.className = 'redInput'
//             minMount.style.display= 'block';
//         }else{
//             invalidMount.className = 'inputext'
//             minMount.style.display= 'none';
//         }
    
//         inversionDe.textContent = `$${inversionMount.value}`;
        
//     });

//     function formatNumberWithCommas(number) {
//       return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   }
    
//     // Función para calcular el rendimiento mensual
//     function rendimientoMensual(inversion) {
//         // Calcular el 2% de la inversión
//         const porcentaje = 0.02; // 2%
//         const calcularPorcentaje = inversion * porcentaje;
//         return calcularPorcentaje;
//     }
    
//     // Función para calcular el IVA mensual
//     function ivaCalc(rendimientoMensual) {
//         // Calcular el IVA (16% del rendimiento)
//         const iva = 0.16; // 16%
//         const ivaMensual = rendimientoMensual * iva;
//         return ivaMensual;
//     }
    
//     // Función para calcular el rendimiento total mensual con IVA
//     function rendimientoIva(ivaMensual, calcularPorcentaje) {
//         // Sumar el IVA al rendimiento mensual
//         const rendimientoMensualTotal = ivaMensual + calcularPorcentaje;
//         return rendimientoMensualTotal;
//     }
    
//     // Función para calcular la cantidad anual
//     function rendimientoAnual(rendimientoMensualTotal, selectedValue) {
//         // Calcular la cantidad anual
//         const calculoAnual = rendimientoMensualTotal * 12;
//         const cantidadAnual = selectedValue * calculoAnual;
//         return cantidadAnual;
//     }
    
//     function rendimientoPerYear(cantidadAnual, selectedValue){
//         const divisionAnual = cantidadAnual / selectedValue;
//         return divisionAnual;
//     }
    
//     // Funciones para calcular el valor de impuestos persona Fisica
    
//     // RETENCION IVA
//     function getRetIva(calcularPorcentaje){
//         const calcIva = calcularPorcentaje * 0.1066; 
//         return resulRetIva = calcIva;
    
//     }
    
//     // RETENCION DE ISR
//     function getRetIsr(calcularPorcentaje){
//         const calcIsr = calcularPorcentaje * 0.20;
//         return resultRetIsr = calcIsr;
//     }
    
//     // SUMA DE IMPUESTOS
//     function getImpuestos ( resulRetIva, resultRetIsr ){
//         const sumImpuestos = resulRetIva + resultRetIsr;
//         return sumImpuestos;
//     }
    
//     // RENDIMIENTO CON ISR E IVA MENSUAL
//     function getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal ){
//         const sumaImpuestos = resultRetIsr + resulRetIva;
//         const restadeImpuestos = rendimientoMensualTotal - sumaImpuestos;
//         return getRendimientoFisicoMonth = restadeImpuestos;
//     }
    
    
//     // RENDIMIENTO CON ISR E IVA MENSUAL
//     function rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue){
//         const multilicacionAnual = getRendimientoFisicoMonth * 12;
//         const getcantidadAnualFisica = selectedValue * multilicacionAnual;
//         return getcantidadAnualFisica;
//     }
    
//     // RENDIMIENTO POR AÑO OPT FISICA
//     function perYearFis(getcantidadAnualFisica, selectedValue){
//         const divisionAnualFis =  getcantidadAnualFisica / selectedValue;
//         return divisionAnualFis;
//     }
    
//     function getTotalImpuestos(sumImpuestos,selectedValue){
//         const impuestoAnual = sumImpuestos * 12;
//         const totalImpuestos = impuestoAnual * selectedValue;
//         return totalImpuestos;
//     }
    
    
//     function moralOption() {
//         // Valor de la inversión inicial
//         let inversion = parseFloat(10000);
        
//         // Valor del plazo (puedes cambiarlo por selectedValue si lo deseas)
//         let selectedValue = 1;
        
//         // Asignar el valor a inversionMount
//         inversionMount.value = inversion;

//         // funcion de comas y decimales
//         function formatNumberWithCommas(number) {
//           return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//         }
        
//         // Valor de la inversión
//         inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
//         circleInversion.innerText= `$${formatNumberWithCommas(inversion)}`
        
//         // Calcular el rendimiento mensual
//         const calcularPorcentaje = rendimientoMensual(inversion);
//         rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`
//         // rendimientoBruto.innerText = `$${calcularPorcentaje.toFixed(2)}`;
        
//         // Calcular el IVA mensual
//         const ivaMensual = ivaCalc(calcularPorcentaje);
//         rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
        
//         // Mostrar el resultado del IVA mensual
//         console.log(`IVA Mensual: $${ivaMensual}`);
        
//         // Calcular el rendimiento mensual total con IVA
//         const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
        
//         // Mostrar el resultado del rendimiento mensual total con IVA
//         pagoMensual.innerText = `$${ formatNumberWithCommas(rendimientoMensualTotal)}`;
//         totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
//         resultMonth.innerText = `$${ formatNumberWithCommas(rendimientoMensualTotal)}`;
        
//         // Calcular el valor anual de la inversión
//         const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
//         rendimientoBruto.innerText = `$${cantidadAnual}`;
        
//         // Mostrar el resultado del valor anual de la inversión
//         const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue)
//         pagoAnual.innerText = `$${divisionAnual.toFixed(2)}`;
//         resultYear.innerText = `$${divisionAnual.toFixed(2)}`;
    
//         circleRendimiento.innerText = `$${cantidadAnual}`;
    
//         const tabpfisica = document.querySelector('.tabpfisica');
//         tabpfisica.style.display = 'none';
//         const progressBar = document.getElementById('progress-bar');
//         // progressBar.style.display = 'block'
//         var chart = document.querySelector("#chart");
//         // chart.style.display = 'none';
    
//         var options = {
//             series: [],
//             chart: {
//                 type: 'donut',
//                 with:300
//             },
//             labels: [],
//             tooltip: {
//                 enabled: true,
//                 y: {
//                     formatter: function (value) {
//                         return `$${value}`; // Agrega el signo de dólar ($) al tooltip
//                     }
//                 }
//             },
//             dataLabels: {
//                 enabled: false 
//             },
//             colors: ['#14DA13','#2b2b2b' ],
//             plotOptions: {
//                 pie: {
//                     donut: {
//                         size: '88%', 
//                         background: 'transparent', 
//                     }
//                 }
//             },
//         };
    
//         var chart = new ApexCharts(document.querySelector("#chart"), options);
//         chart.render();
        
//         // Función para actualizar los valores
//         function actualizarValores() {
//             const inversion = parseFloat(inversionMount.value);
//             const calcularPorcentaje = rendimientoMensual(inversion);
//             const ivaMensual = ivaCalc(calcularPorcentaje);
//             const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
//             const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
//             const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue)
            
//             // Actualiza los valores en el círculo y la barra de progreso
//             inversionRight.innerText = `$${formatNumberWithCommas(inversion)}`;
//             circleInversion.innerText = `$${formatNumberWithCommas(inversion)}`;
//             pagoMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
//             rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
//             circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
//             pagoAnual.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
//             resultYear.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
//             rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
//             rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`
//             totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
//             resultMonth.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
            
    
//             const cantidadAnualMoral = parseFloat(cantidadAnual);
//             const inversionValue = parseFloat(inversion);
    
//             const newSeriesData = [cantidadAnualMoral, inversionValue];
//             const newLabels = ['Rendimientos', 'Inversión'];
    
//             const newOptions = {
//                 series: newSeriesData,
//                 labels: newLabels,
//             };
    
//             chart.updateOptions(newOptions);
    
//             // Calcula y actualiza el progreso
//             // const resultadoDeCirculo = resultadoCirculo(inversion, cantidadAnual);
//             // updateProgressBar(resultadoDeCirculo);
//         }
//         actualizarValores();
    
//         // Agregar eventos a los elementos (inversionMount y capitalRange)
//         inversionMount.addEventListener('input', (event) => {
//             const inversion = inversionMount.value;
//             const calcularPorcentaje = rendimientoMensual(inversion);
//             rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
//             const ivaMensual = ivaCalc(calcularPorcentaje);
//             // console.log(`IVA Mensual: $${ivaMensual}`);
//             const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
//             pagoMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
//             circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
//             circleInversion.innerText= `$${inversion}`
//             capitalRange.value = 1;
//         const inputEvent = new Event('input', { bubbles: true });
//         capitalRange.dispatchEvent(inputEvent);
//     //         const resultadoDeCirculo = resultadoCirculo(inversion, cantidadAnual);
//     //   updateProgressBar(resultadoDeCirculo);
//       actualizarValores();
//         });
        
//         capitalRange.addEventListener('input', (event) => {
//             // Actualiza selectedValue con el nuevo valor del rango
//         selectedValue = capitalRange.value;
    
//         // Calcula la cantidad anual con el nuevo valor de selectedValue
//         const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
//         console.log(cantidadAnual);
        
//         // Actualiza el elemento de la interfaz de usuario que muestra la cantidad anual
//         rendimientoBruto.innerText = `$${cantidadAnual}`;
//         circleRendimiento.innerText = `$${cantidadAnual}`;
    
//     //     const resultadoDeCirculo = resultadoCirculo(inversion, cantidadAnual);
//     //   updateProgressBar(resultadoDeCirculo);
//       actualizarValores();
//         });
    
//     }
    
//     function fisicaOption(){
    
//         // Valor de la inversión inicial
//         let inversion = parseFloat(10000);
        
//         // Valor del plazo (puedes cambiarlo por selectedValue si lo deseas)
//         let selectedValue = 1;
        
//         // Asignar el valor a inversionMount
//         inversionMount.value = inversion;
    
//         // funcion de comas y decimales
//         function formatNumberWithCommas(number) {
//           return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//         }

//         // Valor de la inversión
//         inversionDe.textContent = `$${inversion.toFixed(2)}`;
//         inversionRight.textContent = `$${inversion.toFixed(2)}`;
        
//         // Calcular el rendimiento mensual
//         const calcularPorcentaje = rendimientoMensual(inversion);
//         rendimientosinIva.innerText = `$${calcularPorcentaje}`;
        
//         // calculo iva de rendimiento 
//         const ivaMensual = ivaCalc(calcularPorcentaje);
//         rendimientowIva.innerText = `$${ivaMensual.toFixed(2)}`;
    
//         // RENDIMIENTO + IVA
//         const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
//         totalMensual.innerText = `$${rendimientoMensualTotal}`;
    
//         // RETENCION IVA
//         const resulRetIva = getRetIva(calcularPorcentaje);
//         retIva.innerText = `$${resulRetIva}`;
    
//         // RETENCION ISR
//         const resultRetIsr =  getRetIsr(calcularPorcentaje);
//         retIsr.innerText = `$${resultRetIsr}`;
    
//         // SUMA DE IMPUESTOS
//         const sumaImpuestos = getImpuestos (resulRetIva, resultRetIsr);
//         sumRetention.innerText = `-$${sumaImpuestos}`;
    
//         const getRendimientoFisicoMonth = getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal );
//         pagoMensual.innerText =`$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
//         resultMonth.innerText = `$${getRendimientoFisicoMonth}`
    
        
//         // rendimiento Anual
//         const getcantidadAnualFisica = rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue);
//         rendimientoBruto.innerText = `$${getcantidadAnualFisica}`;
//         resultYear.innerText = `$${getcantidadAnualFisica}`;
//         circleRendimiento.innerText = `$${getcantidadAnualFisica}`;
    
//         const divisionAnualFis = perYearFis(getcantidadAnualFisica, selectedValue);
//         pagoAnual.innerText = `$${divisionAnualFis.toFixed(2)}`;
    
//         const sumImpuestos = getImpuestos(resulRetIva, resultRetIsr);
//         const totalImpuestos = getTotalImpuestos(sumImpuestos,selectedValue)
        
//         const tabpfisica = document.querySelector('.tabpfisica');
//         const progressBar = document.getElementById('progress-bar');
//         var chart = document.querySelector("#chart");
//         chart.style.display = 'block';
//         tabpfisica.style.display = 'flex';
//         progressBar.style.display = 'none';
    
//         var options = {
//             series: [],
//             chart: {
//                 type: 'donut',
//                 with:300
//             },
//             labels: [],
//             tooltip: {
//                 enabled: true,
//                 y: {
//                     formatter: function (value) {
//                         return `$${value}`; // Agrega el signo de dólar ($) al tooltip
//                     }
//                 }
//             },
//             dataLabels: {
//                 enabled: false 
//             },
//             colors: ['#14DA13', '#d9d9d9','#2b2b2b' ],
//             plotOptions: {
//                 pie: {
//                     donut: {
//                         size: '88%', 
//                         background: 'transparent', 
//                     }
//                 }
//             },
//         };
    
//         var chart = new ApexCharts(document.querySelector("#chart"), options);
//         chart.render();
    
//         function actualizarValores() {
//             const inversion = parseFloat(inversionMount.value);
//             const calcularPorcentaje = rendimientoMensual(inversion);
//             const ivaMensual = ivaCalc(calcularPorcentaje);
//             const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
//             const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
//             const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue);
//             // Fisica
//             const resulRetIva = getRetIva(calcularPorcentaje);
//             const resultRetIsr =  getRetIsr(calcularPorcentaje);
//             const sumaImpuestos = getImpuestos ( resulRetIva, resultRetIsr );
//             const getRendimientoFisicoMonth = getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal );
//             const getcantidadAnualFisica = rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue);
//             const divisionAnualFis = perYearFis(getcantidadAnualFisica, selectedValue);
//             const sumImpuestos = getImpuestos(resulRetIva, resultRetIsr);
//             const totalImpuestos = getTotalImpuestos(sumImpuestos,selectedValue)
    
//             inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
//             inversionRight.textContent = `$${formatNumberWithCommas(inversion)}`;
//             totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
//             retIva.innerText = `$${formatNumberWithCommas(resulRetIva)}`;
//             retIsr.innerText = `$${formatNumberWithCommas(resulRetIva)}`;
//             sumRetention.innerText = `-$${formatNumberWithCommas(sumaImpuestos)}`;
//             pagoMensual.innerText =`$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
//             rendimientoBruto.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
//             pagoAnual.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
//             rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
//             rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`;
//             resultMonth.innerText = `$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
//             resultYear.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
//             circleRendimiento.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
//             circleInversion.textContent = `$${formatNumberWithCommas(inversion)}`;
    
//             // Actualiza los valores de la gráfica
//             const cantidadAnualFisicaValue = parseFloat(getcantidadAnualFisica);
//             const sumaImpuestosValue = parseFloat(totalImpuestos);
//             const inversionValue = parseFloat(inversion);
    
//             const newSeriesData = [cantidadAnualFisicaValue, sumaImpuestosValue, inversionValue];
//             const newLabels = ['Rendimientos', 'Retenciones', 'Inversión'];
    
//             const newOptions = {
//                 series: newSeriesData,
//                 labels: newLabels,
//             };
    
//             chart.updateOptions(newOptions);
            
//         }
//         actualizarValores()


//         inversionMount.addEventListener('keydown', (event) => {
//             if (event.key === 'Enter') {
//                 const inversion = inversionMount.value;
//                 actualizarValores();
        
//                 inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
//                 inversionRight.textContent = `$${formatNumberWithCommas(inversion)}`;
//                 totalMensual.innerText = `$${rendimientoMensualTotal}`;
//                 retIva.innerText = `$${resulRetIva}`;
//                 retIsr.innerText = `$${resultRetIsr}`;
//                 sumRetention.innerText = `-$${formatNumberWithCommas(sumaImpuestos)}`;
//                 pagoMensual.innerText = `$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
//                 rendimientoBruto.innerText = `$${getcantidadAnualFisica}`;
//                 pagoAnual.innerText = `$${divisionAnualFis}`;
//                 rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`;
//                 rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`;
//                 resultMonth.innerText = `$${getRendimientoFisicoMonth}`;
//                 resultYear.innerText = `$${getcantidadAnualFisica}`;
//                 circleRendimiento.innerText = `$${getcantidadAnualFisica}`;
        
//                 // capitalRange.value = 1;
//                 // const inputEvent = new Event('input', { bubbles: true });
//                 // capitalRange.dispatchEvent(inputEvent);
                
//             }
//         });
        
    
//         // inversionMount.addEventListener('input', (event) => {
//         //     const inversion = inversionMount.value;
//         //     actualizarValores()
            
//         //     inversionDe.textContent = `$${parseFloat(inversion).toFixed(2)}`;
//         //     inversionRight.textContent = `$${inversion.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
//         //     totalMensual.innerText = `$${rendimientoMensualTotal}`;
//         //     retIva.innerText = `$${resulRetIva}`;
//         //     retIsr.innerText = `$${resultRetIsr}`;
//         //     sumRetention.innerText = `-$${formatNumberWithCommas(sumaImpuestos)}`;
//         //     pagoMensual.innerText =`$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
//         //     rendimientoBruto.innerText = `$${getcantidadAnualFisica}`;
//         //     pagoAnual.innerText = `$${divisionAnualFis}`;
//         //     rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
//         //     rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`
//         //     resultMonth.innerText = `$${getRendimientoFisicoMonth}`
//         //     resultYear.innerText = `$${getcantidadAnualFisica}`;
//         //     circleRendimiento.innerText = `$${getcantidadAnualFisica}`;
    
//         //     capitalRange.value = 1;
//         //     const inputEvent = new Event('input', { bubbles: true });
//         //     capitalRange.dispatchEvent(inputEvent);
//         // });
        
//         capitalRange.addEventListener('input', (event) => {
//             selectedValue = capitalRange.value;
    
//             pagoAnual.innerText = `$${divisionAnualFis}`;
//             rendimientowIva.innerText = `$${ivaMensual.toFixed(2)}`;
//             resultYear.innerText = `$${getcantidadAnualFisica}`;
//             circleRendimiento.innerText = `$${getcantidadAnualFisica}`;
    
//             actualizarValores()
//         })
//     }
    
    
    
    
//     function handleSelectChange() {
//         const tipoPersona = document.getElementById('selectPersona').value;
//         const inputEvent = new Event('input', { bubbles: true });
        
//         switch (tipoPersona) {
//             case 'fisica':
//                 fisicaOption();
//                 console.log(`persona fisica esta seleccionado`);
//                 capitalRange.value = 1;
//                 capitalRange.dispatchEvent(inputEvent);
//                 break;
    
//             case 'moral':
//                 moralOption();
//                 console.log(`persona moral esta seleccionado`);
//                 capitalRange.value = 1;
//                 capitalRange.dispatchEvent(inputEvent);
//                 break;
    
//             default:
//                 console.log('Tipo de persona no reconocido');
//         }

//         capitalRange.addEventListener('input', ()=>{
//             selectedValue = capitalRange.value;
//         })

        
        
//     }
    
//     // Agregar un event listener al select para detectar cambios
//     document.getElementById('selectPersona').addEventListener('change', handleSelectChange);
    
//     // Llamar al evento change para mostrar la opción seleccionada por defecto al cargar la página
//     document.getElementById('selectPersona').dispatchEvent(new Event('change'));
    
    
//     ///////////////////////////////////////////////////////////////////////////////////////////
//     // Funcion para abrir y cerrar el modal
//     document.addEventListener("DOMContentLoaded", function() {
    
//         clicktoModalPerson.addEventListener("click", () => {
//             modalPerson.classList.add("modal-person-active");
//         });
    
//         containbtnperson.addEventListener("click", (event) => {
//             if (modalPerson.classList.contains("modal-person-active")) {
//                 modalPerson.classList.remove("modal-person-active");
//             } else {
//                 modalPerson.classList.add("modal-person-active");
//             }
//             event.stopPropagation();
//         });
    
//         document.addEventListener("click", (event) => {
//             const clickedInsideModal = modalPerson.contains(event.target);
    
//             if (!clicktoModalPerson.contains(event.target) && !clickedInsideModal) {
//                 modalPerson.classList.remove("modal-person-active");
//             }
//         });
//     });
    
    
//     // Funciones para no escribir letras, espacios en el input
//     inversionMount.addEventListener("keydown", function (event) {
//       if (event.key === "0" && inversionMount.value.length === 0) {
//         event.preventDefault(); // Prevenir la entrada de "0" como primer carácter
//       }
//     });
    
//     inversionMount.addEventListener("input", function () {
//       let inputValue = inversionMount.value;
    
//       // Eliminar cualquier carácter que no sea un número
//       const sanitizedValue = inputValue.replace(/\D/g, "");
    
//       // Actualizar el valor del campo de entrada con el valor sanitizado
//       inversionMount.value = sanitizedValue;
//     });
    
    
//     // funcion de color en el range
//     capitalRange.addEventListener("input", (event) => {
//         const tempSliderValue = event.target.value;
//         sliderValue.textContent = tempSliderValue;
    
//         if(capitalRange.value == 1){
//             anioText.style.display= 'block'
//             aniosText.style.display = 'none';
//         }else{
//             anioText.style.display= 'none'
//             aniosText.style.display = 'block';
//         }
    
//         // Calcular el valor del gradiente de inicio
//         const gradientStart = (tempSliderValue - capitalRange.min) / (capitalRange.max - capitalRange.min) * 100;
    
//         capitalRange.style.background = `linear-gradient(to right, #14DA13 ${gradientStart}%, #2b2b2b ${gradientStart}%, #2b2b2b 100%)`;
//         const thumbPosition = (tempSliderValue - capitalRange.min) / (capitalRange.max - capitalRange.min) * 100;
//         sliderValue.style.left = `${thumbPosition}%`;
//         // anioText.style.left = `${thumbPosition}%`;
//         aniosText.style.left = `${thumbPosition}%`;
    
//         if (tempSliderValue > 1 && tempSliderValue <= 10) {
//             sliderValue.style.left = `${thumbPosition - 9}%`; 
//             aniosText.style.left = `${thumbPosition - 6}%`;
//           } else {
//             sliderValue.style.left = `${thumbPosition}%`;
//             aniosText.style.left = `${thumbPosition}%`;
//           }
    
//     });

//     document.addEventListener('click', function (event) {
//         // Verifica si el clic no se realizó en el campo de entrada
//         if (event.target !== inversionMount) {
//           const enterKeyEvent = new KeyboardEvent('keydown', {
//             key: 'Enter',
//             keyCode: 13, // El código de tecla para 'Enter'
//             which: 13,   // El código 'which' para 'Enter'
//             bubbles: true, 
//           });
      
//           inversionMount.dispatchEvent(enterKeyEvent);
//         }
//       });

//     inversionMount.addEventListener('click', function () {
//         // Borra el contenido del campo de entrada al hacer clic
//         inversionMount.value = '';
//       });

       // Tipo de persona
       const typePerson = document.getElementById('selectPersona')

       // valor de la inversion
       const inversionMount = document.getElementById('inversion-mount')
       const invalidMount = document.querySelector('.inputext')
       const inversionDe = document.getElementById('inversionDe')
       const rendimientoBruto = document.getElementById('rendimientoBruto')
       
       // Const Modal
       const clicktoModalPerson = document.querySelector(".clickto-modal-person");
       const modalPerson = document.querySelector(".modal-person");
       const containbtnperson = document.querySelector(".containbtnperson");
       // Constante del range 
       const capitalRange = document.querySelector("#capital-range");
       const sliderValue = document.querySelector(".value2");
       const anioText = document.querySelector(".anio");
       const aniosText = document.querySelector(".anios");
       
       // PAGOS
       const pagoMensual = document.getElementById('pago-mensual');
       const pagoAnual = document.getElementById('pago-anual');
       
       // CIRCULO
       const circleInversion = document.getElementById('inversion-circulo');
       const circleRendimiento = document.getElementById('rendimientos-circulo');
       
       //CARD DERECHA
       const inversionRight = document.getElementById('inversion-right');
       const rendimientowIva = document.getElementById('rendimientoIVA');
       const rendimientosinIva = document.getElementById('rendimientosinIVA');
       const totalMensual = document.getElementById('totalMensual');
       const resultMonth = document.getElementById('resultmonth');
       const resultYear = document.getElementById('resultyear');
       
       // DATOS PERSONA FISICO
       const retIva = document.getElementById('retencionPorIVA');
       const retIsr = document.getElementById('retencionPorISR');
       const sumRetention = document.getElementById('totalconretenciones')
       const minMount = document.getElementById('modalmin');
    
    inversionMount.addEventListener('input', (event)=>{
        const inversion = inversionMount.value
    
        if(inversion < 10000){
            invalidMount.className = 'redInput'
            minMount.style.display= 'block';
        }else{
            invalidMount.className = 'inputext'
            minMount.style.display= 'none';
        }
    
        inversionDe.textContent = `$${inversionMount.value}`;
        
    });
       
   
       function formatNumberWithCommas(number) {
         return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
     }
       
       // Función para calcular el rendimiento mensual
       function rendimientoMensual(inversion) {
           // Calcular el 2% de la inversión
           const porcentaje = 0.02; // 2%
           const calcularPorcentaje = inversion * porcentaje;
           return calcularPorcentaje;
       }
       
       // Función para calcular el IVA mensual
       function ivaCalc(rendimientoMensual) {
           // Calcular el IVA (16% del rendimiento)
           const iva = 0.16; // 16%
           const ivaMensual = rendimientoMensual * iva;
           return ivaMensual;
       }
       
       // Función para calcular el rendimiento total mensual con IVA
       function rendimientoIva(ivaMensual, calcularPorcentaje) {
           // Sumar el IVA al rendimiento mensual
           const rendimientoMensualTotal = ivaMensual + calcularPorcentaje;
           return rendimientoMensualTotal;
       }
       
       // Función para calcular la cantidad anual
       function rendimientoAnual(rendimientoMensualTotal, selectedValue) {
           // Calcular la cantidad anual
           const calculoAnual = rendimientoMensualTotal * 12;
           const cantidadAnual = selectedValue * calculoAnual;
           return cantidadAnual; // Formatea a dos decimales solo al mostrar
       }
       
       function rendimientoPerYear(cantidadAnual, selectedValue){
           const divisionAnual = cantidadAnual / selectedValue;
           return divisionAnual;
       }
       
       // Funciones para calcular el valor de impuestos persona Fisica
       
       // RETENCION IVA
       function getRetIva(calcularPorcentaje){
           const calcIva = calcularPorcentaje * 0.1066; 
           return resulRetIva = calcIva;
       
       }
       
       // RETENCION DE ISR
       function getRetIsr(calcularPorcentaje){
           const calcIsr = calcularPorcentaje * 0.20;
           return resultRetIsr = calcIsr;
       }
       
       // SUMA DE IMPUESTOS
       function getImpuestos ( resulRetIva, resultRetIsr ){
           const sumImpuestos = resulRetIva + resultRetIsr;
           return sumImpuestos;
       }
       
       // RENDIMIENTO CON ISR E IVA MENSUAL
       function getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal ){
           const sumaImpuestos = resultRetIsr + resulRetIva;
           const restadeImpuestos = rendimientoMensualTotal - sumaImpuestos;
           return getRendimientoFisicoMonth = restadeImpuestos;
       }
       
       
       // RENDIMIENTO CON ISR E IVA MENSUAL
       function rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue){
           const multilicacionAnual = getRendimientoFisicoMonth * 12;
           const getcantidadAnualFisica = selectedValue * multilicacionAnual;
           return getcantidadAnualFisica;
       }
       
       // RENDIMIENTO POR AÑO OPT FISICA
       function perYearFis(getcantidadAnualFisica, selectedValue){
           const divisionAnualFis =  getcantidadAnualFisica / selectedValue;
           return divisionAnualFis;
       }
       
       function getTotalImpuestos(sumImpuestos,selectedValue){
           const impuestoAnual = sumImpuestos * 12;
           const totalImpuestos = impuestoAnual * selectedValue;
           return totalImpuestos;
       }
       
       
       function moralOption() {
           // Valor de la inversión inicial
           let inversion = parseFloat(10000);
           
           // Valor del plazo (puedes cambiarlo por selectedValue si lo deseas)
           let selectedValue = 1;
           
           // Asignar el valor a inversionMount
           inversionMount.value = inversion;
   
           // funcion de comas y decimales
           function formatNumberWithCommas(number) {
             return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
           }
           
           // Valor de la inversión
           inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
           circleInversion.innerText= `$${formatNumberWithCommas(inversion)}`
           
           // Calcular el rendimiento mensual
           const calcularPorcentaje = rendimientoMensual(inversion);
           rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`
           // rendimientoBruto.innerText = `$${calcularPorcentaje.toFixed(2)}`;
           
           // Calcular el IVA mensual
           const ivaMensual = ivaCalc(calcularPorcentaje);
           rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
           
           // Mostrar el resultado del IVA mensual
           console.log(`IVA Mensual: $${formatNumberWithCommas(ivaMensual)}`);
           
           // Calcular el rendimiento mensual total con IVA
           const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
           
           // Mostrar el resultado del rendimiento mensual total con IVA
           pagoMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
           totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
           resultMonth.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
           
           // Calcular el valor anual de la inversión
           const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
           rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
           
           // Mostrar el resultado del valor anual de la inversión
           const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue)
           pagoAnual.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
           resultYear.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
       
           circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
       
           const tabpfisica = document.querySelector('.tabpfisica');
           tabpfisica.style.display = 'none';
           const progressBar = document.getElementById('progress-bar');
           // progressBar.style.display = 'block'
           var chart = document.querySelector("#chart");
           // chart.style.display = 'none';
       
           var options = {
               series: [],
               chart: {
                   type: 'donut',
                   with:300
               },
               labels: [],
               tooltip: {
                   enabled: true,
                   y: {
                       formatter: function (value) {
                           return `$${formatNumberWithCommas(value)}`; // Agrega el signo de dólar ($) al tooltip
                       }
                   }
               },
               dataLabels: {
                   enabled: false 
               },
               colors: ['#14DA13','#2b2b2b' ],
               plotOptions: {
                   pie: {
                       donut: {
                           size: '88%', 
                           background: 'transparent', 
                       }
                   }
               },
           };
       
           var chart = new ApexCharts(document.querySelector("#chart"), options);
           chart.render();
           
           // Función para actualizar los valores
           function actualizarValores() {
               const inversion = parseFloat(inversionMount.value);
               const calcularPorcentaje = rendimientoMensual(inversion);
               const ivaMensual = ivaCalc(calcularPorcentaje);
               const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
               const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
               const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue)
               
               // Actualiza los valores en el círculo y la barra de progreso
               inversionRight.innerText = `$${formatNumberWithCommas(inversion)}`;
               circleInversion.innerText = `$${formatNumberWithCommas(inversion)}`;
               pagoMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
               rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
               circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
               pagoAnual.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
               resultYear.innerText = `$${formatNumberWithCommas(divisionAnual)}`;
               rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
               rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`
               totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
               resultMonth.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
               
       
               const cantidadAnualMoral = parseFloat(cantidadAnual);
               const inversionValue = parseFloat(inversion);
       
               const newSeriesData = [cantidadAnualMoral, inversionValue];
               const newLabels = ['Rendimientos', 'Inversión'];
       
               const newOptions = {
                   series: newSeriesData,
                   labels: newLabels,
               };
       
               chart.updateOptions(newOptions);
           }
           actualizarValores();
       
           // Agregar eventos a los elementos (inversionMount y capitalRange)
           inversionMount.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            
                
                const inversion = inversionMount.value;
                
               capitalRange.value = 1;
               const inputEvent = new Event('input', { bubbles: true });
               capitalRange.dispatchEvent(inputEvent);
             actualizarValores();

            }
            
        });
        //    const calcularPorcentaje = rendimientoMensual(inversion);
        //    rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
        //    const ivaMensual = ivaCalc(calcularPorcentaje);
        //    console.log(`IVA Mensual: $${formatNumberWithCommas(ivaMensual)}`);
        //    const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
        //    pagoMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
        //    circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
        //    circleInversion.innerText= `$${formatNumberWithCommas(inversion)}`
           
           
           capitalRange.addEventListener('input', (event) => {
               // Actualiza selectedValue con el nuevo valor del rango
           selectedValue = capitalRange.value;
       
           // Calcula la cantidad anual con el nuevo valor de selectedValue
           const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
           console.log(cantidadAnual);
           
           // Actualiza el elemento de la interfaz de usuario que muestra la cantidad anual
           rendimientoBruto.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
           circleRendimiento.innerText = `$${formatNumberWithCommas(cantidadAnual)}`;
       
         actualizarValores();
           });
       
       }
       
       function fisicaOption(){
       
           // Valor de la inversión inicial
           let inversion = parseFloat(10000);
           
           // Valor del plazo (puedes cambiarlo por selectedValue si lo deseas)
           let selectedValue = 1;
           
           // Asignar el valor a inversionMount
           inversionMount.value = inversion;
       
           // funcion de comas y decimales
           function formatNumberWithCommas(number) {
             return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
           }
   
           // Valor de la inversión
           inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
           inversionRight.textContent = `$${formatNumberWithCommas(inversion)}`;
           
           // Calcular el rendimiento mensual
           const calcularPorcentaje = rendimientoMensual(inversion);
           rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`;
           
           // calculo iva de rendimiento 
           const ivaMensual = ivaCalc(calcularPorcentaje);
           rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`;
       
           // RENDIMIENTO + IVA
           const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
           totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
       
           // RETENCION IVA
           const resulRetIva = getRetIva(calcularPorcentaje);
           retIva.innerText = `$${formatNumberWithCommas(resulRetIva)}`;
       
           // RETENCION ISR
           const resultRetIsr =  getRetIsr(calcularPorcentaje);
           retIsr.innerText = `$${formatNumberWithCommas(resultRetIsr)}`;
       
           // SUMA DE IMPUESTOS
           const sumaImpuestos = getImpuestos (resulRetIva, resultRetIsr);
           sumRetention.innerText = `-$${formatNumberWithCommas(sumaImpuestos)}`;
       
           const getRendimientoFisicoMonth = getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal );
           pagoMensual.innerText =`$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
           resultMonth.innerText = `$${formatNumberWithCommas(getRendimientoFisicoMonth)}`
       
           
           // rendimiento Anual
           const getcantidadAnualFisica = rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue);
           rendimientoBruto.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
           resultYear.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
           circleRendimiento.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
       
           const divisionAnualFis = perYearFis(getcantidadAnualFisica, selectedValue);
           pagoAnual.innerText = `$${formatNumberWithCommas(divisionAnualFis)}`;
       
           const sumImpuestos = getImpuestos(resulRetIva, resultRetIsr);
           const totalImpuestos = getTotalImpuestos(sumImpuestos,selectedValue)
           
           const tabpfisica = document.querySelector('.tabpfisica');
           const progressBar = document.getElementById('progress-bar');
           var chart = document.querySelector("#chart");
           chart.style.display = 'block';
           tabpfisica.style.display = 'flex';
           progressBar.style.display = 'none';
       
           var options = {
               series: [],
               chart: {
                   type: 'donut',
                   with:300
               },
               labels: [],
               tooltip: {
                   enabled: true,
                   y: {
                       formatter: function (value) {
                           return `$${formatNumberWithCommas(value)}`; // Agrega el signo de dólar ($) al tooltip
                       }
                   }
               },
               dataLabels: {
                   enabled: false 
               },
               colors: ['#14DA13', '#d9d9d9','#2b2b2b' ],
               plotOptions: {
                   pie: {
                       donut: {
                           size: '88%', 
                           background: 'transparent', 
                       }
                   }
               },
           };
       
           var chart = new ApexCharts(document.querySelector("#chart"), options);
           chart.render();
       
           function actualizarValores() {
               const inversion = parseFloat(inversionMount.value);
               const calcularPorcentaje = rendimientoMensual(inversion);
               const ivaMensual = ivaCalc(calcularPorcentaje);
               const rendimientoMensualTotal = rendimientoIva(ivaMensual, calcularPorcentaje);
               const cantidadAnual = rendimientoAnual(rendimientoMensualTotal, selectedValue);
               const divisionAnual = rendimientoPerYear(cantidadAnual, selectedValue);
               // Fisica
               const resulRetIva = getRetIva(calcularPorcentaje);
               const resultRetIsr =  getRetIsr(calcularPorcentaje);
               const sumaImpuestos = getImpuestos ( resulRetIva, resultRetIsr );
               const getRendimientoFisicoMonth = getRendimientoIvaIsr(resultRetIsr, resulRetIva, rendimientoMensualTotal );
               const getcantidadAnualFisica = rendimientoAnualFisico(getRendimientoFisicoMonth, selectedValue);
               const divisionAnualFis = perYearFis(getcantidadAnualFisica, selectedValue);
               const sumImpuestos = getImpuestos(resulRetIva, resultRetIsr);
               const totalImpuestos = getTotalImpuestos(sumImpuestos,selectedValue)
       
               inversionDe.textContent = `$${formatNumberWithCommas(inversion)}`;
               inversionRight.textContent = `$${formatNumberWithCommas(inversion)}`;
               totalMensual.innerText = `$${formatNumberWithCommas(rendimientoMensualTotal)}`;
               retIva.innerText = `$${formatNumberWithCommas(resulRetIva)}`;
               retIsr.innerText = `$${formatNumberWithCommas(resultRetIsr)}`;
               sumRetention.innerText = `-$${formatNumberWithCommas(sumaImpuestos)}`;
               pagoMensual.innerText =`$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
               rendimientoBruto.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
               pagoAnual.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
               rendimientowIva.innerText = `$${formatNumberWithCommas(ivaMensual)}`
               rendimientosinIva.innerText = `$${formatNumberWithCommas(calcularPorcentaje)}`;
               resultMonth.innerText = `$${formatNumberWithCommas(getRendimientoFisicoMonth)}`;
               resultYear.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
               circleRendimiento.innerText = `$${formatNumberWithCommas(getcantidadAnualFisica)}`;
               circleInversion.textContent = `$${formatNumberWithCommas(inversion)}`;
       
               // Actualiza los valores de la gráfica
               const cantidadAnualFisicaValue = parseFloat(getcantidadAnualFisica);
               const sumaImpuestosValue = parseFloat(totalImpuestos);
               const inversionValue = parseFloat(inversion);
       
               const newSeriesData = [cantidadAnualFisicaValue, sumaImpuestosValue, inversionValue];
               const newLabels = ['Rendimientos', 'Retenciones', 'Inversión'];
       
               const newOptions = {
                   series: newSeriesData,
                   labels: newLabels,
               };
       
               chart.updateOptions(newOptions);
               
           }
           actualizarValores()
           
       
           inversionMount.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                // const inputValue = inversionMount.value;
    
               const inversion = inversionMount.value;
                capitalRange.value = 1;
               const inputEvent = new Event('input', { bubbles: true });
               capitalRange.dispatchEvent(inputEvent);
            //    actualizarValores()
            }
        })
           
           capitalRange.addEventListener('input', (event) => {
               selectedValue = capitalRange.value;
       
               pagoAnual.innerText = `$${divisionAnualFis}`;
               rendimientowIva.innerText = `$${ivaMensual.toFixed(2)}`;
               resultYear.innerText = `$${getcantidadAnualFisica}`;
               circleRendimiento.innerText = `$${getcantidadAnualFisica}`;
       
               actualizarValores()
           })
       }
       
       
       
       
       function handleSelectChange() {
           const tipoPersona = document.getElementById('selectPersona').value;
           const inputEvent = new Event('input', { bubbles: true });
           
           switch (tipoPersona) {
               case 'fisica':
                   fisicaOption();
                   console.log(`persona fisica esta seleccionado`);
                   capitalRange.value = 1;
                   capitalRange.dispatchEvent(inputEvent);
                   break;
       
               case 'moral':
                   moralOption();
                   console.log(`persona moral esta seleccionado`);
                   capitalRange.value = 1;
                   capitalRange.dispatchEvent(inputEvent);
                   break;
       
               default:
                   console.log('Tipo de persona no reconocido');
           }
   
           capitalRange.addEventListener('input', ()=>{
               selectedValue = capitalRange.value;
           })
           
       }
       
       // Agregar un event listener al select para detectar cambios
       document.getElementById('selectPersona').addEventListener('change', handleSelectChange);
       
       // Llamar al evento change para mostrar la opción seleccionada por defecto al cargar la página
       document.getElementById('selectPersona').dispatchEvent(new Event('change'));
       
       
       ///////////////////////////////////////////////////////////////////////////////////////////
       // Funcion para abrir y cerrar el modal
       document.addEventListener("DOMContentLoaded", function() {
       
           clicktoModalPerson.addEventListener("click", () => {
               modalPerson.classList.add("modal-person-active");
           });
       
           containbtnperson.addEventListener("click", (event) => {
               if (modalPerson.classList.contains("modal-person-active")) {
                   modalPerson.classList.remove("modal-person-active");
               } else {
                   modalPerson.classList.add("modal-person-active");
               }
               event.stopPropagation();
           });
       
           document.addEventListener("click", (event) => {
               const clickedInsideModal = modalPerson.contains(event.target);
       
               if (!clicktoModalPerson.contains(event.target) && !clickedInsideModal) {
                   modalPerson.classList.remove("modal-person-active");
               }
           });
       });
       
       
       // Funciones para no escribir letras, espacios en el input
       inversionMount.addEventListener("keydown", function (event) {
         if (event.key === "0" && inversionMount.value.length === 0) {
           event.preventDefault(); // Prevenir la entrada de "0" como primer carácter
         }
       });
       
       inversionMount.addEventListener("input", function () {
         let inputValue = inversionMount.value;
       
         // Eliminar cualquier carácter que no sea un número
         const sanitizedValue = inputValue.replace(/\D/g, "");
       
         // Actualizar el valor del campo de entrada con el valor sanitizado
         inversionMount.value = sanitizedValue;
       });
       
       
       // funcion de color en el range
       capitalRange.addEventListener("input", (event) => {
           const tempSliderValue = event.target.value;
           sliderValue.textContent = tempSliderValue;
       
           if(capitalRange.value == 1){
               anioText.style.display= 'block'
               aniosText.style.display = 'none';
           }else{
               anioText.style.display= 'none'
               aniosText.style.display = 'block';
           }
       
           // Calcular el valor del gradiente de inicio
           const gradientStart = (tempSliderValue - capitalRange.min) / (capitalRange.max - capitalRange.min) * 100;
       
           capitalRange.style.background = `linear-gradient(to right, #14DA13 ${gradientStart}%, #2b2b2b ${gradientStart}%, #2b2b2b 100%)`;
           const thumbPosition = (tempSliderValue - capitalRange.min) / (capitalRange.max - capitalRange.min) * 100;
           sliderValue.style.left = `${thumbPosition}%`;
           // anioText.style.left = `${thumbPosition}%`;
           aniosText.style.left = `${thumbPosition}%`;
       
           if (tempSliderValue > 1 && tempSliderValue <= 10) {
               sliderValue.style.left = `${thumbPosition - 9}%`; 
               aniosText.style.left = `${thumbPosition - 6}%`;
             } else {
               sliderValue.style.left = `${thumbPosition}%`;
               aniosText.style.left = `${thumbPosition}%`;
             }
       
       });

       inversionMount.addEventListener("click", function() {
        // Borra el valor actual del campo
        inversionMount.value = "";
    });
    
    inversionMount.addEventListener("blur", function() {
      // Simula el evento "Enter" al desencadenar una pulsación de tecla
      const enterKeyEvent = new KeyboardEvent("keydown", { key: "Enter" });
      inversionMount.dispatchEvent(enterKeyEvent);
    });