const alunos = ['murilo', 'ana', 'joão', 'carlos', 'pedro', 'vinicius','andre','antonio','julia', 'lucas']

console.log(alunos)

alunos.push('zeca')
console.log(alunos)

alunos.pop()
console.log(alunos)

const metadeturma = alunos.slice(0, (alunos.length/2))
console.log(metadeturma)
const outrametadeturma = alunos.slice(alunos.length/2)
console.log(outrametadeturma)

const alunoInfo = [
      {
            nome: 'Murilo', 
            idade: 22, 
            dataDeNascimento: '29/01/2004',
            hobby: 'desenhar'
      }, {
            nome: 'Claudinha', 
            idade: 20, 
            dataDeNascimento: '21/02/2006',
            hobby: 'pescar '
      }
]

let novoAluno1 = {
      nome: 'Ana', 
      idade: 22, 
      dataDeNascimento: '29/01/2004',
      hobby: 'videogame'
}

const mais3Alunos = [
    {
      nome: 'Vinicius', 
      idade: 22, 
      dataDeNascimento: '29/01/2004',
      hobby: 'volei'
},
{
      nome: 'Zeca', 
      idade: 22, 
      dataDeNascimento: '29/01/2004',
      hobby: 'cortar cabelo'
},
{
      nome: 'Afonso', 
      idade: 22, 
      dataDeNascimento: '29/01/2004',
      hobby: 'ir no cinema'
}
]


console.log(alunoInfo)

alunoInfo.push({nome: 'Pedrinho', idade: 20, dataDeNascimento: '21/02/2006', hobby: 'futebol'})

console.log(alunoInfo)

alunoInfo.push(novoAluno1)

console.log(alunoInfo)

alunoInfo.push(mais3Alunos)
console.log(alunoInfo)
//se eu fizer console.log(`A lista de alunos é: ${alunoInfo}`) -> vai retornar que são todos do tipo Object 

console.log(alunoInfo.length)
alunoInfo.splice(1,4)
console.log(alunoInfo)
console.log(alunoInfo.length)

alunoInfo.splice(0,0, {nome: 'Ana', idade: 22, dataDeNascimento: '22/01/2004', hobby: 'corrida'})
//splice também podendo ser usado para adiconar elementos ao array -> {0,0} posição
console.log(alunoInfo)

const mixAlunos = alunos.concat(alunoInfo)
console.log(" A LISTA COMPLETA DE ALUNOS: ")
console.log(mixAlunos)

//matrizes -> acessando arrays dentro de arrays
// nesse código existe dois arrays: alunos e alunoinfo

const todos = [alunos, alunoInfo]

console.log(`As informações do ${todos[0][0]} são: ${alunoInfo[1][1]}`) //nesse caso deu undefined 

const novosArrays = [1, 3, 5, 6]

novosArrays[3] = 11

console.log(novosArrays)

console.log(novosArrays.length)

console.log(novosArrays[novosArrays.length-1]) // ultimo elemento do array 

const minhaEscola = [
      {}, {}
]

let horaAgora = new Date()
console.log(`Hoje é dia ${horaAgora.getDate()} e hora é ${horaAgora.getHours()}:${horaAgora.getMinutes()}`)

const numeros = [1, 4, 5, 6, 8, 3, 10]

let somaDasNotas = 0

numeros.forEach((n) => {
      somaDasNotas += n
})

let media = somaDasNotas / numeros.length

console.log(media.toFixed(2))