let data = JSON.parse(localStorage.getItem('dress'));
let dressId = localStorage.getItem('iddress')
let fiendProduct = data.find((ele) => ele.id == dressId)
let content_cart = document.querySelector('.content-cart')


function showProduct() {
    let content_myproduct = document.querySelector('.content-myproduct')
    content_myproduct.innerHTML = `
    
                <div class="card-1">
                <div class="select_img">
                    <img onclick='select_src(this.src)' src="${fiendProduct['img-color-main']}">
                    <img onclick='select_src_second(this.src)' src="${fiendProduct['img-color-second']}" class='second'>
                </div>

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
                    <div class="img_product">
                        <div class="main">
                        <img  onclick='showOverlayImg(this.src)' src="${fiendProduct["img-color-main"]}" alt=""class='mains'>
                        </div>
                        <div class="content-main">
                        <img onclick='changeimg(this.src)' src="${fiendProduct["img-color-main-one"]}" alt="" class='main-1'>
                        <img onclick='changeimg(this.src)' src="${fiendProduct["img-color-main-three"]}" alt=""class='main-2'>
                        <img onclick='changeimg(this.src)' src="${fiendProduct["img-color-main"]}" alt=""class='main-3'>
                        </div>
                     </div>
                    </div>
                </div>
              
`
}

showProduct()


let array_product = []
const savedproductcart = JSON.parse(localStorage.getItem('productdress'));
if (savedproductcart) {
    array_product = savedproductcart
}


function AddtoCartdress(id) {
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    if (username && email) {
        let data_products = data.find((ele) => ele.id === id);
        if (!array_product.some((item) => item.id === id)) {
            array_product.push(data_products);
            localStorage.setItem('productdress', JSON.stringify(array_product));
            showCartShopping()
            ShowProductCart();
        }
    } else {
        return false;
    }
}



const ShowProductCart = () => {
    let product_cart = document.querySelector('.product-cart')
    let data_cart = JSON.parse(localStorage.getItem('productdress'))
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
const savedData = JSON.parse(localStorage.getItem('favouritedress'));
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
            localStorage.setItem('favouritedress', JSON.stringify(array));
            showProductWishlist()
        }
    } else {
        return false;
    }
}

const showProductWishlist = () => {
    let favourite_dress = document.querySelector('.favourite-dress')
    let data_favourite = JSON.parse(localStorage.getItem('favouritedress'));
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
       <p> <span class="none">يجب عليك</span><a href="../html/login.html"> تسجيل دخول</a> <span class="none">او</span> <a href="../html/formregister.html">انشاء حساب جديد</a> <span>قبل البدء في اضافه المنتجات</span>
       <a href ='../html/favourite.html'>هل تريد الذهاب لسله الرغبات</a></p>
        </div>
        `
    })
}


const select_src = (imgSrc) => {
    let dressId = localStorage.getItem('iddress')
    let fiendProduct = data.find((ele) => ele.id == dressId)
    document.querySelector('.mains').src = imgSrc
    document.querySelector('.main-1').src = fiendProduct['img-color-main-one']
    document.querySelector('.main-2').src = fiendProduct['img-color-main-two']
    document.querySelector('.main-3').src = fiendProduct['img-color-main-three']
}

const select_src_second = (imgsrc) => {
    let dressId = localStorage.getItem('iddress')
    let fiendProduct = data.find((ele) => ele.id == dressId)
    document.querySelector('.mains').src = imgsrc
    document.querySelector('.main-1').src = fiendProduct['img-color-second-one']
    document.querySelector('.main-2').src = fiendProduct['img-color-second-two']
    document.querySelector('.main-3').src = fiendProduct['img-color-second-three']
}


const changeimg = (srcimg) => {
    document.querySelector('.mains').src = srcimg
}

const showOverlayImg = (srcimg) => {
    document.querySelector('.overlay-img').classList.add('scale')
    let main_overlay = document.querySelector('.main-overlay')
    let child_overlay_1 = document.querySelector('.child-overlay-1')
    let child_overlay_2 = document.querySelector('.child-overlay-2')
    let child_overlay_3 = document.querySelector('.child-overla-3')
    main_overlay.src = srcimg
    child_overlay_1.src = document.querySelector('.main-1').src
    child_overlay_2.src = document.querySelector('.main-2').src
    child_overlay_3.src = document.querySelector('.main-3').src
}

const close_overlay = () => {
    document.querySelector('.overlay-img').classList.remove('scale')
}

const cliked_img = (img) => {
    let main_overlay = document.querySelector('.main-overlay')
    main_overlay.src = img
}


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


const increaseNumber = () => {
    let inputNum = document.querySelector('.input_num');
    let value = parseInt(inputNum.value) + 1;
    if (value > 0) {
        inputNum.value = value;
        let cartProducts = JSON.parse(localStorage.getItem('productdress'));
        // البحث عن المنتج في سلة التسوق
        let productIndex = cartProducts.findIndex((item) => item.id === fiendProduct.id);

        if (productIndex !== -1) {
            // إذا وجد المنتج، قم بتحديث qty
            cartProducts[productIndex].qty = value;
        }

        // حفظ السلة مرة أخرى في localStorage
        localStorage.setItem('productdress', JSON.stringify(cartProducts));
        showCartShopping();
    }
    return false
}


const decreseNumber = () => {
    let inputNum = document.querySelector('.input_num');
    let value = parseInt(inputNum.value) - 1;
    if (value > 0) {
        inputNum.value = value;
        let cartProduct = JSON.parse(localStorage.getItem('productdress'));
        let productIndex = cartProduct.findIndex((item) => item.id === fiendProduct.id);
        if (productIndex !== -1) {
            cartProduct[productIndex].qty = value;
        }
        localStorage.setItem('productdress', JSON.stringify(cartProduct));
        showCartShopping();
    }
    return false
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

