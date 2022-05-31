
let products = {
  data: [
    {
      id : 0,
      productName: "lorem jghf",
      productTitle: 'Historical book shop',
      category: "Historical",
      price: "30",
      image: "https://images-na.ssl-images-amazon.com/images/I/41X2i47NXUL._SX435_BO1,204,203,200_.jpg"
    },
    {
      id : 1,
      productName: "lorem jghf",
      productTitle: 'GraphicNovel book shop',
      category: "GraphicNovel",
      price: "49",
      image: "https://eloquentjavascript.net/2nd_edition/img/cover.png",
    },
    {
      id : 2,
      productName: "lorem jghf",
      productTitle: 'Fantasy book shop',
      category: "Fantasy",
      price: "99",
      image: "https://images-na.ssl-images-amazon.com/images/I/71ip1mxZ8cL.jpg",
    },
    {
      id : 3,
      productName: "lorem jghf",
      productTitle: 'Historical book shop',
      category: "Historical",
      price: "29",
      image: "https://images-na.ssl-images-amazon.com/images/I/41X2i47NXUL._SX435_BO1,204,203,200_.jpg",
    },
    {
      id : 4,
      productName: "lorem jghf",
      productTitle: 'Classics book shop',
      category: "Classics",
      price: "129",
      image: "https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg",
    },
    {
      id : 5,
      productName: "lorem jghf",
      productTitle: 'GraphicNovel book shop',
      category: "GraphicNovel",
      price: "89",
      image: "https://eloquentjavascript.net/2nd_edition/img/cover.png",
    },
    {
      id : 6,
      productName: "lorem jghf",
      productTitle: 'Classics book shop',
      category: "Classics",
      price: "189",
      image: "https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg",
    },
    {
      id : 7,
      productName: "lorem jghf",
      productTitle: 'GraphicNovel book shop',
      category: "GraphicNovel",
      price: "49",
      image: "https://eloquentjavascript.net/2nd_edition/img/cover.png",
    },
  ],
};



for (let i of products.data) {
  // //create col-md-3
  // let col_md_3 = document.createElement("div");
  // col_md_3.classList.add("col-md-3");
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  // col_md_3.appendChild(card);
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container_card = document.createElement("div");
  container_card.classList.add("container_card");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container_card.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container_card.appendChild(price);

  // button
  let buttonDetails = document.createElement('button');
  buttonDetails.innerHTML = 'show Details';
  buttonDetails.classList.add("buttonDetails");
  buttonDetails.onclick = function(){
        // to show Details page
        window.location.assign("detailsPage.html?id=" + i.id);
        // console.log('ggggggg');
  }
  container_card.appendChild(buttonDetails);
  card.appendChild(container_card);
  document.getElementById("div-books").appendChild(card);
}


//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("activejs");
    } else {
      button.classList.remove("activejs");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Initially display all products
window.onload = () => {
  filterProduct("all");
};





// function to show details page
function showDetails(){
  // window.location.search
  // ترجع ?id=0 
  // او مثلا ?id=1
  // وترجعها بصورة string
  var m = window.location.search
  console.log(m);     // ?id=6
  var f = m.split('=');
  console.log(f);     // ['?id', '6']
  var t = f[1];
  console.log(t);     // 6
  // document.write(products.data[t].category);

  //to pass data from js to details page
  document.getElementById('productTitle').innerHTML = products.data[t].productTitle;
  document.getElementById('productPrice').innerHTML = '$' + products.data[t].price;
  document.getElementById('productImage').src = products.data[t].image;
}




// function >> onclick button increase value in basket(cart >> nav)
function funcAddCart(){
  var span_Text = document.getElementById("countCart").innerText;
  // to convert datatype from string to number
  var span_num = ~~span_Text;
  // console.log(typeof(~~span_Text));
  // console.log(span_num);
  var span_num = span_num + 1;
  // add new value of span_num to basket(cart >> nav)
  document.getElementById("countCart").textContent = span_num;
  
}


