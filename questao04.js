class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome
        this.segundoNome = segundoNome
        this.primeiraNota = primeiraNota
        this.segundaNota = segundaNota
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return ((this.primeiraNota * 0.6) + (this.segundaNota * 0, 4))
    }

    situacao() {
        if (this.media() > 6) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }
}

var aluno1 = new Aluno("John", "D.", 7, 8);
var aluno2 = new Aluno("Henrique", "Silva", 6, 6);
var aluno3 = new Aluno("Luana", "Goncalve", 9, 10);
var aluno4 = new Aluno("Nilo", "Romero", 5, 8);
var aluno5 = new Aluno("Luiz", "Fernando", 6, 8);

var lista = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (var i = 0; i < lista.length; i++) {
    alert(lista[i].nomeCompleto() + "\n" +
        lista[i].media() + "\n" + lista[i].situacao());

}