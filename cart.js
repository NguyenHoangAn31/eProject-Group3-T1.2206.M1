cart = [];
var shoppingCart = (function () {
    function haha(name, pricenew, imgsrc, status , count) {
        this.name = name;
        this.pricenew = pricenew;
        this.imgsrc = imgsrc;
        this.status = status;
        this.count = count;
    }
    function saveCart() {
        sessionStorage.setItem('shoppingCarts', JSON.stringify(cart));
    }
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCarts'));
    }
    if (sessionStorage.getItem("shoppingCarts") != null) {
        loadCart();
    }

    var obj = {};

    //Add product to cart
    obj.addItemToCart = function (name, pricenew , imgsrc , status , count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                alert('Products Already In The Cart')
                return;
            }
        }
        var item = new haha(name, pricenew, imgsrc , status , count);
        cart.push(item);
        saveCart();
    }

    //Remove product from cart
    obj.removeItemFromCartAll = function (name) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    }
    //Plus count
    obj.plus = function (name) {
        for (var i in cart) {
            if (name === cart[i].name) {
                cart[i].count++;
                saveCart();
            }
        }
    }

    //subtract count
    obj.substract = function (name) {
        for (var i in cart) {
            if (name === cart[i].name) {
                cart[i].count--;
                saveCart();
                if (cart[i].count == 0) {
                    cart.splice(i, 1);
                    saveCart();
                }

            }

        }
    }

    

    //total count
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }


    //Price all
    obj.total = function () {
        var total = 0;
        for (var i in cart) {
            total += cart[i].count * cart[i].pricenew
        }
        return total;
    }

    
    return obj;

})();




// Add item in homepage
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var imgsrc = $(this).data('imgsrc');
    var pricenew = Number($(this).data('pricenew'));
    var status = $(this).data('status');
    shoppingCart.addItemToCart(name, pricenew, imgsrc, status , 1);
    displayCart();

});


//Add item in product detail
$('.productdetail').on("click", ".addtocart", function (event) {
    event.preventDefault();

    var name = $(this).data('name');
    var imgsrc = $(this).data('imgsrc');
    var pricenew = Number($(this).data('pricenew'));
    var status = $(this).data('status');
    shoppingCart.addItemToCart(name, pricenew, imgsrc, status , 1);
    displayCart();
})







//show cart 
function displayCart() {

    var cartArray = shoppingCart.listCart();
    var totalcount = cartArray.length
    var output = `<tr>
    <th class="w-50"><h5> <b> Product Details </b> </h4></th>
    <th><h5> <b> Price </h4> <b></th>
    <th><h5> <b> Quantity <b> </h4></th>
    <th><h5> <b> Subtotal <b> </h4></th>
    <th><h5> <b> Action <b> </h4></th>
  </tr>`;

    $.each(cartArray, function (k, v) {

        output += `<tr>
    
        <td class="text-start ps-5"><img src="${v.imgsrc}" width="75" height="125">  <p class="d-inline-block ps-3">${v.name}</p></td>
        

        <td><p class="h6 mt-5 text-danger">$${v.pricenew}</p></td>

        <td>
          <div class="btn-group" style="margin-top:38px">
            <button  data-name="${v.name}" type="button" class="btn btn-outline-primary subtract" style="border-right: none;">-</button>
            <input type="button" value="${v.count}" class="btn btn-outline-primary" style="border-left: none;border-right: none;">
            <button data-name="${v.name}" type="button" class="btn btn-outline-primary plus" style="border-left: none;">+</button>
          </div>
        </td>

        <td><p class="h6 mt-5 text-danger">$${v.pricenew * v.count}</td>

        <td ><button class="delete-item btn btn-danger btn-sm" style="margin-top:38px" data-name="${v.name}"> <i class="fa fa-trash-o"> </i> </button></td>

    </tr>
    `

    });


    output += `<tr>
    <td colspan="2"> </td>

    <td colspan="2" class="text-center h4">Total Price : $<span id="total"></span> </td>

    <td> 
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
    Check Out
  </button>
  </td>
</tr>`
    document.getElementById('totalcount').innerHTML = totalcount;
    document.getElementById('showcart').innerHTML = output;
    document.getElementById('total').innerHTML = shoppingCart.total();
    document.getElementById('checkout').innerHTML = shoppingCart.total();

}


//delete product from card
$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


//plus count
$('.show-cart').on("click", ".plus", function (event) {
    var name = $(this).data('name');

    shoppingCart.plus(name);
    displayCart();
})

//substract count
$('.show-cart').on("click", ".subtract", function (event) {
    var name = $(this).data('name');

    shoppingCart.substract(name);
    displayCart();
})



displayCart()

