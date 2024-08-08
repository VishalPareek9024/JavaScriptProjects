const container = document.querySelector('.container');

let submitbtn = document.querySelector('button')

submitbtn.addEventListener('click', () => {
    let inputfield = document.getElementById('inputfield').value;

    if (inputfield == '') {
        console.log(inputfield)

        alert("Please Enter Your age! Thanks")
    }

    else {
        let newdatestring = inputfield
        console.log(newdatestring)
        let agearray = newdatestring.split('-')
        console.log(agearray)
        
        let curentdate = new Date();
        let currentmonth = curentdate.getMonth()+1;
        let currentdatenew = curentdate.getDate()
        let currentyear = curentdate.getFullYear();
        console.log(currentmonth," == ",currentdatenew," == ",currentyear)
        if(agearray[0]>currentyear || agearray[1] > currentmonth || agearray[2]> currentdatenew)
        {
            alert("Please Enter Valid Date! Thanks")
            return false;
        }
        
        let ageyear = currentyear - agearray[0];
        let agemonth = currentmonth-agearray[1];
        let ageday  = currentdatenew - agearray[2];
        console.log(ageday)
        if(agemonth<0){
            agemonth = 12+agemonth
            ageyear = ageyear - 1;
        }
        
        if(ageday<0)
        {
            ageday = -(ageday);
        }
        // console.log(ageyear,"===",agemonth)

        let displayage = document.getElementsByClassName("displayage")[0];
        // alert(displayage)
        displayage.innerText = `Your age is ${ageyear} year ${agemonth} months and ${ageday} days`;

            

    }
})

 