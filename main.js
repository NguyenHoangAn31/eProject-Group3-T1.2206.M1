
var header = `<div class="header position-fixed top-0 end-0 start-0" style="z-index:3" >
<nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
        <a class="navbar-brand" href=""><img src="IMGS/main/logo_new.gif" width="150" height="40"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav w-100 justify-content-evenly" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <li class="nav-item">
                    <a class="d-block p-2" href="index.html"><i class="fa-solid fa-house"></i> Home</a>
                </li>
                <li class="nav-item hover">
                    <a class="d-block p-2" href="">Problems We Treat</a>
                    <ul class="hidden">
                        <li><a class="d-block p-2" href="relievestress.html">Relieve Stress</a></li>
                        <li><a class="d-block p-2" href="enhancerelaxation.html">Enhance Relaxation</a></li>
                        <li><a class="d-block p-2" href="impovecirculation.html">Impove Circulation</a></li>
                        <li><a class="d-block p-2" href="injuryrecovery.html">Injury Recovery</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="shoppingcart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                <li class="nav-item">
                    <a class="d-block p-2" href="login.html">Login <i class="fa-solid fa-circle-user"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>`

var footer = `<div class="footer">
<div class="row container m-auto py-5 mt-5">
    <div class="col-lg-3">
        <img src="IMGS/main/logo.jpg" alt="" width="200" height="100">
        <h4>Chiropractic Clinic</h4>
        <p>Provide the best healthcare service for the spine and effectively address musculoskeletal problems
            without drugs or surgery.</p>
    </div>
    <div class="col-lg-3">
        <h3>Userful Links <i class="fa-solid fa-link"></i></h3>
        <a href="">How It Works</a>
        <a href="">Reviews</a>
        <a href="">Term & Conditions</a>
        <a href="">Privacy Policy</a>
        <a href=""><i class="fa-solid fa-sitemap"></i> Site Map</a>
    </div>
    <div class="col-lg-3">
        <h3> Contact Us <i class="fa-solid fa-envelope"></i></h3>
        <a href=""><i class="fa-solid fa-question"></i> Help Center</a>
        <a href=""><i class="fa-brands fa-facebook"></i> Facebook</a>
        <a href=""><i class="fa-brands fa-instagram"></i> Instagram</a>
        <a href=""><i class="fa-solid fa-question"></i> About Us</a>
    </div>
    <div class="col-lg-3">
        <h3>Location <i class="fa-solid fa-location-dot"></i></h3>
        <h4>ZaraTherapyClinic - HCM</h4>
        <h4>590 Cach Mang Thang 8</h4>
        <p><i class="fa-solid fa-phone"></i> Tel : +0347809470</p>
        <p><i class="fa-solid fa-user"></i> Ascess : 281,027</p>
        <p><i class="fa-solid fa-globe"></i> Online : 273</p>
    </div>
</div>
<div class="container-fluid text-center">© Copyright 2022 - ZaraTherapyClinic</div>
</div>`

$("#header").html(header);
$("#footer").html(footer);


AOS.init();


var mang = [
    { "id": 0, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product1", "content": "đây là sản phẩm 1", "review": 200 },
    { "id": 1, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product2", "content": "đây là sản phẩm 2", "review": 178 },
    { "id": 2, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product3", "content": "đây là sản phẩm 3", "review": 347 },
    { "id": 3, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product4", "content": "đây là sản phẩm 4", "review": 79 },
    { "id": 4, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product5", "content": "đây là sản phẩm 5", "review": 183 },
    { "id": 5, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product6", "content": "đây là sản phẩm 6", "review": 249 },
    { "id": 6, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product7", "content": "đây là sản phẩm 7", "review": 357 },
    { "id": 7, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product8", "content": "đây là sản phẩm 8", "review": 173 },
    { "id": 8, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product9", "content": "đây là sản phẩm 9", "review": 346 },
    { "id": 9, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product10", "content": "đây là sản phẩm 10", "review": 258 },
    { "id": 10, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product11", "content": "đây là sản phẩm 11", "review": 112 },
    { "id": 11, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product12", "content": "đây là sản phẩm 12", "review": 76 },
    { "id": 12, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product13", "content": "đây là sản phẩm 13", "review": 87 },
    { "id": 13, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product14", "content": "đây là sản phẩm 14", "review": 98 },
    { "id": 14, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product15", "content": "đây là sản phẩm 15", "review": 154 },
    { "id": 15, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product16", "content": "đây là sản phẩm 16", "review": 193 },
    { "id": 16, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product17", "content": "đây là sản phẩm 17", "review": 34 },
    { "id": 17, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product18", "content": "đây là sản phẩm 18", "review": 74 },
    { "id": 18, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product19", "content": "đây là sản phẩm 19", "review": 85 },
    { "id": 19, "pricenew": 20, "priceold": 22, "imgsrc": "IMGS/homepage/doctor1.jpg", "name": "product20", "content": "đây là sản phẩm 20", "review": 53 },
]



var page1 = ""
for (var i = 0; i < 5; i++) {
        page1 += `
        <div class="item" >
                <div class="card text-center">
                    <img onclick="productdetail(${mang[i].id})" src="${mang[i].imgsrc}"   width="100%" height="175">
                    <h3>${mang[i].name}</h3>
                    <p class="price">$${mang[i].pricenew}</p>
                    <p>${mang[i].content}</p>
                    <p><button class="btn btn-primary">Add to Cart</button></p>
                </div>
        </div>`
}
$("#page1").html(page1)


var page2 = ""
for (var i = 5; i < 10; i++) {
        page2 += `
        <div class="item" >
                <div class="card text-center">
                    <img onclick="productdetail(${mang[i].id})" src="${mang[i].imgsrc}"   width="100%" height="175">
                    <h3>${mang[i].name}</h3>
                    <p class="price">$${mang[i].pricenew}</p>
                    <p>${mang[i].content}</p>
                    <p><button class="btn btn-primary">Add to Cart</button></p>
                </div>
        </div>`
}
$("#page2").html(page2)


var page3 = ""
for (var i = 10; i < 15; i++) {
        page3 += `
        <div class="item" >
                <div class="card text-center">
                    <img onclick="productdetail(${mang[i].id})" src="${mang[i].imgsrc}"   width="100%" height="175">
                    <h3>${mang[i].name}</h3>
                    <p class="price">$${mang[i].pricenew}</p>
                    <p>${mang[i].content}</p>
                    <p><button class="btn btn-primary">Add to Cart</button></p>
                </div>
        </div>`
}
$("#page3").html(page3)


var page4 = ""
for (var i = 15; i < 20; i++) {
        page4 += `
        <div class="item" >
                <div class="card text-center">
                    <img onclick="productdetail(${mang[i].id})" src="${mang[i].imgsrc}"   width="100%" height="175">
                    <h3>${mang[i].name}</h3>
                    <p class="price">$${mang[i].pricenew}</p>
                    <p>${mang[i].content}</p>
                    <p><button class="btn btn-primary">Add to Cart</button></p>
                </div>
        </div>`
}
$("#page4").html(page4)







var check = "";
mang.forEach(element => {
    check += `
    <div class="item" >
            <div class="card text-center">
                <img onclick="productdetail(${element.id})" src="${element.imgsrc}"   width="100%" height="175">
                <h3>${element.name}</h3>
                <p class="price">$${element.pricenew}</p>
                <p>${element.content}</p>
                <p><button class="btn btn-primary">Add to Cart</button></p>
            </div>
    </div>`;
});

$("#checkcheck").html(check);



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


function productdetail(n) {
    var indexarr = mang[n];
    var contain = `<div class="productdetail" id="productdetail" style="padding-top:100px">

    <div class="h1 text-center pb-5">Product Detail</div>
    <div class="row container justify-content-center" style="margin:auto">
      <div style="width: 375px;text-align: center;">
        <img src="${indexarr.imgsrc}" width="350" height="350">
      </div>

      <div style="width:500px">
        <div class="h2">${indexarr.name}</div>
        <div class="rating">
          <span>${indexarr.review} Reviews</span>
          <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
          <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
          <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
          <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating"
            value="1" id="1"><label for="1">☆</label>

        </div>

        <div style="clear: both;">
          <h4>$${indexarr.pricenew}</h3>
            <h6><del>$${indexarr.priceold}</del></h5>
        </div>
        <div>
          ${indexarr.content}
        </div>
        <div class="p-5" style="float:right;">
          <button class="btn btn-primary">Add To Card</button>
        </div>

      </div>



    </div>
  </div>`;
    $("#productdetail").html(contain);
}