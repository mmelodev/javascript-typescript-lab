function Produto(nome, preco, estoque) {
      //quero deixar o estoque como propriedade imutável
      //propriedade estoque não pode ser alterado
      this.nome = nome; //pode ser alterado fora da função, é público
      this.preco = preco;

      Object.defineProperty(this, 'estoque', {
            enumerable: true, //mostra a chave
            value: estoque, //valor da propriedade
            writable: false, //se posso mudar
            configurable: false //configuravel -> posso subescrever as configurações criando outro defineProperties, não permite apagar a variável também
      })
}

const p1 = new Produto('Camisa', 20, 5)
p1.estoque = 50 //não vai realizar a mudança
console.log(p1) // vai continuar como 5 
console.log(Object.keys(p1)) //apenas as chaves

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