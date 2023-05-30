const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

// Array de perguntas
var questions = [
  {
    question: "Quanto tempo dura um jogo de tênis de mesa?",
    answers: {
      a: "20 minutos",
      b: "30 minutos",
      c: "40 minutos",
      d: "50 minutos",
      e: "60 minutos"
    },
    correctAnswer: "c"
  },
  {
    question: "Qual é o diâmetro de uma bola de tênis de mesa oficial?",
    answers: {
      a: "36mm",
      b: "38mm",
      c: "40mm",
      d: "42mm",
      e: "44mm"
    },
    correctAnswer: "c"
  },
];


var currentQuestion = 0;
var score = 0;

function MostrarQuestao() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].answers;
    optionsElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
      var option = document.createElement("input");
      option.type = "radio";
      option.name = "answer";
      option.value = i;
      optionsElement.appendChild(option);

      var label = document.createElement("label");
      label.textContent = questions[currentQuestion].options[i];
      optionsElement.appendChild(label);

      optionsElement.appendChild(document.createElement("br"));
    }
  }

  function ChecarResposta() {
    var answer = document.querySelector('input[name="answer"]:checked');

    if (answer) {
      if (parseInt(answer.value) === questions[currentQuestion].answer) {
        score++;
      }

      answer.checked = false;
      currentQuestion++;

      if (currentQuestion < questions.length) {
        MostrarQuestao();
      } else {
        MostrarResultado();
      }
    }
  }

  function MostrarResultado() {
    quiz.innerHTML = `<div id="quiz"><p>Você acertou ${score} de ${questions.length} perguntas.<p>
                      <a class="fechar" href="quiz.html">Fechar</a></div>`;
  }

  MostrarQuestao();