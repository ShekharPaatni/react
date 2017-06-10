export  function emailValidation(email){
    if(!(email.match(/^[\w\-_$\.]+@[\w]+((\.)((\w){2,4})){1,4}$/))){
        return "The email id is not valid";
    }else{
        return 'verified'
    }
}
export function passwordValidation(pass){
    if(pass.length<6 || pass.length>15){
        return "The password length should be between 6 to 14 character";
    }else if(!pass.match(/^.*(?=.{6,14})(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!@#$%]+$/)){
        return "The password should be Alphanumeric or special character(@,_,-)";
    }
    else {
        return 'verified'
    }
}