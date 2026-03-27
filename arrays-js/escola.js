const escolaMosaico = ['Mosaico', 1998, 'Educação Básica, Fundamental e Médio']
const escolaOlimpus = ['Olimpus', 2002, 'Educação Médio']
const escolaRosanaBastos = ['Rosana Bastos', 2010, 'Fundamental e Médio']

const alunosMosaico = ['Murilo Melo', 'Maria Santos', 'Carlos Oliveira', 'Ana Costa', 'Pedro Ferreira', 'Lucia Martins', 'Fernando Sousa', 'Juliana Lima', 'Ricardo Alves', 'Beatriz Rocha']
const alunosOlimpus = ['André Mendes', 'Camila Castro', 'Lucas Barbosa', 'Isabela Gomes', 'Gustavo Teixeira', 'Sofia Dias', 'Rafael Neves', 'Carla Machado', 'Thiago Ribeiro', 'Fernanda Campos']
const alunosRosanaBastos = ['Bruno Cardoso', 'Patricia Monteiro', 'Felipe Pinto', 'Silvia Morais', 'Diego Souza', 'Leila Cruz', 'Rodrigo Tavares', 'Cristina Brás', 'Marcos Duque', 'Paula Vaz']

const profMosaico = ['Dr. Jefferson Santos', 'Dra. Monica Araujo', 'Prof. Sergio Couto', 'Profa. Carolina Alencar', 'Dr. Fabricio Menezes', 'Dra. Adriana Vieira', 'Prof. Antonio Correia', 'Profa. Vanessa Brito', 'Dr. Claudio Texeira', 'Profa. Regiane Souza']
const profOlimpus = ['Prof. Wagner Ferreira', 'Profa. Bianca Medeiros', 'Dr. Romulo Castro', 'Dra. Tatiana Gama', 'Prof. Henrique Sales', 'Profa. Elaine Rocha', 'Dr. Samuel Ponte', 'Dra. Mariana Coelho', 'Prof. Victor Albuquerque', 'Profa. Daiane Oliveira']
const profRosanaBastos = ['Prof. Leandro Martins', 'Profa. Rosane Cardoso', 'Dr. Paulo Ribeiro', 'Dra. Luciana Farias', 'Prof. Mauricio Costa', 'Profa. Fabiana Souza', 'Dr. Nilson Pereira', 'Dra. Graciele Santos', 'Prof. Emanuel Mendes', 'Profa. Soraya Azevedo']

//trabalhando com funções para percorrer um array

const escolaMosaicoCompleta = [escolaMosaico,alunosMosaico, profMosaico]
const escolaOlimpusCompleta = [escolaOlimpus,alunosOlimpus, profOlimpus]
const escolaRosanaBastosCompleta = [escolaRosanaBastos,alunosRosanaBastos,profRosanaBastos]


function consultarAlunoNaEscolaMosaico (aluno) {
            if (escolaMosaicoCompleta[1].includes(aluno)) {
                  const encontrado = escolaMosaicoCompleta[1].indexOf(aluno)
                  console.log(`Aluno encontrado na posição ${encontrado} da lista!`)
            } else {
                  console.log("Aluno não encontrado!")
            }
}
function consultarAlunoNaEscolaOlimpus (aluno) {
            if (escolaOlimpusCompleta[1].includes(aluno)) {
                  const encontrado = escolaOlimpusCompleta[1].indexOf(aluno)
                  console.log(`Aluno encontrado na posição ${encontrado} da lista!`)
            } else {
                  console.log("Aluno não encontrado!")
            }
}
function consultarAlunoNaEscolaRosanaBastos (aluno) {
      //outro uso exibindo nome do aluno:
            if (escolaRosanaBastosCompleta[1].includes(aluno)) {
                  const encontrado = escolaRosanaBastosCompleta[1].indexOf(aluno)
                  console.log(`Aluno ${escolaRosanaBastosCompleta[1][encontrado]} encontrado na posição ${encontrado} da lista!`)
            } else {
                  console.log("Aluno não encontrado!")
            }
}

consultarAlunoNaEscolaMosaico('Lucia Martins')
consultarAlunoNaEscolaOlimpus('Carla Machado')
consultarAlunoNaEscolaRosanaBastos('Paula Vaz')


function professorDoALunoMosaico (aluno) {
      if (escolaMosaicoCompleta[1].includes(aluno)){
            const [,alunos, professor] = escolaMosaicoCompleta
            // a virgula aqui é necessária pois o array do escolaMosaicoCompleta recebe 3 arrays, então isso seria uma estratégia para pegar apenas os arrays que eu quero.
            const encontrado = alunos.indexOf(aluno)
            const profEncontrado = professor[encontrado]
            console.log(`Aluno ${aluno} tem o professor particular com nome ${profEncontrado}`)
      } else{
            console.log("Não existe esse aluno na escola Mosaico")
      }
}

professorDoALunoMosaico ("Murilo Melo")