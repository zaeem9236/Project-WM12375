var questions = [{question:"what is your name", answer:"zaeem", options:{a:"haris", b:"zaeem", c:"farhan", d:"gava"}},
{question:"what is your school name", answer:"aps", options:{a:"aps", b:"Fazaia", c:"roots", d:"xyz"}},
{question:"what is your favourite car brand", answer:"bmw", options:{a:"suzuki", b:"toyota", c:"cadallac", d:"bmw"}},
{question:"what is your laptop brand", answer:"hp", options:{a:"hp", b:"dell", c:"asus", d:"fdfd"}},
{question:"what is your mobile brand", answer:"xiomi", options:{a:"huawei", b:"samsung", c:"xiomi", d:"sony"}}];

var questionNo = 0;
var finalScore = 0;

function startQuiz(){
    // document.body.innerHTML = "";
    showQuestion();
}

function showQuestion(){
    // document.body.innerHTML = "";
    // document.write(questions[questionNo].question);
    
    var x = document.childNodes[0].childNodes[1].childNodes[0];
    // x.setAttribute("class","body");

    console.log(x);

    // document.write("<br><br>Answers: <br>");
    // document.write("<p onclick = \"show(questions[questionNo].options.a, questions[questionNo].answer)\"]>a: "+questions[questionNo].options.a+"</p>");
    // document.write("<p onclick = \"show(questions[questionNo].options.b, questions[questionNo].answer)\"]>b: "+questions[questionNo].options.b+"</p>");
    // document.write("<p onclick = \"show(questions[questionNo].options.c, questions[questionNo].answer)\"]>c: "+questions[questionNo].options.c+"</p>");
    // document.write("<p onclick = \"show(questions[questionNo].options.d, questions[questionNo].answer)\"]>d: "+questions[questionNo].options.d+"</p>");

    // document.write("<button type=\"button\" onclick = next()>Next</button>");
    
    
    
    
    // console.log(questions[0].question); // question
    // console.log(questions[0].options);
}

function show(selectedAnswer, correctAnswer){
    if (selectedAnswer === correctAnswer){
        alert("correct answer");
        finalScore = finalScore + 1;
    }
}

function next(){
    questionNo = questionNo + 1;
    if (questionNo <=4 ){
        showQuestion();
    }
   
    if(questionNo == 5){
        document.body.innerHTML = "";
        document.write("Final Score is "+finalScore);
    }
}


