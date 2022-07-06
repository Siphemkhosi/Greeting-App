function Greetings() {
  let names = [];
  let xhosa = "";
  let english = "";
  let sisitho = "";
  // let Name = "";
 
  let letters = /^[A-Za-z]+$/g;

  function setUserValidation(name){
    if(letters.test(name)){
      return true;
    }else{
      return false;
    }
  }

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

  function getNames(){
    console.log(names)
   return names;
  }
 

  function counter() {
    names.length++;

    return names;
  }

  return {
    setUserValidation,
    Xhosa,
    English,
    Sotho,
    getNames,
    // keepTrackOfNames,
    // resetNames,
    counter,
  };
}
