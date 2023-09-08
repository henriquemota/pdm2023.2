const useIMC = () => {

  function calcularIMC(peso, altura) {
    const imc = Number(peso) / (Number(altura) * Number(altura))
    if (imc < 18.5) return "Abaixo do peso"
    else if (imc >= 18.5 && imc < 24.9) return "Peso ideal"
    else if (imc >= 24.9 && imc < 29.9) return "Acima do peso"
    else if (imc >= 29.9 && imc < 34.9) return "Obseidade grau I"
    else if (imc >= 34.9 && imc < 39.9) return "Obseidade grau II (severa)"
    else return "Obseidade grau II (morbida)"
  }

  return {
    calcularIMC,
  }
}

export default useIMC
export { useIMC }
