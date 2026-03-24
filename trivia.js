//declaração de variáveis
let q = 0;
let answer;
let correct;
let correctQuestions;
let qNumber = document.getElementById("questionNumber");
let qText = document.getElementById("questionText");
let options = {
    optionA: document.getElementById("option1"),
    optionB: document.getElementById("option2"),
    optionC: document.getElementById("option3")
}
let questions = {
    number: [1, 2 , 3],
    text: ["Which one's is the most famous dinosaur?", "Which of these dinosaurs was a herbivore?", "Which of this dinosaurs had a armor?"],
    first: ["Tiranosaur", "Velociraptor","Spinosaur"],
    second: ["Megalosaur", "Baryonix", "Ankilosaur"],
    third: ["Estegosaur", "Triceratops", "Brachiosaur"],
    expected: [0, 2, 1]
}
//função que alterna entre a página inicial e a de perguntas
function mudarPagina() {
    window.location.href = "perguntas.html";
    update();
}
//funções que marcam as alternativas
function markA() {
    answer = 0;
}
function markB() {
    answer = 1;
}
function markC() {
    answer = 2;
}
//função que submete as respostas
function update () {
    if (answer === questions.expected[q]) {
        correctQuestions++;
    }
    qNumber.innerHTML = questions.number[q];
    qText.innerHTML = questions.text[q];
    optionA.innerHTML = questions.first[q];
    optionB.innerHTML = questions.second[q];
    optionC.innerHTML = questions.third[q];
    q++;
}