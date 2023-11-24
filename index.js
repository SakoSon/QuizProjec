// Questions that will be asked
const Questions = [{
    q: "What is 20 + 20?",
    a: [{ text: "15", isCorrect: false },
    { text: "20", isCorrect: false },
    { text: "40", isCorrect: true },
    { text: "35", isCorrect: false }
    ]
 
},
{
    q: "What is 19 + 10?",
    a: [{ text: "20", isCorrect: false, isSelected: false },
    { text: "56", isCorrect: false },
    { text: "15", isCorrect: false },
    { text: "29", isCorrect: true }
    ]
 
},
{
    q: "What is 18 + 2",
    a: [{ text: "11", isCorrect: false },
    { text: "10", isCorrect: false },
    { text: "20", isCorrect: true },
    { text: "15", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}