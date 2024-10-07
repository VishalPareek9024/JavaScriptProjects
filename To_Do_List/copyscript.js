function additemfun(){

    let number = 1;

    let inputbox = document.getElementById('input')
    // let studytime = document.getElementById('studytime')
    let userhours = document.getElementById('userhours');
    let userminutes = document.getElementById('userminutes')
    if((inputbox.value == '' || (userhours.value == '')))
    {
        alert("Please Fill Both Inputs")
    }


    else{

    // let checkStudyTimeDataType = String((parseFloat(studytime.value))+0)
    // console.log(checkStudyTimeDataType);
    
    if((userhours.value > 24) || (userminutes.value > 59))
    {
        alert("Please Enter Valid Study Time")
    }

    else{

    let input = document.getElementById("input").value;
    // let inputintostring = input.toString()

    // let inputintostring = input.replaceAll(" ","")
    // console.log(inputintostring)
    // console.log(inputintostring)
    // let keyforlocalstorage = inputintostring.slice(1,5);
    // console.log(keyforlocalstorage)


    // Adding item in localstorage
    //  localStorage.setItem(keyforlocalstorage,input)

    // let userevent = localStorage.getItem(keyforlocalstorage)
    // console.log(userevent)
    // console.log(localStorage.key(0))

    

    let divcreation = document.createElement('div');
    divcreation.id  = "newevent";



    
    // let checkbox = document.createElement("input");
    // checkbox.setAttribute("type","checkbox")
    // checkbox.id = "check";
    // divcreation.appendChild(checkbox)
    // checkbox.setAttribute("onclick","linethrough(this)")

    let h2creation = document.createElement('h2');
    h2creation.innerText = input;
    h2creation.id = "newheading";
    divcreation.appendChild(h2creation)

    // let icon = document.createElement('i');
    // icon.classList = "fa-solid fa-x";
    // divcreation.appendChild(icon)
    // icon.style.display="block"
    // icon.setAttribute("onclick","deletevents(this)")


    // let studytimediv 


    let twobtnsdiv =  document.createElement('div')
    twobtnsdiv.id = 'twobtns'
    
    let completebtn  = document.createElement("button")
    completebtn.innerText = "Completed"
    completebtn.classList.add('btn')
    completebtn.setAttribute('onclick','linethrough(this)')
    twobtnsdiv.appendChild(completebtn)

    let startbtn = document.createElement("button")
    startbtn.innerText = "Start"
    startbtn.classList.add('btn')
    startbtn.classList.add('startbtnclass')
    twobtnsdiv.appendChild(startbtn)

    let array = document.getElementsByClassName("startbtnclass");
    // for(let i = 0; i<=array.length; i++){
    //     console.log(array[i])
    // }
    for(i=1; i<=10; i++){
        console.log(i);
    }
    for(let i of array){
        console.log(i);
        
    }
    // array.forEach(e => {
    //     console.log(e)
    // });
    console.log(array)

    let completingtimeing = document.createElement("h3")
    // h3.innerText = ""
    // let usertime = (studytime.value + 0.0)
    // usertime = usertime.split('.')
    // console.log(usertime)
    
    divcreation.appendChild(twobtnsdiv)
    
    
    let startTimeDisplay = document.createElement('h4'); //After Clicking Start Btn it shows timing;
    if((userminutes.value) == '')
        {
            userminutes.value = 60;
            userhours.value -= 1
        }    
        if(userminutes.value == 1)
        {
            userminutes.value = parseInt(userminutes.value)+1
        }
        combineTime = `${userhours.value} : ${userminutes.value-1} : 60`
        startTimeDisplay.innerText = combineTime;
        divcreation.appendChild(startTimeDisplay)
        startbtn.setAttribute('onclick',`startTimeFunction(this)`)


    let addedevents = document.getElementById("addedevents");
    addedevents.appendChild(divcreation)

    setTimeout(()=>{
        inputbox.value ="";
    },3000)


    // number = number + 1
}
    }
}

// function deletevents(deleteicon){
//     console.log("function calling")
//     let parent =  deleteicon.parentElement.remove();
//     console.log(parent)
//     let parentid = deleteicon.parentElement;
//     let eventheading = parentid.childNodes[1].innerText;
//     // let namefordeleting  = eventheading.toString();
//     eventheading =  eventheading.replaceAll(" ","")
//     keyfordeleting = eventheading.slice(1,5);

//     localStorage.removeItem(keyfordeleting)

//     // let parentid = parent.id;
//     // console.log(parentid)

// }

function linethrough(checkboxbtn){
    // let btnid = checkboxbtn.id;
    // let checkvalue = btnid.checked;
    // console.log(checkvalue)

    let parentid = checkboxbtn.parentElement;
    console.log(parentid)
    let neweventheadingline = parentid.previousElementSibling;
    console.log("Hii");
    
    console.log(neweventheadingline)
     neweventheadingline.classList.toggle("linetrough")
    // console.log(neweventheadingline)
    // console.log(newhed)
}

// function storeadata(){
//     let addedevents = document.getElementById("addedevents")
//     localStorage.setItem("data",addedevents.innerHTML)
// }

function datetimedisplay()
{
    let displaydate = document.getElementById("displaydate");
    let displaytime = document.getElementById("displaytime");
    let fulldatetime = new Date;
    let currentyear = fulldatetime.getFullYear();
    let currentmonth = fulldatetime.getMonth()
    let currentday = fulldatetime.getDate()
    let localdate = `${currentday}/${currentmonth+1}/${currentyear}`
    displaydate.innerText = localdate
    // alert(localdate)

    let currentHour = fulldatetime.getHours();
    let currentMinute = fulldatetime.getMinutes()
    let currentSeconds = fulldatetime.getSeconds()
    let localTime = `${currentHour}:${currentMinute}:${currentSeconds}`
    displaytime.innerText = localTime
    // console.log(localTime)


}


setInterval(() => {
    datetimedisplay()
}, 1000);



function startTimeFunction(div){
    console.log(div)
    let h4InnerText = ((div.parentElement).nextSibling.innerText).split(':');
    console.log(h4InnerText)
    hours = h4InnerText[0]
    minutes = h4InnerText[1]
    seconds = h4InnerText[2]
    // let userminutes = document.getElementById('userminutes')
    // if((userminutes.value) == '')
    //     {
    //         userminutes.value = 60;
    //         userhours.value -= userhours
    //     }

    // if()
    
    // alert(seconds)
    // alert(hours)
    // alert(minutes)
    let pre = (div.parentElement).previousElementSibling
    console.log(pre)
    
    function newfun()
    {
        if(seconds > 0)
        {
            seconds--
        }

        if(seconds == 0)
        {
            seconds = 60
            minutes -= 1
        }

        if(minutes == 0)
        {
            minutes = 60
            hours -= 1
        }

        let startTimeDisplay = (div.parentElement).nextSibling
        startTimeDisplay.innerText = `${hours} : ${minutes} : ${seconds}`
    }

    setInterval(() => {
        newfun()
    }, 1000);

}








// function exfun(){
//     let ex = document.getElementById('ex')
//     let exevents = document.getElementById('exevents')
//     exevents.appendChild(ex)
// }