function Greetings() {
  let names = [];
  let english = "";
  let sotho = "";
  let count = 0;
//   let localStorageNames = [];
  
//   function allStorage() {
//     (keys = Object.keys(localStorage)), (i = keys.length);

//     while (i--) {
//       localStorageNames.push(localStorage.getItem(keys[i]));

//       const node = document.createElement("li");
//       const textnode = document.createTextNode(localStorageNames[0]);
//       node.appendChild(textnode);
//       document.getElementsByClassName("list_names").appendChild(node);
//     }

//     return localStorageNames;
//   }

  function keepTrackOfNames(name) {
    if (names.indexOf(name) < 0) {
      names.push(name);
      localStorage.setItem(name, name);

      return true;
    } else {
      return false;
    }
  }

  function counter() {
    count++;
    return count;
  }
  function greetInEnglish(English) {
    return english;
  }

  function greetInSotho(Sotho) {
    sotho = Sotho;
    return sotho;
  }

  return {
    keepTrackOfNames,
    greetInEnglish,
    greetInSotho,
    counter,
    // allStorage,
  };
}

// buttonElem.addEventListener("click", function(e){
// e.preventDefault();

// const radioButtonElem = document.querySelector('input[name="radioButn"]:checked').value;

// if(radioButtonElem === "Xhosa"){
//     paragraphElem.innerHTML = "Molo " + inputElem.value
// }

// if(radioButtonElem === "English"){
//     paragraphElem.innerHTML = "Hello " + inputElem.value
// }

// if(radioButtonElem === "Sotho"){
//     paragraphElem.innerHTML = "Dumela " + inputElem.value
// }

// })
