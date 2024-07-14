//selecting first page
var playButton = document.getElementById("playbutton");
var quizApp = document.querySelector(".quizapp");
var quizStart = document.querySelector(".quiz-start")
playButton.addEventListener("click", function () {
    quizApp.style.display = "block"

    quizStart.style.display = "none"
})


const questions = [
    {
        numb: 1,
        question: "What does HTTP stands for ? ",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "HighText Transfer Protocol", correct: false },
            { text: "HyperTransfer Text Protocol", correct: false },
            { text: "HyperText Transfer Process", correct: false }
        ]
    },
    {
        numb: 2,
        question: "Who is known as the father of the computer ?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        numb: 3,
        question: "What programming language is known as the language of the web ? ",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true }
        ]
    },
    {
        numb: 4,
        question: " What is the name of Apple's operating system for its mobile devices ?",
        answers: [
            { text: "Android", correct: false },
            { text: "iOS", correct: true },
            { text: "Windows Mobile", correct: false },
            { text: "Ubuntu", correct: false }
        ]
    },
    {
        numb: 5,
        question: "What is the most popular version control system used by developers ?",
        answers: [
            { text: "SVN", correct: false },
            { text: "Git", correct: true },
            { text: "Mercurial", correct: false },
            { text: "CVS", correct: false }
        ]
    },
    {
        numb: 6,
        question: "Which company developed the Android operating system ?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: true },
            { text: "IBM", correct: false }
        ]
    },
    {
        numb: 7,
        question: "Which of the following is not a type of malware ?",
        answers: [
            { text: "Virus", correct: false },
            { text: "Trojan", correct: false },
            { text: "Firewall", correct: true },
            { text: "Spyware", correct: false }
        ]
    },

    {
        numb: 8,
        question: "Which company is known for creating the Java programming language ?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "IBM", correct: false }
        ]
    },
    {
        numb: 9,
        question: " What is the main function of the CPU in a computer ?" ,
        answers: [
            { text: "To store data", correct: false },
            { text: "To perform calculations and execute instructions", correct: true },
            { text: "To display graphics", correct: false },
            { text: "To connect to the internet", correct: false }
        ]
    },
    {
        numb: 10,
        question: "What is the name of the cloud computing platform developed by Amazon ?",
        answers: [
            { text: "Microsoft Azure", correct: false },
            { text: "Google Cloud", correct: false },
            { text: "Amazon Web Services (AWS)", correct: true },
            { text: "IBM Cloud", correct: false }
        ]
    }
];

//selecting the questions and answers
var questionElement = document.getElementById("question")
var answerBtns = document.querySelector(".answer-buttons")
var nextBtn = document.getElementById("next-btn")

//Assign the questions at index and store score
let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}
// Display the questions
function showQuestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    // let questionNo = currentQuestion + 1;
    questionElement.innerHTML = currentQuestion.numb + "." + currentQuestion.question;
    console.log(questionElement);
    //Display the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtns.appendChild(button);
        // check the answer is correct or not
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Remove previous qn's and answers
function resetstate() {
    nextBtn.style.display = "none"
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

//create a function selected answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    //display  after one click correct answer other btns color hide
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

//this function will be show if true show next qn otherwise again start the quiz
nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }
    else {
        startquiz()
    }
})
//show score
function showScore() {
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}

//next qn show
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

startquiz();