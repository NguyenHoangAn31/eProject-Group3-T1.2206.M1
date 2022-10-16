cart = [];

var shoppingCart = (function () {

    function haha(name, pricenew, imgsrc, content) {
        this.name = name;
        this.pricenew = pricenew;
        this.imgsrc = imgsrc;
        this.content = content

    }

    function saveCart() {
        localStorage.setItem('shoppingCarts', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCarts'));
    }


    if (localStorage.getItem("shoppingCarts") != null) {
        loadCart();
    }



    var obj = {};


    //add  
    obj.addItemToCart = function (name, pricenew, imgsrc, content) {
        for (var i in cart) {
            if (cart[i].name === name) {
                alert('san pham da co trong gio hang')
                return;
            }
        }
        var item = new haha(name, pricenew, imgsrc, content);
        cart.push(item);
        saveCart();
    }

    //remove
    obj.removeItemFromCartAll = function (name) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    }


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

    return obj;
})();





// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();

    var name = $(this).data('name');
    var imgsrc = $(this).data('imgsrc');
    var content = $(this).data('content');
    var pricenew = Number($(this).data('pricenew'));
    shoppingCart.addItemToCart(name, pricenew, imgsrc, content);
    displayCart();

});









function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = `<tr>
    <th class="w-50">
      <h5> <b> Product Details </b> </h4>
    </th>
    <th>
      <h5> <b> Price </h4> <b>
    </th>
    <th>
      <h5> <b> Quantity <b> </h4>
    </th>
    <th>
      <h5> <b> Subtotal <b> </h4>
    </th>
    <th>
      <h5> <b> Action <b> </h4>
    </th>
  </tr>`;

    $.each(cartArray, function (k, v) {

        output += `<tr>
    
        <td>
           <img src="${v.imgsrc}" width="125" height="125">  
           <p class="d-inline-block ps-3">${v.name}</p>
        </td>
        

        <td>
        <p class="h6 mt-5">$${v.pricenew}</p>
        </td>

        <td>
          <div class="btn-group mt-5">
            <button type="button" class="btn btn-outline-primary" style="border-right: none;">-</button>
            <button type="button" class="btn btn-outline-primary" style="border-left: none;border-right: none;">1</button>
            <button type="button" class="btn btn-outline-primary" style="border-left: none;">+</button>
          </div>
        </td>

        <td><p class="h6 mt-5">$${v.pricenew}</td>

        <td >
            <button class="delete-item btn btn-danger btn-sm mt-5" data-name="${v.name}"> <i class="fa fa-trash-o"> </i> </button>
        </td>

    </tr>
    `

    });

    output += `<tr>
    <td colspan="3"> </td>

    <td class="text-center h4">Total Price : </td>

    <td> 
    <a href="#!CheckOut" class="btn btn-success"> Checkout <i class="fa fa-angle-right"></i> </a> </td>
</tr>`

    document.getElementById('showcart').innerHTML = output
}



$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})



displayCart();
