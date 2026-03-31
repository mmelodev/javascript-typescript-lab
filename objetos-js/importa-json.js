const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante) //precisa passar para string e depois para object

const ObjEstudante = JSON.parse(stringEstudante)

console.log(typeof ObjEstudante)
console.log(ObjEstudante)