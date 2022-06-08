"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
const somarNumeros = (n1, n2, devPrintar) => {
    const result = n1 + n2;
    if (devPrintar)
        console.log(result);
    return result;
};
if (button)
    button.addEventListener('click', () => {
        if (input1 && input2)
            somarNumeros(Number(input1.value), Number(input2.value), true);
    });
