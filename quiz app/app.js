const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Making Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      options: [
        "<script href='app.js'>",
        "<script name='app.js'>",
        "<script src='app.js'>",
        "<script file='app.js'>"
      ],
      answer: "<script src='app.js'>"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "#", "/* */"],
      answer: "//"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "msg('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');",
        "msgBox('Hello World');"
      ],
      answer: "alert('Hello World');"
    }
  ];

  // DOM Elements
const startSec = document.querySelector(".start-sec")
const startBtn = document.querySelector(".btn-start")
const app = document.querySelector(".app")
const questionQuiz = document.querySelector(".question")
const answerQuestion = document.querySelector(".answer-question")
const feed = document.querySelector(".feed")


  // Variable to Track State 
  let questionIndex = 0
  let score = 0


  // Start Button Event
startBtn.addEventListener('click', () => {
     startSec.style.display = "none"
     app.style.display = "block"
     displayQuiz () 
})

// Function For Display Question And Answers 
function displayQuiz () {
     const current = quizData[questionIndex]
     questionQuiz.textContent = current.question
    //  questionQuiz.classList = ("question")
    answerQuestion.innerHTML = ""

    current.options.forEach(option => {
      const btn = document.createElement("button")
      btn.textContent = option
      btn.classList.add("btn")
      btn.addEventListener('click', () => answerCheck(option, btn))

      answerQuestion.appendChild(btn)
     
    })
} 

// Function Check If Answer Is Correct
function answerCheck (slected, button) {
  const correct = quizData[questionIndex].answer
  if(slected === correct) {
    score++
    button.style.backgroundColor = "green"

    setTimeout(() => {
      questionIndex++
       if (questionIndex < quizData.length) {
           displayQuiz()
       } else {
        showResult()
      }
    }, 500) 
    
  
  } else {
    button.style.backgroundColor= "red"
    // button.disabled = true
    setTimeout(() => {
      questionIndex++
      displayQuiz()
    },1000)
    
  } 
  // questionIndex++
}



function showResult () {
   questionQuiz.textContent = `the quiz is finiched`
    answerQuestion.innerHTML =  `your score is ${score} out of ${quizData.length}`
  
}

  
// Click start button 
// Display quiz app questio and option 
// Checkanswer if is correct
// Show ruslt 
// Restart the quiz



