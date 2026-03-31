const numeros = [1, 2, 3, 4, 5]
const maisNumeros = [...numeros] //finalmente chegamos nos tres pontos

maisNumeros.push(6,7,8,9,10)

console.log(numeros)
console.log(maisNumeros)

//trabalhando com Set

const alunos = ["Murilo", "João", "Maria","Carlos", "Carlos", "Carlos", "Carlos"] //professor sem querer repetiu o nome 

const listaDeAlunos = [...new Set(alunos)]
//eu envolvi o Set com um array portanto, essa const vai ter os metodos de um array
console.log(listaDeAlunos)
listaDeAlunos.push("Frederico")
console.log(listaDeAlunos)
console.log(alunos) //o array original não foi alterado apesar do push feito na const com new Set()

const setAlunos = new Set(alunos) //agora está fora do array
console.log(setAlunos)

//metodos do Set
setAlunos.add("Frederico")
console.log(setAlunos)
console.log(alunos) //reforçando, ao adicionar um novo elemento no Set, não estou adiconando no array original

//outros metodos: has, delete, add, forEach...

