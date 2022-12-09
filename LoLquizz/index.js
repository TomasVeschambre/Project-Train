let quizData = [
    {
        image:'./Media/passiv_bard.jpeg',
        correct:'bard p',
    },
    {
        image:'./Media/darius_z.jpeg',
        correct:'darius z'
    },
    {
        image:'./Media/irelia_e.jpeg',
        correct:'irelia e'
    },
    {
        image:'./Media/kassadin_p.jpeg',
        correct:'kassadin p'
    },
    {
        image:'./Media/kindred_a.jpeg',
        correct:'kindred a'
    },
    {
        image:'./Media/maokai_a.jpeg',
        correct:'maokai a'
    },
    {
        image:'./Media/rakan_r.jpeg',
        correct:'rakan r'
    },
    {
        image:'./Media/samira_a.jpeg',
        correct:'samira a'
    },
    {
        image:'./Media/sett_e.jpeg',
        correct:'sett e'
    },
    {
        image:'./Media/sona_a.jpeg',
        correct:'sona a'
    },
    {
        image:'./Media/tahm_p.jpeg',
        correct:'tahm kench p'
    },
    {
        image:'./Media/urgot_a.jpeg',
        correct:'urgot a'
    },
    {
        image:'./Media/vex_r.jpeg',
        correct:'vex r'
    },
    {
        image:'./Media/volibear_passiv.jpeg',
        correct:'volibear p'
    },
    {
        image:'./Media/yasuo_a.jpeg',
        correct:'yasuo a'
    },
    {
        image:'./Media/yone_r.jpeg',
        correct:'yone r'
    },
    {
        image:'./Media/zoe_e.jpeg',
        correct:'zoe e'
    },
]

let choicePlayer =""
let score=0
let numberQuestion=17
let answer = document.getElementsByName('answer');    
let currentQuiz=0
let numberQuestionAsked=0
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var replay = document.getElementsByClassName("bouton-replay")[0];

loadquiz()

function loadquiz(){
    console.log('============================================')
    currentQuiz=getRandomInt(numberQuestion-numberQuestionAsked)
    console.log(numberQuestion)
    console.log(numberQuestionAsked)

    console.log(currentQuiz)
    document.getElementById('score').innerHTML =score;
    let currentQuizData = quizData[currentQuiz]
    document.getElementById('img_find').style = `background-image: url("${currentQuizData.image}");`;


    console.log(quizData)
    console.log(quizData[currentQuiz])
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function choice(elem){
    let input = document.getElementById("in").value;
    playerChoice = `${input} ${elem.value}`
    console.log(playerChoice, quizData[currentQuiz].correct)
    if(playerChoice !== quizData[currentQuiz].correct){
        console.log('ok')
        document.querySelector('#show-result').innerHTML = 'RIP BOZO !';
        modal.style.display = "block";
    }else{
        score++;
        numberQuestionAsked++;
        quizaData = quizData.splice(currentQuiz,1)
        document.getElementById("in").value = ""
    }
    if(numberQuestionAsked==17){
        document.querySelector('#show-result').innerHTML = 'EZ !';
        modal.style.display = "block";
    }
    

    loadquiz()
}

replay.onclick = function() {
    location.reload()
}