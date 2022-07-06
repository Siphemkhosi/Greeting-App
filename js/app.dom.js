let theDom = Greetings();

const buttonElem = document.querySelector("button");
const inputElem = document.querySelector(".inputname");
const paragraphElem = document.querySelector(".response");
const theCounterElem = document.querySelector(".greeted_count");
const list = document.querySelector(".list_names");


// function allStorage() {
//   localStorageNames = [];
//   list.innerHTML = "";
  
//     localStorageNames.push(localStorage.getItem("names"));

//     const node = document.createElement("li");
//     const textnode = document.createTextNode(
//       localStorageNames[localStorageNames.length -1]
//     );
//     node.appendChild(textnode);
//     list.appendChild(node);
  

//   return localStorageNames;


// }

let text = localStorage.getItem("names");
let storage = JSON.parse(text);
document.querySelector(".response").innerHTML = storage;

buttonElem.addEventListener("click", function (e) {
  e.preventDefault();
const myArr = theDom.getNames()
const myJSON = JSON.stringify(myArr);
localStorage.setItem("names", myJSON);

  const radioButtonElem = document.querySelector(
    'input[name="radioButn"]:checked'
  ).value;


  localStorage.setItem(inputElem.value, inputElem.value);
  let userValidation = theDom.setUserValidation(inputElem.value);
  if(userValidation){
    if (radioButtonElem === "Xhosa") {
      paragraphElem.innerHTML = theDom.Xhosa(inputElem.value);
      // allStorage();
      theCounterElem.innerHTML = myArr.length;
    }
  
    if (radioButtonElem === "English") {
      paragraphElem.innerHTML = theDom.English(inputElem.value);
      // allStorage();
      theCounterElem.innerHTML = myArr.length;
    }
  
    if (radioButtonElem === "Sotho") {
      paragraphElem.innerHTML = theDom.Sotho(inputElem.value);
      // allStorage();
      theCounterElem.innerHTML = myArr.length;
    }
  
  } 
  
 
  // if (
  //   radioButtonElem === "Xhosa" &&
  //   theDom.Xhosa(inputElem.value) === false
  // ) {
  //   paragraphElem.innerHTML = theDom.Xhosa(inputElem.value)
  // }

  // if (
  //   radioButtonElem === "English" &&
  //   theDom.English(inputElem.value) === false
  // ) {
  //   paragraphElem.innerHTML = theDom.English(inputElem.value)
  // }

  // if (
  //   radioButtonElem === "Sotho" &&
  //   theDom.Sotho(inputElem.value) === false
  // ) {
  //   paragraphElem.innerHTML = theDom.Sotho(inputElem.value)
  // }
});

const resetElem = document.querySelector(".reset");

resetElem.addEventListener("click", function () {
  localStorageNames = localStorage.clear();
  list.innerHTML = "";
  theCounterElem.innerHTML = 0;
  paragraphElem.innerHTML = "";
});
