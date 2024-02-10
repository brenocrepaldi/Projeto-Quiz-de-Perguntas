const perguntas = [
	{
		pergunta: 'Qual é a função do comando "print" em Python?',
		respostas: [
			"A: Para imprimir mensagens na tela.",
			"B: Para declarar variáveis.",
			"C: Para criar loops.",
		],
		correta: 0,
	},
	{
		pergunta:
			"Como se chama o tipo de dados que contém apenas dois valores: True e False?",
		respostas: ["A: Inteiro", "B: Booleano", "C: String"],
		correta: 1,
	},
	{
		pergunta: "O que é Python?",
		respostas: [
			"A: Um tipo de serpente.",
			"B: Uma linguagem de programação.",
			"C: Uma ferramenta de análise de dados.",
		],
		correta: 1,
	},
	{
		pergunta: "Qual é o símbolo usado para comentar uma linha em Python?",
		respostas: ["A: //", "B: #", "C: /* */"],
		correta: 1,
	},
	{
		pergunta: "Qual é o operador usado para concatenar strings em Python?",
		respostas: ["A: +", "B: -", "C: *"],
		correta: 0,
	},
	{
		pergunta: 'Qual é a função da instrução "if" em Python?',
		respostas: [
			"A: Para definir uma função.",
			"B: Para criar um loop.",
			"C: Para fazer uma verificação condicional.",
		],
		correta: 2,
	},
	{
		pergunta:
			"Qual é o método utilizado para encontrar o número de itens em uma lista em Python?",
		respostas: ["A: count()", "B: size()", "C: length()"],
		correta: 0,
	},
	{
		pergunta:
			"Como se chama a função que é chamada automaticamente quando um objeto é criado?",
		respostas: ["A: init()", "B: start()", "C: constructor()"],
		correta: 0,
	},
	{
		pergunta:
			"Qual é a estrutura de dados que permite armazenar múltiplos valores em uma única variável em Python?",
		respostas: ["A: Lista", "B: Dicionário", "C: Tupla"],
		correta: 0,
	},
	{
		pergunta:
			"Qual é a função utilizada para ler a entrada do usuário em Python?",
		respostas: ["A: read()", "B: input()", "C: get()"],
		correta: 1,
	},
	{
		pergunta: "Qual é o resultado da expressão 3 * (2 + 1)?",
		respostas: ["A: 6", "B: 9", "C: 12"],
		correta: 1,
	},
	{
		pergunta: "O que é uma exceção em Python?",
		respostas: [
			"A: Um erro que ocorre durante a execução de um programa.",
			"B: Um tipo especial de variável.",
			"C: Um loop infinito.",
		],
		correta: 0,
	},
	{
		pergunta: "Qual é o operador usado para a exponenciação em Python?",
		respostas: ["A: ^", "B: **", "C: *"],
		correta: 1,
	},
	{
		pergunta:
			"Qual é o método usado para remover o último item de uma lista em Python?",
		respostas: ["A: remove()", "B: delete()", "C: pop()"],
		correta: 2,
	},
	{
		pergunta:
			"Qual é o tipo de dados que não pode ser alterado após a sua criação em Python?",
		respostas: ["A: Mutável", "B: Imutável", "C: Dinâmico"],
		correta: 1,
	},
	{
		pergunta:
			"Qual é a função usada para converter um valor em uma string em Python?",
		respostas: ["A: str()", "B: convert()", "C: string()"],
		correta: 0,
	},
	{
		pergunta:
			"Qual é a função que retorna o maior valor em uma lista em Python?",
		respostas: ["A: max()", "B: maximum()", "C: bigger()"],
		correta: 0,
	},
	{
		pergunta: "Qual é o método usado para ordenar uma lista em Python?",
		respostas: ["A: sort()", "B: order()", "C: arrange()"],
		correta: 0,
	},
	{
		pergunta: "O que é um módulo em Python?",
		respostas: [
			"A: Uma função específica do Python.",
			"B: Um tipo de variável.",
			"C: Um arquivo que contém funções e variáveis que podem ser importadas em outros programas.",
		],
		correta: 2,
	},
	{
		pergunta: "Qual é o resultado da expressão 10 / 2?",
		respostas: ["A: 2", "B: 5", "C: 10"],
		correta: 1,
	},
	{
		pergunta: "O que é uma função em Python?",
		respostas: [
			"A: Um nome de variável.",
			"B: Um tipo de estrutura de dados.",
			"C: Um bloco de código reutilizável que executa uma tarefa específica.",
		],
		correta: 2,
	},
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");

mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for (const item of perguntas) {
	const quizItem = template.content.cloneNode(true);
	quizItem.querySelector("h3").textContent = item.pergunta;

	for (let resposta of item.respostas) {
		const dt = quizItem.querySelector("dl dt").cloneNode(true);
		dt.querySelector("span").textContent = resposta;
		dt.querySelector("input").setAttribute(
			"name",
			`pergunta-${perguntas.indexOf(item)}`
		);
		dt.querySelector("input").value = item.respostas.indexOf(resposta);
		dt.querySelector("input").onchange = (event) => {
			const estaCorreta = event.target.value == item.correta;

			corretas.delete(item);
			if (estaCorreta) {
				corretas.add(item);
			}
			mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
		};

		quizItem.querySelector("dl").appendChild(dt);
	}
	quizItem.querySelector("dt").remove();
	quiz.appendChild(quizItem);
}
