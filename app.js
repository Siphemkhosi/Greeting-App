const buttonElem = document.querySelector("button")
const inputElem = document.querySelector(".inputname")
const paragraphElem = document.querySelector(".response")

buttonElem.addEventListener("click", function(e){
e.preventDefault()
const radioButtonElem = document.querySelector('input[name="radioButn"]:checked').value;

if(radioButtonElem === "Xhosa"){
    paragraphElem.innerHTML = "Molo " + inputElem.value
}

if(radioButtonElem === "English"){
    paragraphElem.innerHTML = "Hello " + inputElem.value
}

if(radioButtonElem === "Sotho"){
    paragraphElem.innerHTML = "Dumela " + inputElem.value
}

})