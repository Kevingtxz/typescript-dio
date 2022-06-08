enum Profissao {
  Professor,
  Ator,
  Desenvolvedor,
  JogadorDeFutebol
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

const mariana: Pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: Profissao.Desenvolvedor
}

mariana.idade = 24

const andre: Pessoa = {
  nome: 'Andre',
  idade: 25,
  profissao: Profissao.Ator
}

interface Estudante extends Pessoa {
  materias: string[]
}

const jessica: Estudante = {
  nome: 'Jessica',
  idade: 20,
  profissao: Profissao.Professor,
  materias: [
    'Programação I',
    'Cálculo IV',
    'Estrutura de Dados'
  ]
}

const luiz: Estudante = {
  nome: 'Luiz',
  idade: 22,
  materias: [
    'Cálculo III',
    'Estrutura de Dados'
  ]
}

const listar = (lista: string[]) => {
  for (const item of lista)
    console.log('- ', item)
}

listar(jessica.materias)