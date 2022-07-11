function Greetings() {
  let names = [];
  let xhosa = "";
  let english = "";
  let sisitho = "";
  let firstName = "";
  // let letters = /^[A-Za-z]+$/g;

  function setUserValidation(name){
    if(/^[A-Za-z]+$/.test(name)){
      firstName = name;
      return true;
    }else{
   firstName = "";
      return false;
    }
  }
function getInput(){
return firstName;
}


  
  function Xhosa(){
     
      if (names.indexOf(firstName) < 0) {
        names.push(firstName);
        xhosa = "Molo " + firstName;
 
 }else{
  xhosa = "";
 }
  return xhosa;
  }

  function English(){
  
    if (names.indexOf(firstName) < 0) {
         names.push(firstName);
         english = "Hello " + firstName
  
  }else{
    english = "";
   }
  return english;
  }
  
  function Sotho(){
  
    if (names.indexOf(firstName) < 0) {
         names.push(firstName);
         sisitho = "Dumela " + firstName
  
        }else{
          sisitho = "";
         }
  return sisitho
  }

  function getNames(){
    // console.log(names)
   return names;
  }
 

  function counter() {
    names.length++;

    return names;
  }
  

  return {
    Xhosa,
    English,
    Sotho,
    getNames,
    setUserValidation,
    getInput,
    // keepTrackOfNames,
    // resetNames,
    counter,
  };
}

