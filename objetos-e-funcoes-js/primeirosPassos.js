const pessoas = {nome: "Murilo", idade: 22, trabalho: "desenvolvedor", media: 9, 
      estaAprovado: function (mediaBase) {return this.media >= mediaBase ? true : false}} // o arrow function tem problemas com o this, evitar. (estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false)

console.log(pessoas['nome'])

function consultaPessoa(info, param) {
      return info[param]
}

console.log(pessoas.estaAprovado(7))