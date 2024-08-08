let ques = document.getElementsByClassName("ques")[0];
let btn = document.querySelector('button')

let score = 0;

let option1 = document.getElementsByClassName("option1")[0];
let option2 = document.getElementsByClassName("option2")[0];
let option3 = document.getElementsByClassName("option3")[0];
let option4 = document.getElementsByClassName("option4")[0];

let question1 = ["What is the full form of HTML?", "Hyper Text Markup Language", "Cascading Style Sheet", " JavaScript", "Hyper Text Transfer Protocol"]
let question2 = ["How Many Types of CSS?", "One Type", "Two Types", "Three Types", "Four Types"];
let question3 = ["Which is empty tag", "Heading Tag", "img Tag", "Paragraph Tag", "b Tag"]
let question4 = ["This Quiz app was created by?", "Chai or Code", "WsCube Tech", "Code With Harry", "Vishal Pareek"]

let i = 0;

let allp = document.querySelectorAll('p')

ques.innerHTML = question1[0]
option1.innerHTML = question1[1];
option2.innerHTML = question1[2];
option3.innerHTML = question1[3];
option4.innerHTML = question1[4];

let a = 0;

btn.addEventListener('click', () => {

   
    if (i == 1) {

        allp.forEach(p =>{
            p.style.background = "";
            // p.style.color = "white";
            p.id = "phover"
        })

        if(a == 0){
            
            ques.innerHTML = question2[0]
            option1.innerHTML = question2[1];
            option2.innerHTML = question2[2];
            option3.innerHTML = question2[3];
            option4.innerHTML = question2[4];
            console.log(a)
            allp.forEach(p => {
                p.setAttribute("onclick", "checkans(this)")
            })
             i=0;
             
            a++
            return true
        }

        
        if(a == 1){
            
            ques.innerHTML = question3[0]
            option1.innerHTML = question3[1];
            option2.innerHTML = question3[2];
            option3.innerHTML = question3[3];
            option4.innerHTML = question3[4];
            console.log(a)
            allp.forEach(p => {
                p.setAttribute("onclick", "checkans(this)")
            })
             i=0;
             
            a++
            return true
        }
        

        if(a == 2){
            ques.innerHTML = question4[0]
            option1.innerHTML = question4[1];
            option2.innerHTML = question4[2];
            option3.innerHTML = question4[3];
            option4.innerHTML = question4[4];
            console.log(a)

            a++;
            allp.forEach(p => {
                p.setAttribute("onclick", "checkans(this)")
            })
             i=0;
             return TextTrackCue;
        }

        if(a==3){
        let scoreshow = document.getElementById("score");
        scoreshow.style.display="block";
        scoreshow.innerHTML = `Score :- ${score}`;

        let complete = document.getElementsByClassName("complete")[0];
        complete.style.display="block"
        }

        

    }


    
    

})


function checkans(para) {
    // iinc();
    
    i++;
    // console.log(i)
    // console.log(para);
    // console.log(option1)



    if (ques.innerHTML == question1[0]) {
        if (para == option1) {
            para.style.background = "green"
            para.style.color = "white";
            score++;
        }

        else {
            para.style.background = "red";
            para.style.color = "white";
            option1.style.background = "green";
            option1.style.color = "white";

        }
    }

    if (ques.innerHTML == question2[0]) {
        if (para == option3) {
            para.style.background = "green"
            para.style.color = "white"
            score++;

        }

        else {
            para.style.background = "red";
            para.style.color = "white";
            option3.style.background = "green";
            option3.style.color = "white";

        }
    }


    if (ques.innerHTML == question3[0]) {
        if (para == option2) {
            para.style.background = "green"
            para.style.color = "white"
            score++
        }

        else {
            para.style.background = "red";
            para.style.color = "white";
            option2.style.background = "green";
            option2.style.color = "white";

        }
    }


    if (ques.innerHTML == question4[0]) {
        if (para == option4) {
            para.style.background = "green"
            para.style.color = "white"
            score++;
        }

        else {
            para.style.background = "red";
            para.style.color = "white";
            option4.style.background = "green";
            option4.style.color = "white";

        }
    }




    if (i == 1) {
        allp.forEach(p => {
            p.setAttribute("onclick", "")
        })
    }

}