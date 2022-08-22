const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const cufferlink = document.getElementById("cufferlink")
const blufferlink = document.getElementById("blufferlink")
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++  
    setNextQuestion()
});


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    blufferScore = 0
    cufferScore = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])//current question index keeps track but we need a way to keep track of the cuffer score a nd bluffer score

  }

function showQuestion(question){// the question here is evaluated the shuffled quest
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{//we could have called this whatever
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)//if you click on it it will select
        answerButtonsElement.appendChild(button)//if you click on any buttonelement the event listener onn it 
    })
}

function resetState(){
    clearStatusClass(document.body)// this is the elemenet im the parameter
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    
    }else{
      if(blufferScore > cufferScore){
         blufferlink.classList.remove("hide")
      }else{
        cufferlink.classList.remove("hide")
      }
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')}};


    
function setStatusClass(element,correct){
    clearStatusClass(element)
        if(correct){
            element.classList.add('correct')
            cufferScore++

        }else{
            element.classList.add('wrong')
            blufferScore++
        }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Do she got alot of male friends",
        answers: [{text:'No',correct:true},
                  {text: 'Yes', correct:false}
                ]
    },{
    question: 'Do she got a career',
    answers: [
      { text: 'YES', correct: true },
      { text: 'NO', correct: false }
    ]
  },
  {
    question: 'if she could go anywhere where would she go',
    answers: [
      { text: 'Miami', correct: false },
      { text: 'Paris', correct: false },
      { text: 'Africa', correct: true },
      { text: 'Mexico', correct: false }
    ]
  },
  {
    question: 'do you think she would bail you out of jail?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Do she got more than one phone?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  }

]

//the next thing we doin is making a hash with the recomendatins for cuffers and bluffers and make the date object and style we almost done.
// camel black and red color
// light blue and white with pink maybe 
// 