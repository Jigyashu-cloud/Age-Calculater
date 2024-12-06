
//----------------------------------------------


var input
var dateEntered

document.getElementById("birthday").addEventListener("change", function() {
    input  = this.value;
});

function validateBirthdate(){
    
    var birthDate = new Date(input);
    
    if (isNaN(birthDate)) {
        emptyBirthday();
        alert('Please enter a valid date');
        return false;
    }
    else
        return true;
    
}

function showBirthday(age,yearAge,monthAge,dayAge){
    document.querySelector('i').style.visibility = 'visible'
    document.querySelector(".Result").style.visibility = 'visible'
    document.querySelector("#date").style.visibility = 'visible'
    document.querySelector("#date").innerHTML =age;
    document.querySelector("#year").innerHTML =yearAge;
    document.querySelector("#month").innerHTML =monthAge;
    document.querySelector("#day").innerHTML =dayAge;
}

function emptyBirthday(){
    document.querySelector('i').style.visibility = 'hidden'
    document.querySelector(".Result").style.visibility = 'hidden'
    document.querySelector("#date").style.visibility = 'hidden'
}


function calculate(){

    const currentDate = new Date();
    const dateCheck = new Date(document.querySelector("#birthday").value)
    
    console.log(dateCheck)

    if(validateBirthdate()) {
    
        dateEntered = new Date(input);

        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();
        
        var dateYear = dateEntered.getFullYear();
        var dateMonth = dateEntered.getMonth();
        var dateDay = dateEntered.getDate();


        yearAge = currentYear-dateYear

        var monthAge
        var dayAge

        if(currentMonth >= dateMonth)
            monthAge = currentMonth-dateMonth
        else{
            yearAge--;
            monthAge = (12+currentMonth - dateMonth);
        }

        if(currentDay >= dateDay)
            dayAge = currentDay-dateDay
        else{
            monthAge--;
            dayAge = (31 + currentDay - dateDay)

            if (monthAge < 0) {  
                monthAge = 11;  
                yearAge--;  
            }  
        }

        
        
        var age
        if ( (yearAge > 0) && (monthAge == 0) && (dayAge == 0) )  {
            age  = yearAge +  " years old. Happy Birthday!!";
            showBirthday(age,yearAge,monthAge,dayAge)
        }

        else if( (yearAge ==0) && (monthAge == 0) && (dayAge == 1))
        {
            age  = dayAge +" days old."  + "Welcome to the Earth! \n It's first day on Earth!";
            showBirthday(age,yearAge,monthAge,dayAge)
        }

        else if((monthAge <= 0) || (dayAge <= 0) || (yearAge <=0)){
            emptyBirthday();
            alert("Invalid Birth date! Please Enter A Valid Age.")
        }

        else{
            age  = yearAge + " years, " + monthAge + " months and " + dayAge +" days old." ;
            showBirthday(age,yearAge,monthAge,dayAge)
        }

        

    } 
    
}

