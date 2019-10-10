var nome = "João da Silva";
var nota1 = 7;
var nota2 = 8.5;

alert(nome);
alert(nota1);
alert(nota2);

function media(nota1, nota2) {
    notafinal = (nota1 * 0.6) + (nota2 * 0.4);
    return (notafinal);
}

alert(media(nota1, nota2));