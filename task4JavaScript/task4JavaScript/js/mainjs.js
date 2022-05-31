
/*-------------------------------------
   // code to Dark Mode
--------------------------------------*/
function myFunctionn() {
  var element = document.body;
  return element.classList.toggle("darkmode");
  // console.log(element.classList.toggle("darkmode")); 
  
  // here i'm playing with code ^J^
  // element.style.backgroundColor = '#f5f8ff';
  //  if(element.classList.contains("body")){
  //   element.classList.add("darkmode");
  //  }else {
  //   if(element.classList.contains("darkmode")){
  //     element.classList.remove("body");
  //   }
  //  }
  
}


/*-------------------------------------
   // code to check age > 18 or not 
--------------------------------------*/
let wrapperId = document.getElementById('wrapperId');
document.getElementById('body').onload = function(){
  // confirm return >> true or false
  let confirmAge = confirm('Are you 18 years old ?');
  // if your age = 18 then return true
  if (confirmAge == true ){
    // open prompt box >> ask >> How old are you?
    let promptAge = prompt("How old are you?");
    // console.log(promptAge);
    // when your age >= 18 >> make page is display block
    if (promptAge >= 18){
      wrapperId.style.display = 'block';
    }
    // when your age < 18 >> open (about:blank) and close the current page
    else{
      let myWindow = window.open("", "MsgWindow", "width=600,height=400,top=200,left=400");
      // insert h2 tag into (about:blank)
      myWindow.document.write("<h2>Persons under the age of 18 are not allowed to enter</h2>");
      // .close >> to close the current Page(Home.html)
      window.close();
    }
  }
}


/*-------------------------------------
   // code >>  GPA calculator 
--------------------------------------*/
let btnGpa = document.getElementById('btnGpa');
console.log(btnGpa);

btnGpa.onclick = function(){
  let inputGpa = document.getElementById('inputGpa').value;
  if(inputGpa <= 4 && inputGpa >= 3.5 ){
    document.getElementById('resultGpa').innerHTML = 'A+';
    return false;
  }else{
    if(inputGpa < 3.5 && inputGpa >= 3 ){
      document.getElementById('resultGpa').innerHTML = 'A';
      return false;
    }else{
      if(inputGpa < 3 && inputGpa >= 2.5 ){
        document.getElementById('resultGpa').innerHTML = 'B+';
      return false;
      }
      else{
        if(inputGpa < 2.5 && inputGpa >= 2.3 ){
          document.getElementById('resultGpa').innerHTML = 'B';
        return false;
        }
        else{
          if(inputGpa < 2.3 && inputGpa >= 2 ){
            document.getElementById('resultGpa').innerHTML = 'C+';
          return false;
          }
          else{
            if(inputGpa < 2 && inputGpa >= 1.5 ){
              document.getElementById('resultGpa').innerHTML = 'C';
              return false;
            }
          }
        }
      }
    }
  }
}


/*-------------------------------------
   // code >>  get Name Day 
--------------------------------------*/
let btngetDay = document.getElementById('btngetDay');
console.log(btngetDay);
btngetDay.onclick = function(){
  let inputgetDay = document.getElementById('inputgetDay').value;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(inputgetDay);
  //console.log(d);  // Sun Feb 27 2022 03:00:00 GMT+0300 (Arabian Standard Time)
  console.log(d.getDay()); // return 0 if sunday , 1 if Monday , 2 if Tuesday , 3 if Wednesday, 4 if Thursday, 5 if friday, 6 if saturday
  var dayName = days[d.getDay()];
  console.log(dayName);
  document.getElementById('resultgetDay').innerHTML = dayName;
  return false;
}


/*-------------------------------------
   // code >> Choose an image from a set of images
   // with code >> buttons >> show and hide image
--------------------------------------*/
// main picture
var picture = document.querySelector('#pic');
// side pictures
var picture1 = document.querySelector('#pic1');
var picture2 = document.querySelector('#pic2');
var picture3 = document.querySelector('#pic3');
var picture4 = document.querySelector('#pic4');
var picture5 = document.querySelector('#pic5');
var picture6 = document.querySelector('#pic6');

// Main picture container
var mainContainer = document.querySelector('#picture');

// list of pictures
picList = [picture1, picture2, picture3, picture4, picture5, picture6]

// Active side picture
let picActive = 1;

// Add a boxshadow to the first picture(current active picture)
picture1.classList.add('img-active');

// change image 
function changeImage(imgSrc, n){
  // this will change the main image
  picture.src = imgSrc;
  // removing boxshadow from the previous active side picture
  picList[picActive-1].classList.remove('img-active');
  // Add box shadow to active side picture
  picList[n-1].classList.add('img-active');
  // update the active side picture
  picActive = n;
}

// width and height of main picture
let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;
//console.log(w1, h1);

// code >> buttons >> show and hide image
document.getElementById('btn').onclick=()=>{
  mainContainer.style.display = 'none';
}
document.getElementById('btn2').onclick=()=>{
  mainContainer.style.display = 'block';
}


/*-------------------------------------
   // code >> get Data from inputs and show it in alert
--------------------------------------*/
var  btn_form = document.getElementById('btn_form');
  btn_form.addEventListener("click", ()=>{
    var nameIdx = document.getElementById('nameId').value,
    emailId = document.getElementById('emailId').value,
    passwordId = document.getElementById('passwordId').value,
    selectedCollageId = document.getElementById('selectedCollageId').value,
    selectedDepartId = document.getElementById('selectedDepartId').value;
      console.log(nameIdx);
      alert(nameIdx + '\n' + emailId + '\n' + selectedCollageId + '\n' +  selectedDepartId);
    });
























