const perguntas = [
  {
    pergunta: 'O que significa a sigla "DOM" em JavaScript?',
    respostas: [
      "Documento Orientado a Modelos",
      "Modelo de Objeto para Documentos",
      "Documento de Objeto Manipulável",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a maneira correta de escrever um comentário em JavaScript?",
    respostas: [
      "// Comentário aqui",
      "/* Comentário aqui */",
      "<!-- Comentário aqui -->",
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é a função do método "querySelector" em JavaScript?',
    respostas: [
      "Selecionar múltiplos elementos do DOM",
      "Selecionar um elemento do DOM usando um seletor CSS",
      "Selecionar um elemento do DOM por sua classe",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você define uma variável em JavaScript?",
    respostas: [
      "let myVar = valor;",
      "variable myVar = valor;",
      "const myVar = valor;",
    ],
    correta: 2,
  },
  {
    pergunta: 'Qual é o resultado da expressão 5 + "5" em JavaScript?',
    respostas: ["10", "55", "Erro de tipo"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o operador utilizado para comparar igualdade estrita em JavaScript?",
    respostas: ["==", "===", "="],
    correta: 1,
  },
  {
    pergunta: 'Qual é a função do método "addEventListener" em JavaScript?',
    respostas: [
      "Remover um ouvinte de eventos",
      "Adicionar um ouvinte de eventos a um elemento do DOM",
      "Criar um novo evento personalizado",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Como você converte uma string em um número inteiro em JavaScript?",
    respostas: ["parseInt(string)", "string.toInt()", "number(string)"],
    correta: 0,
  },
  {
    pergunta: 'O que o método "push" faz em um array em JavaScript?',
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um novo elemento ao início do array",
      "Adiciona um novo elemento ao final do array",
    ],
    correta: 2,
  },
  {
    pergunta:
      'Qual é a maneira correta de acessar o terceiro elemento de um array chamado "myArray"?',
    respostas: ["myArray[2]", "myArray[3]", "myArray.3"],
    correta: 0,
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
