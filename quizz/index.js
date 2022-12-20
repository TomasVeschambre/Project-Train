const quizData = [
    {
        question: 'Quelle est le personnage principale de One Piece',
        a:'Luffy',
        b:'Barbe Noire',
        c:'Zoro',
        correct:'a'
    },
    {
        question: 'Quelle est le personnage principale de Death Note',
        a:'L',
        b:'Light Yagami',
        c:'Ryuk',
        correct:'b'
    },
    {
        question: 'Quelle est le personnage principale de Vinland Saga',
        a:'Askelaad',
        b:'Thors',
        c:'Thorfinn',
        correct:'c'
    },
    {
        question: 'Quelle est le personnage principale de God of War',
        a:'Ares',
        b:'Kratos',
        c:'Atreus',
        correct:'b'
    },
    {
        question: 'Quelle est le personnage principale de Promised Neverland',
        a:'Ray',
        b:'Norman',
        c:'Emma',
        correct:'c'
    }
]

let currentQuiz=0
let score=0
let submitBtn = document.getElementsByClassName('btn')
let answer = document.getElementsByName('answer');    

loadquiz()

function loadquiz(){
    let currentQuizData = quizData[currentQuiz]
    document.getElementById('question').innerHTML = currentQuizData.question;
    document.getElementById('a_text').innerHTML = currentQuizData.a;
    document.getElementById('b_text').innerHTML = currentQuizData.b;
    document.getElementById('c_text').innerHTML = currentQuizData.c;
}

submitBtn.addEventListener('click', () =>{
    answer.forEach((answer) => {
    if (answer.checked) {
            choice = answer.id
            if(choice == quizData[currentQuiz].correct){
                score++
                answer.checked = false;
            }
            answer.checked = false;
        }
        console.log('score',score)
    });
    currentQuiz++;

    if(currentQuiz<quizData.length){
        loadquiz()
    } else{
        alert(`Quiz fini voila votre score : ${score}`)
    }
})

