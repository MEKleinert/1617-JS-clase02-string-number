const texto = "este es un texto de prueba, sarasa sarasa";
const num = 145;

console.log(texto.length);  //tiene 41 caracteres de largo, pero se empieza a contar desde 0. Por lo tanto, la "a" es el caracter numero 40, no 41
console.log(texto.charAt(40));
console.log(texto[6]);      //es lo mismo que usar charAt. Corchete sin punto
console.log(texto[6].toUpperCase());      //es lo mismo que usar charAt. Corchete sin punto

console.log(texto);
//esto no va a andar:
console.log(num.length);