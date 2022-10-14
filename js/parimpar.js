//creo dos array distintos para hacer la comparación
const arrPares = [];
const arrImpares = [];

let botonPares = document.getElementById("parimpar");
botonPares.addEventListener("click", () => {
    let n = prompt('Cuántos números desea ingresar?');
    
    for (let i = 0; i < n; i++){
        let num = parseInt(prompt('Ingrese un número'));
        //si el resto de n/2 = 0, se pushea al array "Pares"
        (num % 2 == 0) ? arrPares.push(num) : arrImpares.push(num);
    }

    console.log(arrPares)
    //Se acumulan los valores en una variable de suma y utilizo un foreach para ahorrar lineas de codigo
    let sumaPar = 0;
    arrPares.forEach((el) => {
        sumaPar = sumaPar + el;
        console.log(sumaPar)
        return sumaPar
    })

    console.log(arrImpares)
    let sumaImpar = 0;
    arrImpares.forEach((el) => {
        sumaImpar = sumaImpar + el;
        console.log(sumaImpar)
        return sumaImpar
    })

    if (sumaPar > sumaImpar) {
        console.log(`La suma de pares es mayor, dando ${sumaPar}`)
    } else if (sumaPar < sumaImpar) {
        console.log(`La suma de impares es mayor, dando ${sumaImpar}`)
    } else {
        console.log('Las sumas de ambos arrays dan el mismo resultado')
    }

    

})