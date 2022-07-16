const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById("question-display")

const questions = [
    {
       quis: ["value", "estimate", "evaluate"],
       options: ["jury", "assess"],
       correct: 2
    },
    {
        quis: ["close", "near", "next"],
        options: ["trace", "adjacent"],
        correct: 2
     },
     {
        quis: ["foreign", "national", "ethnic"],
        options: ["mad", "exotic"],
        correct: 2
     },
     {
        quis: ["assume", "insight", "weather"],
        options: ["forecast", "sustainable"],
        correct: 1
     },
     {
        quis: ["fast", "quick", "prompt"],
        options: ["charity", "rapid"],
        correct: 2
     }

]


let score = 0
scoreDisplay.textContent = score
