//construtor
function Pessoa (nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      //this.nomeCompleto = () => this.nome + ' ' + this.sobrenomes
}

Pessoa.prototype.nomeCompleto = function () {return this.nome + ' ' + this.sobrenome} //lembrando que o arrow function não trabalha direito com o this

const p1 = new Pessoa ('Murilo', 'M.')

console.log(p1.nomeCompleto())

/**
 * 
 * Protótipo é o termo usado para molde, portanto, ao invés de um criar um metodo na própria função, eu crio um prototipo que vai criar esse metodo, desse forma, ao acionar o metodo da função, não vai ser criado o mesmo metodo várias vezes, mas vai chamar apenas uma vez através da dinamica de __proto__ do javascript que funciona como herança de metodos, __proto__ é o pai de todos, ou mãe, como preferir
 */