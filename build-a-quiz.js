var str;
var quizAnswer = [];
var quizQuestion = [
    ["Who is the Prime Minister of Pakistan?", "imran khan"],
    ["When was Pakistan founded?", "1947"],
    ["Is Node JS a Javascript Framework?", "no"]
]

for(var i = 0; i<quizQuestion.length; i++){
    quizQuestion[i][2] = ((prompt(quizQuestion[i][0]))); 
    if(quizQuestion[i][1] == quizQuestion[i][2]){
        quizQuestion[i][3] = "Correct Answer";        
    } else{
        quizQuestion[i][3] = "Wrong Answer";        
    }
}
quizQuestion.forEach(element => {
    document.write("Question. " + element[0] + "<li>Your Ans. " + element[2] + " - " + element[3] + "</li><br/>" );    
});