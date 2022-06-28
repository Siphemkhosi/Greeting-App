function Greetings() {
  let names = [];
  let count = 0;
  // let localStorageNames = [];
  // let namesGreeted = {};
  
  // function allStorage() {
  //   (keys = Object.keys(localStorage)), (i = keys.length);

  //   while (i--) {
  //     localStorageNames.push(localStorage.getItem(keys[i]));

  //     const node = document.createElement("li");
  //     const textnode = document.createTextNode(localStorageNames[0]);
  //     node.appendChild(textnode);
  //     document.getElementsByClassName("list_names").appendChild(node);
  //   }

  //   return localStorageNames;
  // }

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
  localStorage.getItem()
  count++;

  return count;
  }


  return {
    keepTrackOfNames,
  
    counter,
   
  };
}


