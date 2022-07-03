function Greetings() {
  let names = [];
  let count = 0;
  


  function keepTrackOfNames(name) {
    let letters = /^[A-Za-z]+$/;
    // let name = thename.value.match(letters);
      
    if (names.indexOf(name) < 0 && name.match(letters)) {
      names.push(name);
      localStorage.setItem(name, name);

      return true;
    } else {
      return false;
    }
  }
  function resetNames(){
    localStorage.clear();
  }

  function counter() {

    names.length++
  
    return names;
  }


  return {
    keepTrackOfNames,
    resetNames,
    counter,
   
  };
}


