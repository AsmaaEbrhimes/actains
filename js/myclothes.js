let data = JSON.parse(localStorage.getItem('clothes'));
let idclothes = localStorage.getItem('idclothes')
let fiendProduct = data.find((ele) => ele.id == idclothes)
let content_cart = document.querySelector('.content-cart')


function showProduct() {
    let content_myproduct = document.querySelector('.content-myproduct')
    content_myproduct.innerHTML = `
                <div class="card-1">
                    <img src="${fiendProduct.img}">
                    <div class="content-product">
                        <h1>${fiendProduct.title}</h1>
                        <p>نقاط المكافأة:${fiendProduct.point}</p>
                        <p>SKU:006-0069301</p>
                        <p>${fiendProduct.salary} S.R</p>
                        <p class="point">السعر بنقاط المكافآت : 303</p>
                    </div>
                    <div class="sale">
                        <img src="../imges/download.svg" alt="" class="tamara">
                        <p>قسم فاتورتك علي 4 دفعات بقيمه 87.25</p>
                    </div>
                    <div class="size">
                        <h4>المقاس*</h4>
                        <span class='sizeproduct'> ${fiendProduct["size-1"]}</span>
                        <span class='sizeproduct'> ${fiendProduct["size-2"]}</span>
                        <span class='sizeproduct'> ${fiendProduct["size-3"]}</span>
                        <span class='sizeproduct'> ${fiendProduct["size-4"]}</span>
                    </div>
                    <div class="product-dress">
                        <span onclick='Addtowishlist(${fiendProduct.id})'><i class="fa-regular fa-heart heart"></i></span>
                        <span class="shoppingbag"><button onclick='AddtoCartdress(${fiendProduct.id})'>اضافه للسله<i class="fa-solid fa-bag-shopping"></i></button></span>
                        <span class="add-number">
                        <input type="text" value='1' class='input_num'>
                            <span>
                                <p><i onclick='increaseNumber()' class="fa-solid fa-angle-up plus"></i></p>
                               <p><i onclick='decreseNumber()'  class="fa-solid fa-angle-down minus"></i></p>
                            </span>
                        </span>
                        <span class="social">
                            <i class="fa-brands fa-facebook facebook"></i>
                            <i class="fa-brands fa-twitter twitter"></i>
                            <i class="fa-brands fa-whatsapp whatsapp"></i>
                        </span>
                    </div>
                </div>
                <div class="card-2">
                    <div class="content">
                        <p class="none">الوان اخري</p>
                        <div class="main">
                            <img onclick='showOverlayImg(this.src)' src="${fiendProduct.img}" alt=""class='mains'>
                        </div>
                        
                    </div>
                </div>
`
}
showProduct()

const showOverlayImg = (img) => {
    document.querySelector('.overlay-img').classList.add('scale')
    let main_overlay = document.querySelector('.main-overlay')
    main_overlay.src = img

}

const close_overlay = () => {
    document.querySelector('.overlay-img').classList.remove('scale')
}

const checkSize = () => {
    let sizes = document.querySelectorAll('.sizeproduct');
    sizes.forEach((size) => {
        if (size.textContent.trim() === 'undefined') {
            size.remove();
        }
    });
}
checkSize();

const incresWidthImg = () => {
    let main_overlay = document.querySelector('.main-overlay')
    var currentWidth = parseFloat(window.getComputedStyle(main_overlay).width);
    var newWidth = currentWidth * 1.1;
    main_overlay.style.width = newWidth + 'px';
}

const decreseWidthImg = () => {
    let main_overlay = document.querySelector('.main-overlay')
    var currentWidth = parseFloat(window.getComputedStyle(main_overlay).width);
    var newWidth = currentWidth * 0.9;
    main_overlay.style.width = newWidth + 'px';
}


let array_product = [];
const savedproductcart = JSON.parse(localStorage.getItem('productclothes'));
if (savedproductcart) {
    array_product = savedproductcart;
}

function AddtoCartdress(id) {
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    if (username && email) {
        let data_products = data.find((ele) => ele.id === id);
        if (!array_product.some((item) => item.id === id)) {
            array_product.push(data_products);
            localStorage.setItem('productclothes', JSON.stringify(array_product));
            showCartShopping()
            ShowProductCart();

        }
    } else {
        return false;
    }
}


const ShowProductCart = () => {
    let product_cart = document.querySelector('.product-cart')
    let data_cart = JSON.parse(localStorage.getItem('productclothes'))
    product_cart.classList.add('block')
    setTimeout(() => {
        product_cart.classList.remove('block')
    }, 1500);
    data_cart.map((ele) => {
        product_cart.innerHTML = `
        <div class="desc">
            <p>${ele.title}</p>
            <img src="${ele.img}" alt="">
        </div>
        <a href='../html/shoppingcart.html'><button><span>معاينه السله</span></button></a>
        `
    })
}

let array = []
const savedData = JSON.parse(localStorage.getItem('favouriteclothes'));
if (savedData) {
    array = savedData
}

function Addtowishlist(id) {
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    if (username && email) {
        let data_fiend = data.find((ele) => ele.id === id);
        if (!array.some((item) => item.id === id)) {
            array.push(data_fiend);
            localStorage.setItem('favouriteclothes', JSON.stringify(array));
            showProductWishlist()
        }
    } else {
        return false;
    }
}



const showProductWishlist = () => {
    let favourite_dress = document.querySelector('.favourite-dress')
    let data_favourite = JSON.parse(localStorage.getItem('favouriteclothes'));
    data_favourite.map((ele) => {
        favourite_dress.classList.add('block')
        setTimeout(() => {
            favourite_dress.classList.remove('block')
        }, 4000);
        favourite_dress.innerHTML = `
        <div class="container">
         <div class="content">
         <h4>${ele.title}</h4>
        <img src="${ele.img}" alt="">
        </div>
       <p> يجب عليك<a href="/"> تسجيل دخول</a> او <a href="/">انشاء حساب جديد</a> قبل البدء في اضافه المنتجات
          <a href ='/html/favourite.html'>هل تريد الذهاب لسله الرغبات</a> </p>
        </div>
        `
    })
}


const increaseNumber = () => {
    let inputNum = document.querySelector('.input_num');
    let value = parseInt(inputNum.value) + 1;
    if (value > 0) {
        inputNum.value = value;
        let cartProducts = JSON.parse(localStorage.getItem('productclothes'));
        // البحث عن المنتج في سلة التسوق
        let productIndex = cartProducts.findIndex((item) => item.id === fiendProduct.id);

        if (productIndex !== -1) {
            // إذا وجد المنتج، قم بتحديث qty
            cartProducts[productIndex].qty = value;
        }
        // حفظ السلة مرة أخرى في localStorage
        localStorage.setItem('productclothes', JSON.stringify(cartProducts));
        showCartShopping();
    }
    return false
}

const decreseNumber = () => {
    let inputNum = document.querySelector('.input_num');
    let value = parseInt(inputNum.value) - 1;
    if (value > 0) {
        inputNum.value = value;
        let cartProduct = JSON.parse(localStorage.getItem('productclothes'));
        let productIndex = cartProduct.findIndex((item) => item.id === fiendProduct.id);
        if (productIndex !== -1) {
            cartProduct[productIndex].qty = value;
        }
        localStorage.setItem('productclothes', JSON.stringify(cartProduct));
        showCartShopping();
    }
    return false
}

