function Greetings() {
  let names = [];
  let xhosa = "";
  let english = "";
  let sisitho = "";
  // let Name = "";
 
  function Xhosa(name){

    if (names.indexOf(name) < 0) {
         names.push(name);
         xhosa = "Molo " + name
  
  }
  return xhosa;
  }
  function English(name){
  
    if (names.indexOf(name) < 0) {
         names.push(name);
         english = "Hello " + name
  
  }
  return english;
  }
  
  function Sotho(name){
  
    if (names.indexOf(name) < 0) {
         names.push(name);
         sisitho = "Dumela " + name
  
  }
  return sisitho
  }

  // function keepTrackOfNames(name) {
  //   Name = name;
  //   // let letters = /^[A-Za-z]+$/;

  //   if (names.indexOf(Name) < 0 ) {
  //     names.push(Name);

      
  //     if (Name === xhosa) {
  //       xhosa = "Molo" + Name;
  //     xhosa
  //     }
  //     if (Name === english) {
  //       english = "Hello" + Name;
  //       english
  //     }
  //     if (Name === sisitho) {
  //       sisitho = "Dumela" + Name;
  //       sisitho;
  //     }

  //     return true;
  //   } else {

  //     return false;
  //   }
  // }
  // function resetNames() {
  //   localStorage.clear();
  // }

  function counter() {
    names.length++;

    return names;
  }

  return {
    Xhosa,
    English,
    Sotho,
    // keepTrackOfNames,
    // resetNames,
    counter,
  };
}
