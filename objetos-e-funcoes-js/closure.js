function exibirNome(nome){
      return function (){
            return nome;
      }
}
const funcaoNome = exibirNome("Murilo")
console.dir(funcaoNome());