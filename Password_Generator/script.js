let passwordalpha = "Q@=WE>?RT@=Y>?UI#O>?PA@=SD>?F%GH@=JK>?LZ$XC@=VBN>?M12!345@=67890@>?a!w1s56$ed%rf^t98*gyh$&uj?/ik32<>ol+==pzq!@xcv^~bnm-+*/<";
// alert(passwordalpha.length)


let alpharr = passwordalpha.split("");


function createpass(){

    let statingindx = Math.floor( (Math.random()*100));

let endingindx = statingindx+9;



    let createdpass = alpharr.slice(statingindx,endingindx);
    createdpass = createdpass.toString();
    let newpass = createdpass.replaceAll(",","")

    let inputbox = document.getElementsByTagName("input")[0]
    inputbox.value = newpass;
    console.log('functioncalling')

    let icon = document.getElementsByTagName("i")[0];
    icon.addEventListener('click',()=>{
        let inputboxvalue = inputbox.value;
        inputbox.select();
        document.execCommand('copy')
        alert("Password Copiedto clipboard")
    })
}



