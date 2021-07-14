const quizData=[
    {
        question: 'https://via.placeholder.com/200x50?text=CSS',
        a:'Afaq Abbasi',
        b:"Talha Abbas",
        c:" Ajmal Abbasi",
        d:" Sikandar Abbasi",
        correct: 'b'
        },
        {
        question: 'What is The current CGPA of mine?',
        a:'2.2',
        b:'2.3',
        c:'2.4',
        d:'2.5',
        correct:'c'

        },
        {
        question: 'What is The current GPA of mine?',
        a:'2.2',
        b:'2.3',
        c:'2.4',
        d:'2.5',
 
        correct:'d'
        }
]

const scoreBorad=document.getElementById('main')
const ansElement=document.querySelectorAll('.label')
const question=document.getElementById('quizQuestion')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const btn=document.getElementById('submit')
let score=0;
let currentQuestion=0;
nextQuiz()

function nextQuiz() {
    deselect()
const quizDataShow=quizData[currentQuestion]
question.innerHTML=quizDataShow.question
a_text.innerText=quizDataShow.a 
b_text.innerText=quizDataShow.b 
c_text.innerText=quizDataShow.c 
d_text.innerText=quizDataShow.d  
}
function checkBox() {
    let answer=undefined;
    ansElement.forEach((answerCheck)=>{
        console.log(answerCheck.value)
        if(answerCheck.checked){
            answer=answerCheck.id
        }
    })
    return answer;
    
}
function deselect() {
    ansElement.forEach((chek)=>{
        chek.checked=false
    })
    
}

btn.addEventListener("click",()=>{
    let afterCheck=checkBox()
 console.log(afterCheck)
 if(afterCheck){
    if(afterCheck === quizData[currentQuestion].correct){
score++;

    }
    currentQuestion++;
if(currentQuestion < quizData.length){
            nextQuiz()
}
else{
scoreBorad.innerHTML=(`your Score is ${score} out of ${quizData.length}

<button onclick="location.reload()"> Reload     </button>`)

}
 }
 else{
     alert('Select One of them')
 }
    
  
});

