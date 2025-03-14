function desglosarString(str, tipo){
    const opciones = {
        vocales: 'aeiouAEIOU'.split(''),
        consonantes: 'qwrtypsdfghjklñzxcvbnmQWRTYPSDFGHJKLÑZXCVBNM'.split('')
    }
    const str_desglosado = [...str].filter(char => opciones[tipo]?.includes(char))
    return str_desglosado.length
}
function twoSum(nums, sum) {
    for (let i = 0; i<nums.length; i++){
        for(let j = i + 1; j<nums.length; j++){
            if (nums[i] + nums[j] === sum) return [i, j]
        }
    }
    return []
}
function conversionRomana(str_num_romano){
    const romano_arabigo = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    return [...str_num_romano].reduce((num, char, i, char_arr) => {
        const valor = romano_arabigo[char]
        const sig_valor = romano_arabigo[char_arr[i + 1]] ?? 0;
        return num + (valor < sig_valor? -valor : valor)
    }, 0)
}