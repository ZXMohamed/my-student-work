
///function alpha for firstname
function allowOnlyLetters(e, t) {

    var error_message = document.getElementById("error");
    if (window.event) {
        var charCode = window.event.keyCode;
    }
    else if (e) {
        var charCode = e.which;
    }
    else { return true; }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
    else {

        text = "Please enter only alphabets";
        error_message.innerHTML = text;
        return false;
    }
}
///function alpha for lastname
// function allowOnlyLetters(e, t) {

//     var error_message = document.getElementById("error2");
//     if (window.event) {
//         var charCode = window.event.keyCode;
//     }
//     else if (e) {
//         var charCode = e.which;
//     }
//     else { return true; }
//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
//         return true;
//     else {

//         text = "Please enter only alphabets";
//         error_message.innerHTML = text;
//         return false;
//     }
// }

// ///letters only for address
// function allowOnlyLetters(e, t) {

//     var error_message = document.getElementById("error3");
//     if (window.event) {
//         var charCode = window.event.keyCode;
//     }
//     else if (e) {
//         var charCode = e.which;
//     }
//     else { return true; }
//     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
//         return true;
//     else {

//         text = "Please enter only alphabets";
//         error_message.innerHTML = text;
//         return false;
//     }
// }

////>3
//     function validate(){
//         var name = document.getElementById("user").value;
//         var name2 = document.getElementById("user2").value;
//         var name3 = document.getElementById("user3").value;


//         var error_message = document.getElementById("error");
//         var error_message2 = document.getElementById("error2");
//         var error_message3 = document.getElementById("error3");



//         var text;
//         if(name.value ===""){
//             text = "Please Enter valid name";
//             error_message.innerHTML = text;
//             return false;
//           }
//         if(name.length < 3){
//           text = "Please Enter more than 3 letters";
//           error_message.innerHTML = text;
//           return false;
//         }
//         if(name2.length < 3){
//             text = "Please Enter more than 3 letters";
//             error_message2.innerHTML = text;
//             return false;
//           }
//           if(name3.length < 3){
//             text = "Please Enter more than 3 letters";
//             error_message3.innerHTML = text;
//             return false;
//           }

//         alert("Form Submitted Successfully!");
//         return true;

//  }
/////age validation
// function ageValidation() {
//     var er = document.getElementById("wrong");
//     var x = document.getElementById("age").value;
//     var text;
//     if (x < 1 || x > 100) {

//         text = "enter age between 1 to 100";
//         er.innerHTML = text;
//     }
// }
//gender function
function radioValidation() {

    var gender = document.getElementsByName('gender');
    var genValue = false;
    var errr2 = document.getElementById("wrong22");

    var text;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            genValue = true;
        }
    }
    if (!genValue) {
        text = "choose the gender! ";
        errr2.innerHTML = text;

        return false;
    }

}

//function add to write in table
document.getElementById("submite").addEventListener("click", function (event) {
    event.preventDefault();
    add();

});

document.getElementById("add").addEventListener("click", function (event) {
    event.preventDefault();
    add();

});



 function add() {
     var name = document.getElementById("user").value;
     var name2 = document.getElementById("user2").value;
     var age = document.getElementById("age").value;
     var txt = name + " " + name2;

     document.getElementById("name").innerHTML = txt;
     document.getElementById("rage").innerHTML = age;

 }
