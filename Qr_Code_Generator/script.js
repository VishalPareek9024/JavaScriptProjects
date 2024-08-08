let generatebtn = document.getElementsByClassName("generatebtn")[0]


generatebtn.addEventListener('click',()=>{
let url = document.getElementById("url").value;
    
    if(url == '')
    {
        alert("Please Enter Any Url Thanks!")
    }

    else{
        
        let qrimagediv = document.getElementsByClassName("qrimagediv")[0];
        qrimagediv.style.marginTop = "40px"

        let qrimg = document.getElementById("qrimg");
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+url;
        qrimg.style.margin="40px";

        function displaytnaksbtn()
        {
        let thanksbtn = document.querySelector(".Thanks button");
        thanksbtn.style.display ="block";
        thanksbtn.style.margin = "auto"

        let p = document.getElementsByTagName("p")[0];
        p.style.display="block"
        }

        setInterval(displaytnaksbtn,2000)
    }
})


