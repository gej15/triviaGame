
const question1 = {
    question: "Coffee is a?",
    rightAnswer: "Fruit",
    wrongAnswer1: "Vegetable",
    wrongAnswer2: "Bean",
    wrongAnswer3: "Meat",
}

const question2 = {
    question: "The 2 U.S. states that produce coffee are Hawaii and ?",
    rightAnswer: "Califonia",
    wrongAnswer1: "Florida",
    wrongAnswer2: "Oregon",
    wrongAnswer3: "Texas",
}

const question3 = {
    question: "Espresso means to?",
    rightAnswer: "Pressed out",
    wrongAnswer1: "Make Hot",
    wrongAnswer2: "Pour water through",
    wrongAnswer3: "Flavor with love",
}

const question4 = {
    question: "The most expensive bag of coffee ever sold was __________ a pound",
    rightAnswer: "$600",
    wrongAnswer1: "$1,000,000",
    wrongAnswer2: "$5000",
    wrongAnswer3: "$150",
}

const question5 = {
    question: "How many cups of coffee do you have to drink in a short period of time in order to overdose?",
    rightAnswer: "30 cups",
    wrongAnswer1: "15 cups",
    wrongAnswer2: "45 cups",
    wrongAnswer3: "200 cups",
}

const question6 = {
    question: "Which country dirnks the most coffee per capita?",
    rightAnswer: "Finland",
    wrongAnswer1: "U.S.A.",
    wrongAnswer2: "Spain",
    wrongAnswer3: "South Africa",
}

const question7 = {
    question: "Largest cup of coffee ever made was how many gallons?",
    rightAnswer: "3487 gallons",
    wrongAnswer1: "5000 gallons",
    wrongAnswer2: "678 gallons",
    wrongAnswer3: "135 gallons",
}

const question8 = {
    question: "Which U.S. event made coffee popular?",
    rightAnswer: "The Boston Tea Party",
    wrongAnswer1: "The Civil War",
    wrongAnswer2: "The Louisiana Purchase",
    wrongAnswer3: "The Whiskey Rebellion",
}

const question9 = {
    question: "How many calories are in one cup of black coffee?",
    rightAnswer: "1 calorie",
    wrongAnswer1: "17 calories",
    wrongAnswer2: "32 calories",
    wrongAnswer3: "8 calories",
}

const question10 = {
    question: "What country was coffee discovered?",
    rightAnswer: "Ethiopia",
    wrongAnswer1: "Brazil",
    wrongAnswer2: "Madagascar",
    wrongAnswer3: "Costa Rica",
}

let j = 0
let buttonArray = []
const question = [ question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
let correct = 0
let wrong = 0
let timeUp = 0
let time = 15
let intervalId


let questionDOM = document.querySelector('#question')
let Answer1DOM = document.querySelector('#answer1')
let Answer2DOM = document.querySelector('#answer2')
let Answer3DOM = document.querySelector('#answer3')
let Answer4DOM = document.querySelector('#answer4')
let text1 = document.querySelector('#text1')
let text2 = document.querySelector('#text2')
let text3 = document.querySelector('#text3')
let timeNumber = document.querySelector('#timer')

timeNumber.textContent = time


function start() {
        document.querySelector('#visable').style.display = "none"
        document.querySelector('.time').style.display = "block"
        document.querySelector('#question').style.display = "block"
        document.querySelector('.ans1').style.display = "block"
        document.querySelector('.ans2').style.display = "block"
        document.querySelector('.ans3').style.display = "block"
        document.querySelector('.ans4').style.display = "block"
        loadQuestion()
        
}

function  timer() {
    intervalId = setInterval(decrement, 1000)
    time = 15
}

function decrement(){
    --time
    timeNumber.textContent = time
    console.log(time)
    if (time === 0) {
        text1.textContent = "Times up... " + question[j].rightAnswer + " was the right answer"
        text2.textContent = 'Next Question'
        clearInterval(intervalId)
        ++timeUp
        next()
    }

}

function next() {
    console.log('next')
    document.querySelector('.ans1').style.display = "none"
    document.querySelector('.ans2').style.display = "none"
    document.querySelector('.ans3').style.display = "none"
    document.querySelector('.ans4').style.display = "none"
        
    document.querySelector('.the1').style.display = "block"
    document.querySelector('.the2').style.display = "block" 
    clearInterval(intervalId)   
}

function next2() {
    if (j === question.length - 1) {
        text1.textContent = "Correct answers:" + correct
        text2.textContent = "Wrong answers:" + wrong
        text3.textContent = "Ran out of time:" + timeUp
        document.querySelector('#restart').style.display = "block"
    } else {
    document.querySelector('.ans1').style.display = "block"
    document.querySelector('.ans2').style.display = "block"
    document.querySelector('.ans3').style.display = "block"
    document.querySelector('.ans4').style.display = "block"
        
    document.querySelector('.the1').style.display = "none"
    document.querySelector('.the2').style.display = "none"
    j++
    loadQuestion()
    console.log(j)
    }
}

function restart() {
    document.querySelector('#visable').style.display = "block"
    document.querySelector('.time').style.display = "none"
    document.querySelector('#question').style.display = "none"
    document.querySelector('.ans1').style.display = "none"
    document.querySelector('.ans2').style.display = "none"
    document.querySelector('.ans3').style.display = "none"
    document.querySelector('.ans4').style.display = "none"
    document.querySelector('.the1').style.display = "none"
    document.querySelector('.the2').style.display = "none"
    document.querySelector('.the3').style.display = "none"
    document.querySelector('#restart').style.display = "none"
    document.querySelector('.the2').style.display = "none"
    correct = 0
    wrong = 0
    timeUp = 0
    j = 0

}

function loadQuestion() {
    console.log[j]
    buttonArray = [question[j].rightAnswer, question[j].wrongAnswer1, question[j].wrongAnswer2, question[j].wrongAnswer3]
    shuffle(buttonArray)
    console.log(buttonArray)
    function shuffle() {
        buttonArray.sort(() => Math.random() - 0.5);
      }
    questionDOM.textContent = question[j].question
    Answer1DOM.textContent = buttonArray[0]
    Answer2DOM.textContent = buttonArray[1]
    Answer3DOM.textContent = buttonArray[2]
    Answer4DOM.textContent = buttonArray[3]
    console.log(j)
    timer()
    
}


function answerQuestion() {
    document.querySelector('.ans').classList.toggle('invisable')
}

document.querySelector('#answer1').onclick = function(){
  
   if ( buttonArray[0] == question[j].rightAnswer ){
       text1.textContent = question[j].rightAnswer + " was the right answer"
       text2.textContent = 'Next Question'
       correct++
       next()

   } else {
       text1.textContent = "WRONG " + question[j].rightAnswer + " was the correct answer"
       text2.textContent = 'Next Question'
       wrong++
       next()
   }
}

document.querySelector('#answer2').onclick = function(){
    console.log(question[j].rightAnswer)
    console.log('')
    console.log(buttonArray[1])
   if ( buttonArray[1] == question[j].rightAnswer ){
       text1.textContent = question[j].rightAnswer + " was the right answer"
       text2.textContent = 'Next Question'
       correct++
       next()

   } else {
       text1.textContent = "WRONG " + question[j].rightAnswer + " was the correct answer"
       text2.textContent = 'Next Question'
       next()
       wrong++
   }
}

document.querySelector('#answer3').onclick = function(){
    console.log(question[j].rightAnswer)
    console.log('')
    console.log(buttonArray[2])
   if ( buttonArray[2] == question[j].rightAnswer ){
       text1.textContent = question[j].rightAnswer + " was the right answer"
       correct++
       text2.textContent = 'Next Question'
       next()

   } else {
       text1.textContent = "WRONG " + question[j].rightAnswer + " was the correct answer"
       text2.textContent = 'Next Question'
       next()
       wrong++
   }
}

document.querySelector('#answer4').onclick = function(){
    console.log(question[j].rightAnswer)
    console.log('')
    console.log(buttonArray[3])
   if ( buttonArray[3] == question[j].rightAnswer ){
       text1.textContent = question[j].rightAnswer + " was the right answer"
       correct++
       text2.textContent = 'Next Question'
       next()

   } else {
       text1.textContent = "WRONG " + question[j].rightAnswer + " was the correct answer"
       text2.textContent = 'Next Question'
       next()
       wrong++
   }
}