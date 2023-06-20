
// Número Palíndromo:

function next_pal(number){
    function verifPal(num) {
        return num.toString() === num.toString().split("").reverse().join("");
    }

    let proxNum = number + 1;
    while (!verifPal(proxNum)){
        proxNum++;
    }
    return proxNum;
}

ingNum = 34;
sigPal = next_pal(ingNum);

console.log(`El número palíndromo después de ${ingNum} es: ${sigPal}`);
