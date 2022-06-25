let theDom = Greetings();

const buttonElem = document.querySelector("button")           
const inputElem = document.querySelector(".inputname")
const paragraphElem = document.querySelector(".response")
const theCounterElem = document.querySelector(".greeted_count")

let localStorageNames = [];
let list = document.querySelector(".list_names")

  function allStorage() {
    list.innerHTML = "";
    (keys = Object.keys(localStorage)), (i = keys.length);

    while (i--) {
      localStorageNames.push(localStorage.getItem(keys[i]));

      const node = document.createElement("li");
      const textnode = document.createTextNode(localStorageNames[localStorageNames.length - 1]);
      node.appendChild(textnode);
      list.appendChild(node);

    
    }

    return localStorageNames;
  }

  

buttonElem.addEventListener("click", function(e){
e.preventDefault();

const radioButtonElem = document.querySelector('input[name="radioButn"]:checked').value;

if(radioButtonElem === "Xhosa" && theDom.keepTrackOfNames(inputElem.value)){
    
    paragraphElem.innerHTML = "Molo " + inputElem.value
    allStorage();
    theCounterElem.innerHTML = theDom.counter();
    
}

if(radioButtonElem === "English" && theDom.keepTrackOfNames(inputElem.value)){

    paragraphElem.innerHTML = "Hello " + inputElem.value
    allStorage();
    theCounterElem.innerHTML = theDom.counter();
   
}

if(radioButtonElem === "Sotho" && theDom.keepTrackOfNames(inputElem.value)){
    paragraphElem.innerHTML = "Dumela " + inputElem.value
    allStorage();
    theCounterElem.innerHTML = theDom.counter();
   

}

if(radioButtonElem === "Xhosa" && theDom.keepTrackOfNames(inputElem.value) === false){

    paragraphElem.innerHTML = "Molo " + inputElem.value
}

if(radioButtonElem === "English" && theDom.keepTrackOfNames(inputElem.value) === false){

    paragraphElem.innerHTML = "Hello " + inputElem.value
}
if(radioButtonElem === "Sotho" && theDom.keepTrackOfNames(inputElem.value) === false){

    paragraphElem.innerHTML = "Dumela " + inputElem.value
}


})


















