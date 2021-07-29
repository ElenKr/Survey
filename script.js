function checkdata(){
    var age=document.getElementById("age");

    if(isNaN(age)){
        alert("Please enter a number");
        age.focus();
        return false;
    }
    alert("Form validation is successful.")
    return true;

}
