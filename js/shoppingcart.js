
let shopping_jalabia = JSON.parse(localStorage.getItem('productjalabia')) ?? []
let shopping_clothes = JSON.parse(localStorage.getItem('productclothes')) ?? []
let shopping_jambsot = JSON.parse(localStorage.getItem('productjambsot')) ?? []
let shopping_dress = JSON.parse(localStorage.getItem('productdress')) ?? []
let arry_shopping = [...shopping_jalabia, ...shopping_clothes, ...shopping_jambsot, ...shopping_dress]



const ShoppingProducts = () => {
    const tabel = document.querySelector('.tabel')
let map_shopping = arry_shopping.map((ele)=>{
    return `
    <div class="flex_tabel">
    
    <p class="desc">${ele.title}</p>
    <div class="action_shopping">
          <span class='delete' onclick='deletproductShopping(${ele.id})'>x</span>
          <span>
          <p id= number-product-shopping-${ele.id}" class='number-product-shopping'>1</p>
         </span>
          <span class="qty" onclick='UpdateQty(${ele.id})'><i class="fa-solid fa-rotate rotate"></i></span>
        
         <span class='icons'>
         <i onclick='IncreseProductShopping(this)' data-productid="${ele.id}" class="fa-solid fa-angle-up"></i>
        <i onclick='DecreseProductShopping(this)' data-productid="${ele.id}" class="fa-solid fa-angle-down"></i>
        </span>
        </div>
        
    <div><img class="img_shopping" src="${ele.img}" alt=""></div>
  
    </div>
    
    `
})
 tabel.innerHTML = map_shopping.join('')
}
ShoppingProducts()


function IncreseProductShopping(element) {
    let number = element.closest('div').querySelector('.number-product-shopping');
    
    if (parseInt(number.innerHTML) > 0) {
        let value = parseInt(number.innerHTML) + 1;
        number.innerHTML = value;
    }
    return false;
}

const DecreseProductShopping = (element) => {
    let number = element.closest('div').querySelector('.number-product-shopping');
    
    if (parseInt(number.innerHTML) > 0) {
        let value = parseInt(number.innerHTML) - 1;
        number.innerHTML = value;
    }
    
    return false;
}



function UpdateQty(Id) {
    let foundProduct = arry_shopping.find(
        (ele) => ele.id === Id
    );

    let numberproductshopping = document.getElementById(`number-product-shopping-${Id}`).textContent;

    foundProduct.qty = numberproductshopping;

    const filteredArry = arry_shopping.filter(
        (product) => product.category === foundProduct.category
    );

    localStorage.setItem(
        `product${foundProduct.category}`,
        JSON.stringify(filteredArry)
    );

    showCartShopping();
}

const deletproductShopping = (id) => {
    arry_shopping = arry_shopping.filter((ele) => ele.id !== id);
    localStorage.setItem('productjalabia', JSON.stringify(arry_shopping.filter((ele) => ele.category !== 'clothes')));
    localStorage.setItem('productclothes', JSON.stringify(arry_shopping.filter((ele) => ele.category !== 'clothes')));
    localStorage.setItem('productjambsot', JSON.stringify(arry_shopping.filter((ele) => ele.category !== 'clothes')));
    localStorage.setItem('productdress', JSON.stringify(arry_shopping.filter((ele) => ele.category !== 'clothes')));
    ShoppingProducts(arry_shopping);
    showCartShopping()
}





















