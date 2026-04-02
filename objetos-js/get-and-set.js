function novoProduto(nome, preco, estoque) {
      Object.defineProperty(this, 'estoque', {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
      })

      Object.defineProperties(this, {
            nome: {
                  enumerable: true,
                  value: nome,
                  writable: true,
                  configurable: true
            },
            preco: {
                  enumerable: true,
                  value: preco,
                  writable: true,
                  configurable: false
            }
      })
}

function Produto (nome, preco, estoque) {
      this.nome = nome
      this.preco = preco

      let estoquePrivado = this.estoque //adicionando em uma variavel para impedir de criar um loop ao menos acionar o this.estoque

      Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: true,
            get: function (){
                  return estoque
            },
            set: function (valor) {
                  if(typeof valor !== 'number'){
                        throw new TypeError('mensagem')
                  }

                  estoquePrivado = valor
            }
      })
}


const p1 = new Produto('Camisa', 22, 3)
//console.log(p1)
p1.estoque = 'blabla'
console.log(p1.estoque)

function criaProduto (nome){
      return{
            get nome() { 
                  return nome 
            },
            set nome(valor) {
                  nome = valor
            }
      }
}

/**
 * outros metodos para manipular objetos
 * Object.values -> retorna apenas os valores 
 * Object.getOwnPropertyDescriptor -> retornar as propriedades para aquele objeto (writable, configurable...)
 * Object.assign -> copia os valores do objeto (igual o spread)
 */