let botonP = document.getElementById("palindroms")
botonP.addEventListener("click", () => {
    const arrayParams = [];
    
    let param1 = prompt("Ingresar el primer input");
    let param2 = prompt("Ingresar el segundo input");
    let param3 = prompt("Ingresar el tercer input");
    let param4 = prompt("Ingresar el cuarto input");
    arrayParams.push(param1, param2, param3, param4)
    arrayParams.forEach((param) => {
        if(isNaN(param)){
            console.log(`${param} no es un número`)
        } else {
            console.log(`${param} es un número!`);
            param = param.toString()
            let paramRev = param.split("").reverse().join("");
            (paramRev === param) 
            ? console.log(`${param} es palíndromo`) 
            : console.log(`${param} no es palíndromo`)
        }
    })

})
