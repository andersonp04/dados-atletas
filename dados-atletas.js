class Atleta {
constructor(nome, idade, peso, altura, notas){
    this.nome=nome;
    this.idade=idade;
    this.peso=peso;
    this.altura=altura;
    this.notas=notas;
}
// calcula a actegoria do atleta
     calculaCategoria() {
        let categoria = this.idade

         if (categoria >= 9 && categoria <= 11) {
            categoria = "infantil";
         }

         else if (categoria >= 12 && categoria <= 13) {
             categoria = "juvenil";
        }

        else if (categoria >= 14 && categoria <= 15) {
            categoria = "intermediário";
         }

         else if (categoria >= 16 && categoria <= 30){
             categoria = "adulto";
         }

         else {
             categoria = "sem categoria";
       }
    
       console.log(categoria)
      return categoria
    }
//calcula o IMC
     calculaIMC() {
     const imc = this.peso / (this.altura * this.altura)
     console.log(imc)
     }

     
//Calcular a media válida
     calculaMediaValida(){
        let soma = 0
    this.notas.forEach(function(nota){
       soma = soma + nota
       //console.log(nota)
     })
     console.log(soma / this.notas.length)
     return soma / this.notas.length
     
 }
// Obeter o Nome do Atleta
    obtemNomeAtleta(){
   let nomeAtleta= this.nome
   console.log(nomeAtleta)
    return nomeAtleta
}
// obeter idade do Atleta
obtemIdadeAtleta(){
    const idade=this.idade
    console.log(idade)
}
// obeter peso do atleta
obtemPesoAtleta(){
let peso=this.peso
console.log(peso)
}
// obter notas
obtemNotasAtleta(){
    let notas=this.notas
    console.log(notas)
}
//obter categorias
obtemCategoria(){
let obeterCategoria=this.calculaCategoria()
}
// obter IMC
obtemIMC(){
    let obeterIMC=this.calculaIMC()
}
// Obter Media Valida
 obtemMediaValida(){
    let obeterMediaValida=this.calculaMediaValida()
 }


}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

// atleta.calculaCategoria()
// atleta.calculaIMC()
// atleta.calculaMediaValida()
atleta.obtemNomeAtleta()
atleta.obtemIdadeAtleta()
atleta.obtemPesoAtleta()
atleta.obtemNotasAtleta()
atleta.obtemCategoria()
atleta.obtemIMC()
atleta.obtemMediaValida()
//console.log(atleta)