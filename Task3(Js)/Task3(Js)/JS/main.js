var birthdate = prompt("Please state when were you born:");
var age = (2022 - birthdate);
window.alert("your are" + " " + age + " years old ")
if ((age) < 18) {
    confirm("Sorry your age is under 18 years old you gotta leave!");
    location.reload();
} else {
    window.alert("welcome to our travling agancey website")
}

function showDetailesOne() {
    document.getElementById("losAngelesAdress").innerHTML = "Address:" + " " + "los Angeles ";
    document.getElementById("losAngelesAdressDate").innerHTML = "Date:" + " " + "20/03/2022 - 27/03/2022";
    document.getElementById("losAngelesAdressType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("losAngelesAdressPrice").innerHTML = "Price:" + " " + "MYR 3814";
}

function showdetailesTwo() {
    document.getElementById("dohaAdress").innerHTML = "Address:" + " " + "Doha";
    document.getElementById("dohaDate").innerHTML = "Date:" + " " + "02/03/2022 - 07/03/2022";
    document.getElementById("dohaType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("dohaPrice").innerHTML = "Price:" + " " + "MYR 4553";
}


function showdetailesThree() {
    document.getElementById("newYourkAdress").innerHTML = "Address:" + " " + "New Yourk";
    document.getElementById("newYourkDate").innerHTML = "Date:" + " " + "02/03/2022 - 07/03/2022";
    document.getElementById("newYourkType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("newYourkPrice").innerHTML = "Price:" + " " + "MYR 4553";
}

function showdetailesFour() {
    document.getElementById("EdinburghAdress").innerHTML = "Address:" + " " + "Edin burgh ";
    document.getElementById("EdinburghDate").innerHTML = "Date:" + " " + "20/03/2022 - 27/03/2022";
    document.getElementById("EdinburghType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("EdinburghPrice").innerHTML = "Price:" + " " + "MYR 3814";

}

function showdetailesfive() {
    document.getElementById("IstanbulAdress").innerHTML = "Address:" + " " + "Istanbul";
    document.getElementById("IstanbulDate").innerHTML = "Date:" + " " + "02/03/2022 - 07/03/2022";
    document.getElementById("IstanbulType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("IstanbulPrice").innerHTML = "Price:" + " " + "MYR 4553";

}

function showdetailessix() {
    document.getElementById("LosAngelesAddress").innerHTML = "Address:" + " " + "Los Angeles ";
    document.getElementById("LosAngelesDate").innerHTML = "Date:" + " " + "20/03/2022 - 27/03/2022";
    document.getElementById("LosAngelesType").innerHTML = "Class type:" + " " + "Economy Class";
    document.getElementById("LosAngelesPrice").innerHTML = "Price:" + " " + "MYR 3814";

}






function hidthedetailesOne() {
    document.getElementById("losAngelesAdress").innerHTML = "Address:";
    document.getElementById("losAngelesAdressDate").innerHTML = "Date:";
    document.getElementById("losAngelesAdressType").innerHTML = "Class type:";
    document.getElementById("losAngelesAdressPrice").innerHTML = "Price:";

}

function hiddetaileTwo() {
    document.getElementById("dohaAdress").innerHTML = "Address:";
    document.getElementById("dohaDate").innerHTML = "Date:";
    document.getElementById("dohaType").innerHTML = "Class type:";
    document.getElementById("dohaPrice").innerHTML = "Price:";
}

function hiddetailesThree() {
    document.getElementById("newYourkAdress").innerHTML = "Address:";
    document.getElementById("newYourkDate").innerHTML = "Date:";
    document.getElementById("newYourkType").innerHTML = "Class type:";
    document.getElementById("newYourkPrice").innerHTML = "Price:";
}

function hiddetailesFour() {
    document.getElementById("EdinburghAdress").innerHTML = "Address:";
    document.getElementById("EdinburghDate").innerHTML = "Date:";
    document.getElementById("EdinburghType").innerHTML = "Class type:";
    document.getElementById("EdinburghPrice").innerHTML = "Price:";

}

function hiddetailesfive() {
    document.getElementById("IstanbulAdress").innerHTML = "Address:";
    document.getElementById("IstanbulDate").innerHTML = "Date:";
    document.getElementById("IstanbulType").innerHTML = "Class type:";
    document.getElementById("IstanbulPrice").innerHTML = "Price:";

}

function hiddetailessix() {
    document.getElementById("LosAngelesAddress").innerHTML = "Address:";
    document.getElementById("LosAngelesDate").innerHTML = "Date:";
    document.getElementById("LosAngelesType").innerHTML = "Class type:";
    document.getElementById("LosAngelesPrice").innerHTML = "Price:";
}