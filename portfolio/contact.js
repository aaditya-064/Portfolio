const currentForm = document.querySelector("#data_form")
const userName = document.querySelector("#userName")
const emailAddress= document.querySelector("email")
const phoneNumber = document.querySelector("#phoneNumber")
const messageBox = document.querySelector("#messageBox")
const submitButton = document.querySelector("#submitButton")


currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert('form submitted')
})

submitButton.addEventListener("click", ()=>{
    userName.innerHTML= " "
    emailAddress.innerHTML= " "
    phoneNumber.innerHTML= " "
    messageBox.innerHTML= " "   
    
})