
class SORTINGCOMPONAT extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="option">
        <div class="container">
            <div class="content-select">
                <select onchange="Selecttype(this)">
                    <option>الاسم من أ-ي</option>
                    <option>الاسم من ي-أ</option>
                </select>
            </div>
        </div>
    </div>
        
        `
    }
}


class PRODUCTCOMPONAENT extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<section>
<div class="product">
    <div class="container">
    <div class="grid">
        <div class="content-product">
            <div class="show-product">
            </div>

            <div class="information-product">
            <h3>التصفيه حسب</h3>
                <div class="price">
                    <p class="flex_prise"><i onclick="showprice(this)" class="fa-solid fa-plus"></i>السعر</p>
                    <div class="range">
                        <div class="content-range">
                            <div class="progress"></div>
                            <input oninput="SelectPrice(this)" type="range" class="min-range" min="0" max="5000"
                                value="5000">
                            <input oninput="SelectPrice(this)" type="range" class="max-range" min="0"
                                max="10000" value="10000">
                        </div>
                    </div>
                </div>



                <div class="size">
                    <p class="title-size"><i onclick="showSize(this)" class="fa-solid fa-plus"></i><span>المقاس<span/></p>
                    <div class="content-size">
                        <div class="content_size_input content">
                            <p class="flex_inputsize"><span>S</span><input onchange="SelectSize(this)" type="checkbox"></p>
                            <p class="flex_inputsize"><span>M</span><input onchange="SelectSize(this)" type="checkbox"></p>
                            <p class="flex_inputsize"><span>L</span><input onchange="SelectSize(this)" type="checkbox"></p>
                            <p class="flex_inputsize"><span>XL</span><input onchange="SelectSize(this)" type="checkbox"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
</div>
</section>
`
    }
}

class OVERLAYBULLETS extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<div class="loading-overlay">
<div class="loading-circle"></div>
<div class="loading-circle"></div>
<div class="loading-circle"></div>
</div>

`
    }
}

class FAVOURITEPRODUCT extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="favourite-dress">
        </div>
        `
    }
}
class PRANDPRODUCT extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="prand-product">
        <div class="container">
            <div class="content-prands-product">
                <div class="card">
                    <div class="desc-prand">
                        <h3>دفع عند الاستلام</h3>
                        <p>الدفع عن استلام الطلب</p>
                    </div>
                    <i class="fa-regular fa-handshake"></i>
                </div>
                <div class="card">
                    <div class="desc-prand">
                        <h3>ضمان المنتجات</h3>
                        <p>نضمن جودة منتجاتنا</p>
                    </div>
                    <i class="fa-solid fa-award"></i>
                </div>
                <div class="card">
                    <div class="desc-prand">
                        <h3>الإرجاع والاستبدال</h3>
                        <p>استرجاع و استبدال سهل</p>
                    </div>
                    <i class="fa-solid fa-reply"></i>
                </div>
                <div class="card">
                    <div class="desc-prand">
                        <h3>شحن آمن و سريع</h3>
                        <p>توصيل إلى جميع مناطق المملكة</p>
                    </div>
                    <i class="fa-solid fa-truck"></i>
                </div>
            </div>
        </div>
    </section>
    
        `
    }
}


class WHATAPLINK extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="whatsapplink">
        <a href=""><img src="../imges/whatsapp.png" alt=""></a>
    </div>

        `
    }
}

class MYTHEPRODUCT extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="my-product">
        <div class="container">
            <div class="content-myproduct">
            </div>
        </div>
    </section>
        `
    }
}

class OVRLAYIMG extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="overlay-img">
        <div class="action-width-img">
            <button onclick="incresWidthImg()">+</button>
            <button onclick="decreseWidthImg()">-</button>
        </div>
        <div onclick="close_overlay()" class="close">
            <span>x</span>
        </div>
        <img src="" alt="" class="main-overlay">

        <div class="child-img">
            <img onclick="cliked_img(this.src)" src="" alt="" class="child-overlay-1">
            <img onclick="cliked_img(this.src)" src="" alt="" class="child-overlay-2">
            <img onclick="cliked_img(this.src)" src="" alt="" class="child-overla-3">
        </div>
    </div>
        `
    }
}

customElements.define('ovrly-img', OVRLAYIMG);
customElements.define('mythe-product', MYTHEPRODUCT);
customElements.define('whatsapp-link', WHATAPLINK);
customElements.define('qulity-product', PRANDPRODUCT);
customElements.define('favourite-product', FAVOURITEPRODUCT);
customElements.define('overlay-bultes', OVERLAYBULLETS);
customElements.define('products-components', PRODUCTCOMPONAENT)
customElements.define('sortin-componant', SORTINGCOMPONAT)