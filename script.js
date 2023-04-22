//targeted the both password inputs

const pword = document.querySelector("#password");
const confirmPword = document.querySelector("#confirm")


//targeted both error divs
const error = document.querySelector(".error")
const error2 = document.querySelector(".error-2")
confirmPword.addEventListener('keyup', () =>{


    //the conditions to display the error divs if they don't match
if(pword.value != confirmPword.value){

    error.classList.add('show')
    error2.classList.add('show')
}
else {

    error.classList.remove('show')
    error2.classList.remove('show')
}

})