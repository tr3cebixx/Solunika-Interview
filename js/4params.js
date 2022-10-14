let botonP = document.getElementById("palindroms");
const arrayParams = [];
const numberArr = []
//otra compare function, pero de menor a mayor
const compareFunction = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

botonP.addEventListener("click", () => {
  let param1 = prompt("Ingresar el primer input");
  let param2 = prompt("Ingresar el segundo input");
  let param3 = prompt("Ingresar el tercer input");
  let param4 = prompt("Ingresar el cuarto input");
  arrayParams.push(param1, param2, param3, param4);
  //determina si el elemento del array es NaN o no
  arrayParams.forEach((param) => {
    if (isNaN(param)) {
      console.log(`${param} no es un número`);
    } else {
      console.log(`${param} es un número!`);
      //luego lo revierto para compararlo al derecho y al reves
      let paramRev = param.split("").reverse().join("");
      (paramRev === param) ? console.log(`${param} es palíndromo`) : console.log(`${param} no es palíndromo`);
      //paso los numeros a un nuevo array y los transformo a Integers para que no molesten los NaN
      return numberArr.push(parseInt(param))
    }
  });
  numberArr.sort(compareFunction);
  console.log(numberArr);
});
