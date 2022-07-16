const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

const questions = [
    {
       quiz: ["value", "estimate", "evaluate"],
       options: ["jury", "assess"],
       correct: 2
    },
    {
        quiz: ["close", "near", "next"],
        options: ["trace", "adjacent"],
        correct: 2
     },
     {
        quiz: ["foreign", "national", "ethnic"],
        options: ["mad", "exotic"],
        correct: 2
     },
     {
        quiz: ["assume", "insight", "weather"],
        options: ["forecast", "sustainable"],
        correct: 1
     },
     {
        quiz: ["fast", "quick", "prompt"],
        options: ["charity", "rapid"],
        correct: 2
     }

]


let score = 0
scoreDisplay.textContent = score

function populateQuestions(){
    questions.forEach( question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        //add logo
        const logoDisplay = document.createElement("h1")
        logoDisplay.textContent = "❔"
        questionBox.append(logoDisplay)
        //show questions for each div
        question.quiz.forEach(tip=>{
           const tipText = document.createElement("p")
           tipText.textContent = tip
           questionBox.append(tipText)
        })
        //add buttons
        const questionButtons = document.createElement("div")
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)
        
        // add button to each question
        question.options.forEach( (option, optionIndex)=>{
          const questionButton = document.createElement("button")
          questionButton.classList.add('question-button')
          questionButton.textContent = option
          //add eventlistener
          questionButton.addEventListener("click", ()=> checkAnswer(option, optionIndex + 1, question.correct))

          questionButtons.append(questionButton)
        })

        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(option, optionIndex, correctAnswer){

}