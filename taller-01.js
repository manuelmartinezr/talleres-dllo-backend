function convertidorTemp(c){
    return c * (9/5) + 32
}
function resolvedor(a, b, c, negativo){
    if (negativo){
        return (-b - Math.sqrt(b**2 - 4 * a * c))/(2*a)
    }
    return (-b + Math.sqrt(b**2 - 4 * a * c))/(2*a)
}
function mejorParidad(num){
    if (num % 2 === 0){
        return true
    } 
    return false
}
function peorParidad(num){
    if (num === 1){
        return false
    } else if (num === 2){
        return true
    } else if (num === 3){
        return false
    } else if (num === 4){
        return true
    } else if (num === 5){
        return false
    } else if (num === 6){
        return true
    } else if (num === 7){
        return false
    } else if (num === 8){
        return true
    } else if (num === 9){
        return false
    } else if (num === 10){
        return true
    } 
    return
}