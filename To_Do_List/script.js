function additemfun(){

    let number = 1;



    let inputbox = document.getElementById('input')
    let input = document.getElementById("input").value;
    let inputintostring = input.toString()
    inputintostring = inputintostring.replaceAll(" ","")
    // console.log(inputintostring)
    let keyforlocalstorage = inputintostring.slice(1,5);
    console.log(keyforlocalstorage)


    // Adding item in localstorage
    localStorage.setItem(keyforlocalstorage,input)

    let userevent = localStorage.getItem(keyforlocalstorage)
    console.log(userevent)
    console.log(localStorage.key(0))

    

    let divcreation = document.createElement('div');
    divcreation.id  = "newevent";



    
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox")
    checkbox.id = "check";
    divcreation.appendChild(checkbox)
    checkbox.setAttribute("onclick","linethrough(this)")

    let h2creation = document.createElement('h2');
    h2creation.innerText = userevent;
    h2creation.id = "newheading";
    divcreation.appendChild(h2creation)

    let icon = document.createElement('i');
    icon.classList = "fa-solid fa-x";
    divcreation.appendChild(icon)
    icon.style.display="block"

    icon.setAttribute("onclick","deletevents(this)")

    let addedevents = document.getElementById("addedevents");
    addedevents.appendChild(divcreation)

    setTimeout(()=>{
        inputbox.value ="";
    },3000)


    number = number + 1
}


function deletevents(deleteicon){
    console.log("function calling")
    let parent =  deleteicon.parentElement.remove();
    console.log(parent)
    let parentid = deleteicon.parentElement;
    let eventheading = parentid.childNodes[1].innerText;
    let namefordeleting  = eventheading.toString();
    namefordeleting =  namefordeleting.replaceAll(" ","")
    keyfordeleting = namefordeleting.slice(1,5);

    localStorage.removeItem(keyfordeleting)

    // let parentid = parent.id;
    // console.log(parentid)

}

function linethrough(checkboxbtn){
    let btnid = checkboxbtn.id;
    let checkvalue = btnid.checked;
    console.log(checkvalue)

    let parentid = checkboxbtn.parentElement;
    let neweventheadingline = parentid.childNodes;
     neweventheadingline[1].classList.toggle("linetrough")
    // console.log(neweventheadingline)
    // console.log(newhed)
}

function storeadata(){
    let addedevents = document.getElementById("addedevents")
    localStorage.setItem("data",addedevents.innerHTML)
}