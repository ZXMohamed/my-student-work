var product = {
        name : [
            "Tshirt and pants" , 
            "Red dress" , 
            "Black Dress" ,
            "White Tshirt and black pants" ,
            "Short white dress" ,
            "White shirt and shorts"
        ] ,
        price : [
            "$ 30.00" ,
            "$ 15.00" ,
            "$ 20.00" ,
            "$ 35.00" ,
            "$ 18.00" ,
            "$ 45.00" 
        ],
        productType : [
            "Man" , 
            "Women" ,
            "Kids" 
        ] ,
    };

    function pro1(){
        document.getElementById("demo-1").innerHTML = "name :" + " " + product.name[0] +
        "<br/>" +"price :" + " " + product.price[0] + "<br/>" + "productType :" + " " + product.productType[0];
    }
    function pro2(){
        document.getElementById("demo-2").innerHTML = "name :" + " " + product.name[1] +
        "<br/>" +"price :" + " " + product.price[1] + "<br/>" + "productType :" + " " + product.productType[1];
    }
    function pro3(){
        document.getElementById("demo-3").innerHTML = "name :" + " " + product.name[2] +
        "<br/>" +"price :" + " " + product.price[2] + "<br/>" + "productType :" + " " + product.productType[1];
    }
    function pro4(){
        document.getElementById("demo-4").innerHTML = "name :" + " " + product.name[3] +
        "<br/>" +"price :" + " " + product.price[3] + "<br/>" + "productType :" + " " + product.productType[0];
    }
    function pro5(){
        document.getElementById("demo-5").innerHTML = "name :" + " " + product.name[4] +
        "<br/>" +"price :" + " " + product.price[4] + "<br/>" + "productType :" + " " + product.productType[2];
    }
    function pro6(){
        document.getElementById("demo-6").innerHTML = "name :" + " " + product.name[5] +
        "<br/>" +"price :" + " " + product.price[5] + "<br/>" + "productType :" + " " + product.productType[0];
    }
