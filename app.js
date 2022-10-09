// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yenes
    let valueInYen = valueInDollar * 145.34; // 1 dólar son 145.34 Yen al 09/10/2022
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a Pound
    let valueInPound = valueInYen * 0.0062; // 1 Yen es equivalente a 0.0062 Pound sterling al 09/10/2022
    // retornamos el valor
    return valueInPound;
}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }
