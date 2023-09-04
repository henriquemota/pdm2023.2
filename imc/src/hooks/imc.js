function useIMC() {

  function calcularIMC(peso, altura) {

    // Menor que 18.5 - Abaixo do peso ;
    // Entre 18.5 e 24.9 - Peso normal ;
    // Entre 25.0 e 29.9 - Pré-obesidade ;
    // Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    // Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    // Acima de 40 - Obesidade Grau 3
    const imc = Number(peso) / (Number(altura) * Number(altura))

    if (imc < 18.5) return 'Abaixo do peso'
    else if (imc >= 18.5 && imc < 24.9) return 'Peso normal'
    else if (imc >= 24.9 && imc < 29.9) return 'Pré-obseidade'
    else if (imc >= 29.9 && imc < 34.9) return 'Obesidade grau I'
    else if (imc >= 34.9 && imc < 39.9) return 'Obesidade grau II'
    else return 'Obesidade grau III'
    // return imc.toFixed(2)
  }

  return {
    calcularIMC,
  }
}

export default useIMC