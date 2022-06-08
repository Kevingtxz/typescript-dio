let button = document.getElementById('button') as HTMLButtonElement
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

const somarNumeros = (n1: number, n2: number, devPrintar: boolean) => {
  const result = n1 + n2
  if (devPrintar)
    console.log(result)
  return result
}

if (button)
  button.addEventListener('click', () => {
    if (input1 && input2)
      somarNumeros(Number(input1.value), Number(input2.value), true)
  })