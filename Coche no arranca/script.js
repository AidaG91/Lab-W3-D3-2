let viveCerca = false;
let ganasCaminar = false;
let gasolina = false;
let dinero = false;
let bateria = false;

if (viveCerca && ganasCaminar) {
  console.log("Lo arreglaré mañana.");
} else if (gasolina == false && dinero == true) {
  console.log("Pon gasolina.");
} else if (gasolina == false && dinero == false) {
  console.log("Coge el metro.");
} else if (gasolina == true && bateria == false) {
  console.log("Recarga la batería");
} else if (gasolina == true && bateria == true) {
  console.log("Llama al mecánico");
}
