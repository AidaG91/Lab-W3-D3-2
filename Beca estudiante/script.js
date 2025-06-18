let edad = 35;
let ciudad = "Barcelona";
let famNum = true;
let genio = true;

if (
  (edad >= 18 && ciudad == "Barcelona") ||
  (edad > 30 && famNum == true) ||
  (edad > 12 && edad < 18 && genio == true)
) {
  console.log("Tiene beca.");
} else {
  console.log("No tiene beca.");
}
