const pessoa = {
      nome: 'Ricardo',
      idade: 42,
      solteiro: false,
      hobbies: ['pescar','videogame','corrida'],
}

function mostrarInfoPessoa (pessoa) {
      for (p in pessoa){
            //lembrando sempre que p é o index
            console.log(`${p} - ${typeof pessoa[p]}`)
      }
}


pessoa.endereco = [{rua: 'travessa vileta', cidade: 'belém', estado: 'pará'}]

console.log(pessoa)
console.log(mostrarInfoPessoa(pessoa))

const dadosEnvio = {
      nome: pessoa.nome,
      ...pessoa.endereco[0]
}

console.log(dadosEnvio)