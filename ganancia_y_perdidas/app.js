//Ingresos
var income = prompt("¿Cuánto es el ingreso?");
//costos
var costs = prompt("¿Cuánto es el costo?");
//Porcentaje de impuestos
var taxPercent = prompt("¿Cuánto es el porcentaje (%) de impuestos?");
//Ganancia bruta
var grossProfit = income - costs;
//Obteniendo cantidad de impuestos
var tax = grossProfit * taxPercent / 100;
//ganancia neta
var netIncome = grossProfit - tax;
//mostrando ganancia neta
document.write("Tu ganancia neta es $" + netIncome);
