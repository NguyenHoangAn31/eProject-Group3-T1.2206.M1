
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
    { "id": 0,  "imgsrc": "IMGS/homepage/doctor1.jpg",  "name":"product1" ,  "content": "đây là sản phẩm 1"  },
    { "id": 1,  "imgsrc": "IMGS/homepage/doctor2.jpg",  "name":"product2" ,  "content": "đây là sản phẩm 2"  },
    { "id": 2,  "imgsrc": "IMGS/homepage/doctor3.jpg",  "name":"product3" ,  "content": "đây là sản phẩm 3"  },
    { "id": 3,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product4" ,  "content": "đây là sản phẩm 4"  },
    { "id": 4,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product5" ,  "content": "đây là sản phẩm 5"  },
    { "id": 5,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product6" ,  "content": "đây là sản phẩm 6"  },
    { "id": 6,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product7" ,  "content": "đây là sản phẩm 7"  },
    { "id": 7,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product8" ,  "content": "đây là sản phẩm 8"  },
    { "id": 8,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product9" ,  "content": "đây là sản phẩm 9"  },
    { "id": 9,  "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product10" , "content": "đây là sản phẩm 10" },
    { "id": 10, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product11" , "content": "đây là sản phẩm 11" },
    { "id": 11, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product12" , "content": "đây là sản phẩm 12" },
    { "id": 12, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product13" , "content": "đây là sản phẩm 13" },
    { "id": 13, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product14" , "content": "đây là sản phẩm 14" },
    { "id": 14, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product15" , "content": "đây là sản phẩm 15" },
    { "id": 15, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product16" , "content": "đây là sản phẩm 16" },
    { "id": 16, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product17" , "content": "đây là sản phẩm 17" },
    { "id": 17, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product18" , "content": "đây là sản phẩm 18" },
    { "id": 18, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product19" , "content": "đây là sản phẩm 19" },
    { "id": 19, "imgsrc": "IMGS/homepage/doctor4.jpg",  "name":"product20" , "content": "đây là sản phẩm 20" },
]





var check = "";
mang.forEach(element => {
    check += `
    <div class="item" >
            <div class="card text-center">
                <img src="${element.imgsrc}" onclick="productdetail(${element.id})"  width="100%" height="175">
                <h3>${element.name}</h3>
                <p class="price">$19.99</p>
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









function productdetail(n){
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
          <span>3 Reviews</span>
          <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
          <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
          <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
          <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating"
            value="1" id="1"><label for="1">☆</label>

        </div>

        <div style="clear: both;">
          <h4>$00.00</h3>
            <h6><del>$00.00</del></h5>
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