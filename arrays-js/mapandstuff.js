const pessoas = [
      {nome: "Murilo", idade: 22, trabalho: "desenvolvedor"},
      {nome: "Carlinhos", idade: 32, trabalho: "jardineiro"},
      {nome: "Thainá", idade: 22, trabalho: "professora"}
]

//adicionando com return
let passouTempo = pessoas.map((pessoa) => {
      if (pessoa.idade >= 10){
            return pessoa.idade + 10
      } else{
            console.log ("o tempo não passou ainda")
      }
})

//simplificação sem o return e as chaves
let passouMaisTempo = pessoas.map ((pessoa) => pessoa.idade >= 10 ? pessoa.idade + 20 : console.log("o tempo não passou ainda"))

console.log(passouTempo)
console.log(passouMaisTempo)

//estudando sobre filter

const alunos = ["joaozinho", "pedrinho","robertinha"]

const professores = ["prof thaina", "prof carlos", "prof valdomiro"]

let consultaDeProfessor = alunos.filter((_, i) => {
      return console.log(`O professor de ${alunos[i]} é ${professores[i]}.`)
})

console.log(consultaDeProfessor)
//também poderia fazer para notas e adicionar mais arrays.