const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante) //precisa passar para string e depois para object

const ObjEstudante = JSON.parse(stringEstudante)

console.log(typeof ObjEstudante)
console.log(ObjEstudante)

//utilizar hasOwnProperty para verificar se um elemento está ou não no array, posso utilizar um filter para retornar um array apenas com os estudantes que não contém cep, ou apenas os estudantes com contém dados dos responsáveis

//exemplo:
//lembrando que o filter vai retornar um array 

function acharEstudantesSemAlgumaCoisa (lista, chave) {
      return lista.filter((estudante) => {
            return !estudante.hasOwnProperty(chave)
      })
}

//trabalhando com sort
//exemplo onde queremos ordenar alguma propridade da lista

function ordena(lista, propriedade) {
      return lista.sort((a, b) => {
            if (a[propriedade] < b[propriedade]) return -1
            if (a[propriedade] > b[propriedade]) return 1
            return 0
      })
 }

 // ordenar de maneira decrescente:

 function ordenar(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        }
        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        }

        if (valorA < valorB) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1;
        }
        return 0;
    });
}

// Exemplo de uso para ordenar de forma decrescente pelo nome
const ordenadoNomeDecrescente = ordenar(clientes, "nome", true);

//outra forma não literal de criar objetos

const novosEstudantes = new Object()

novosEstudantes.nome = 'Murilo'
novosEstudantes.idade = 22

console.log(novosEstudantes) //vai imprimir o objetos com essas duas propriedades 

novosEstudantes.getDataNascimento = function(){
      const dataAtual = new Date()
      return dataAtual.getFullYear - this.idade
}

