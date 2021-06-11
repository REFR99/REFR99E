"use strict"; 
var forma = document.getElementById("forma"),
    Entrada = ["potencia"],
    Salida = ["salidaPotencia"];
forma.addEventListener("submit", Generar, false);
function Generar(){
  var potencia = forma["potencia"].value;   
  var salida = forma["salidaPotencia"];
  for (var i = 0; i <= 10; i++) {
    salida.value = "\n";
    potencia += i;
salida.value = potencia;
  }
}
