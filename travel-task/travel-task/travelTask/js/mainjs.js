
let countries = {
  data: [
    {
      id: 0,
      countryName: "Turkey",
      price: "130",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://www.planetware.com/photos-large/TR/turkey-aya-sofya-exterior.jpg"
    },
    {
      id: 1,
      countryName: "Maldives",
      price: "949",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://media.worldnomads.com/travel-safety/maldives/maldives-tropical-beach-gettyimages-159618430.jpg",
    },
    {
      id: 2,
      countryName: "Egypt",
      price: "599",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://goingawesomeplaces.com/wp-content/uploads/2020/02/pyramids-valley-hotel-rooftop.jpg",
    },
    {
      id: 3,
      countryName: "Dubai",
      price: "929",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://bilder.bild.de/fotos-skaliert/professor-erklaert-in-bild-dubai-will-mit-elektro-schocks-regen-erzeugen-14a2abd8a19a4877adedbab2bf90292d-77151250/11,c=0,h=1026.bild.jpg",
    },
    {
      id: 4,
      countryName: "malaysia",
      price: "529",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://www.3roos.com/wp-content/uploads/2021/07/29682676_m-scaled.jpg",
    },
    {
      id: 5,
      countryName: "İtalya",
      price: "789",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://media-cdn.tripadvisor.com/media/photo-s/16/dd/3e/b1/el-coliseo-de-roma.jpg",
    },
    {
      id: 6,
      countryName: "Paris",
      price: "898",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://www.europeturs.com/wp-content/uploads/2019/11/paris-1.jpg",
    },
    {
      id: 7,
      countryName: "Japan",
      price: "849",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero.jpg",
    },
    {
      id: 8,
      countryName: "Iraq",
      price: "929",
      description: 'Lorem ipsum dolor sit amet',
      image: "https://bilder.bild.de/fotos-skaliert/professor-erklaert-in-bild-dubai-will-mit-elektro-schocks-regen-erzeugen-14a2abd8a19a4877adedbab2bf90292d-77151250/11,c=0,h=1026.bild.jpg",
    }
    
  ],
};

 // ........................................................
// change navbar Properties on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('.fixed-top').addClass('opaque');
  } else {
    $('.fixed-top').removeClass('opaque');
  }
});

 // .......................

// change hamburger icon to close icon And vice versa
document.getElementById('navbar-toggler-icon').onclick = function () {
  document.getElementById('navbar-toggler-icon').classList.toggle('imgmenu');
  document.getElementById('navbar-toggler-icon').classList.toggle('imgclose');
}

 // ........................................................


// this function running when the (Home page) is load
// purpose from this function (create card for each country with info(data) for each country )
function myfunc() {
  for (let i of countries.data) {
    let div_box = document.createElement('div');
    div_box.classList.add('box');

    let imgBx = document.createElement('div');
    imgBx.classList.add('imgBx');

    let imagem = document.createElement("img");
    imagem.setAttribute("src", i.image);
    imgBx.appendChild(imagem);
    div_box.appendChild(imgBx);

    // console.log(div_box);

    let content = document.createElement('div');
    content.classList.add('content');
    let titlem = document.createElement('h2');
    titlem.innerHTML = i.countryName;
    content.appendChild(titlem);

    let par = document.createElement('p');
    par.innerHTML = i.description;
    content.appendChild(par);

    let price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = " " + "$" + i.price;
    content.appendChild(price);

    let book_country = document.createElement('a');
    book_country.innerHTML = 'book now';
    book_country.addEventListener('click', function () {
      window.location.assign("detailsPage.html?id=" + i.id);
    });
    content.appendChild(book_country);

    div_box.appendChild(content);

    document.getElementById('container_div').appendChild(div_box);

  }
}

 // ........................................................



// this function running when the (detailsPage) is load
// function to show details page

function showDetails() {

  // window.location.search >> return ?id=0 such as string
  var m = window.location.search
  console.log(m);     // ?id=6
  var f = m.split('=');
  console.log(f);     // ['?id', '6']
  var t = f[1];
  console.log(t);     // 6

  //to pass data from js to details page
  // here pass only NameCountry
  document.getElementById('Book-your-ticket').innerHTML = " " + countries.data[t].countryName;

  // ........................................

  // this function to
  // pass countryName from object to select>option(element)
  (function funcopt() {
    var form_control = document.getElementById('form-control');
    // this loop to create option element and put inside it countryName
    for (let j of countries.data) {
      let opt = document.createElement('option');
      opt.innerHTML = j.countryName;
      form_control.appendChild(opt);
    }
  })();

   // ........................................

  // function to calculate age
  function fun_age() {
    // separate day , month , year from date-input
    var date_input = document.getElementById('date-input').value;
    var date_input_user = new Date(date_input);
    console.log(date_input_user);
    day = date_input_user.getDate();
    month = date_input_user.getMonth() + 1;
    year = date_input_user.getFullYear();
    //just testing
    // console.log(day);
    // console.log(month);
    // console.log(year);

    // date_current = new Date(); >> It represents the current date
    var date_current = new Date();
    console.log(date_current);
    // separate day , month , year from date_current
    day_current = date_current.getDate();
    month_current = date_current.getMonth() + 1;
    year_current = date_current.getFullYear();
    //just testing
    // console.log(day_current);
    // console.log(month_current);
    // console.log(year_current);

    //check user provide input or not
    if (date_input == null || date_input == '') {
      document.getElementById("result").innerHTML = "**Choose a date please!";
      return false;
    }
    if (year < 1900 || year > year_current) {
      document.getElementById("result").innerHTML = "**Choose a correct date!";
      return false;
    }
    else {
      if (day == day_current && month == month_current) {
        return document.getElementById("result").innerHTML = "Your Age:" + " " + (year_current - year) + '\n' + 'Happy Birthday' + '\n' + 'you get discount 50%';
      }
      else {
        return document.getElementById("result").innerHTML = "Your Age:" + " " + (year_current - year);
      }
    }
  }

// ........................................

  // this code >> when click submit(button) >> Any data entered into the form will be displayed in a alert
  document.getElementById('submit-btn').addEventListener('click', function () {
    // Calling a function that returns the age
    fun_age();
    let a_age = fun_age();
    
    // Get the data values entered in the form
    let a1 = document.getElementById('firstName').value,
      a2 = document.getElementById('lastName').value,
      a3 = document.getElementById('email').value,
      a4 = a_age,
      a5 = document.getElementById('max-price').value;
    // a6 = document.getElementById(countery).value;

    // check if any input not null or empty
    if (a1 !== '' && a1 !== null && a2 !== '' && a2 !== null && a3 !== '' && a3 !== null && a4 != false && a5 !== '' && a5 !== null) {
      // display data in alert
      alert('FullName:' + ' ' + a1 + ' ' + a2 + '\n' + 'Email:' + ' ' + a3 + '\n' + ' ' + a4 + '\n');
    }
  })
}

// ..........................................................................

/*-------------------------------------
        countDownDate
--------------------------------------*/
// Set the date we're counting down to
var countDownDate = new Date("Mar 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



