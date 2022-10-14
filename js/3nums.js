let boton = document.getElementById("btnH1");

//compare function para el sort
const compareFn = (a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
};

boton.addEventListener("click", () => {
  const arrayNums = [];
  alert(
    "A continuacion, deberás ingresar 3 números, y la consola te los deberá devolver ordenados."
  );
  let num1 = parseInt(prompt("Ingresar el primer número"));
  let num2 = parseInt(prompt("Ingresar el segundo número"));
  let num3 = parseInt(prompt("Ingresar el tercer número"));
  //Se acomodan de mayor a menor mediante un sort al array
  arrayNums.push(num1, num2, num3);
  console.log(arrayNums.sort(compareFn));
});