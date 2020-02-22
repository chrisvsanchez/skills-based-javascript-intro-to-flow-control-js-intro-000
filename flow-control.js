function basicTeenager(age) {
  if (age >= 13 && age < 20){
  return "You are a teenager!";
  }else if( age <13 || age > 19){
    return 
  }
}

function teenager(age) {
  if( age > 12 && age < 20){
  return "You are a teenager!";
  }else{
  return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }else if( age < 13){
    return "You are a kid";
  }else if (age > 19){
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
return age > 12 && age < 20 ?
"You are a teenager": "You are not a teenager"
}

function switchAge(age) {
<<<<<<< HEAD
  switch(age) {
    case 13:
      return "You are a teenager";
    case 14:
      return "You are a teenager";
    case 15:
      return "You are a teenager";
    case 16:
      return "You are a teenager";
    case 17:
      return "You are a teenager";
    case 18:
      return "You are a teenager";
    case 19:
      return "You are a teenager";
      
     default:
      return "You have an age";
=======
  switch(age >= 13 && age <= 19) {
    case age:
      return "You are a teenager";
    
     default:
       return "You have an age";
>>>>>>> 117f827e8dfd9771d9dbfa6827f48a1ffd266412
  }
}
