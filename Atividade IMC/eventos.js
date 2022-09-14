let peso = 84 ;
let altura = 1.74 ;
let imc = peso/(altura*altura)

if (imc >= 19 && imc < 25) console.log("Peso ideal.");
else if (imc >= 25 && imc < 30) console.log("Sobrepeso.");
else if (imc >= 30 && imc < 35) console.log("Obesidade grau I.");
else if (imc >= 35 && imc <= 40) console.log("Obesidade grau II.");
else if (imc >= 40) console.log("Obesidade grau III.");
