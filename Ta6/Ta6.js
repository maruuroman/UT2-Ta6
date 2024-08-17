function convertToCelsius(temp){
    let resultado = (temp * (9/5))+32;
    resultado = Math.round(resultado*10)/10;
    return resultado;
} 

function convertToFahrenheit(temp){
    let resultado = (temp-32)*5/9 ;
    resultado = Math.round(resultado*10)/10;
    return resultado;
} 

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100)); 