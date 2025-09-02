class Atleta {
constructor(nome, idade, peso, altura, notas){
    this.nome=nome;
    this.idade=idade;
    this.peso=peso;
    this.altura=altura;
    this.notas=notas;
}
// calcula a actegoria do atleta
    // calculaCategoria() {

    //     if (this.idade >= 9 || this.idade <= 11) {
    //         return "infantil";
    //     }

    //     if (this.idade >= 12 || this.idade <= 13) {
    //         return "juvenil";
    //     }

    //     if (this.idade >= 14 || this.idade <= 15) {
    //         return "intermediário";
    //     }

    //     if (this.idade >= 15 || this.idade <= 16) {
    //         return "adulto";
    //     }

    //     else {
    //         return "sem categoria";
    //     }

    // }
//calcula o IMC
    // calculaIMC(IMC) {
    // IMC.reduce(function(altura){
    //      return altura * altura;
    //     },this.peso);
    //     console.log(IMC)
    // }
//Calcular a media válida
//     calculaMediaValida(){

//         this.notas.forEach(function(nota){
//   this.notas = this.notas / this.notas.length
//     })
// }
// Obeter o Nome do Atleta
    obtemNomeAtleta(){
    this.nome.forEach(function() => {
        
    });
}


}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
