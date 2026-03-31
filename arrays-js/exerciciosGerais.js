// #1 Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator. Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

function seuArray(...array) {
      const arrayLista = [...array]
      return arrayLista;
}

const notas = [10, 6, 8, 7, 8]

const medias = [7.5, 10, 9, 6.5]

console.log(seuArray(notas))
console.log(seuArray(medias))

// #2 Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [10, 20, 30, 40, 50]

function soma (listaDeNumeros) {
      const somaDeNumeros = listaDeNumeros.reduce((acum, numero) => acum + numero, 0)
      return somaDeNumeros;
}

console.log(soma(valores))

// #3 Considere duas listas de cores: const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'] Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const todasAsCores = [...new Set([...coresLista1, ...coresLista2])]

console.log(todasAsCores)

// #4 Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function verificarPares(array) {
     const numerosPares = array.filter((n) => n % 2 === 0)
     return numerosPares
}

const listaDeNumeros = [10, 7, 8, 2, 3]
const segundaListaDeNumeros = [20, 14, 18, 21, 25]

console.log(verificarPares(listaDeNumeros))
console.log(verificarPares(segundaListaDeNumeros))