class FOOTERcomponents extends HTMLElement{
constructor(){
    super()
this.innerHTML=`
<footer>
<div class="container">
    <p>اشترك في القائمة البريدية ليصلك كل جديدنا</p>
    <div class="content-footer">
        <div class="card">
            <button>اشتراك</button>
            <input type="text" placeholder="البريد الالكتروني">
        </div>
        <div class="card conecction">
            <div class="text-card">
                <p>الاتصال المباشر</p>
                <p>920010063</p>
            </div>
            <i class="fa-solid fa-phone-volume"></i>
        </div>
   <div class="card custmer">
            <div class="text-card">
                <p>خدمه العملاء</p>
                <p>920010063</p>
            </div>
            <i class="fa-brands fa-whatsapp"></i>
            </div>
     </div>
</div>
</footer>

<div class="soial-footer">
<div class="container">
    <div class="content-social-footer">
        <div class="card">
            <a href=""><i class="fa-brands fa-square-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-tiktok"></i></a>
            <a href=""></a>
        </div>
        <div class="card"><img src="../imges/applestory-150x92fill.png" alt="" srcset=""></div>
        <div class="card"><img src="../imges/googlepay-150x92fill.png" alt="" srcset=""></div>
    </div>
    <div class="sosial-list">
        <ul>
            <li>قسم الخدمات</li>
            <li>لارجاع و الاستبدال-</li>
            <li>خطوات الاستبدال والاسنرجاع</li>
            <li>التسوق الآمن</li>
            <li>طلباتي</li>
            <li>الشحن والتوصيل</li>
        </ul>
        <ul>
            <li>عن الموقع</li>
            <li>الشروط والاحكام</li>
            <li>طريقة التسجيل والطلب</li>
            <li>اتصل بنا</li>
            <li>سياسة الخصوصية</li>

        </ul>
        <ul>
            <li>قائمة الفوتر</li>
            <li>حسابي</li>
            <li>المفضلة1</li>
            <li>اتصل بنا</li>
            <li>من نحن</li>
        </ul>
    </div>

    <div class="image-social">
        <div class="card">
            <img src="../imges/2560px-Apple_Pay_logo.svg-60x60w (1).png" alt="">
            <img src="../imges/master-60x60w.png" alt="">
            <img src="../imges/stcpay-60x60w (2).png" alt="">
            <img src="../imges//VATS-60x60w.png" alt="">
            <img src="../imges/visa-60x60w.png" alt="">
            <img src="../imges/sp-60x60h.png" alt="">
            <img src="" alt="" srcset="">
        </div>
        <p>جميع الحقوق محفوظة شركة اكتان 2023 الرقم الضريبي 300076485500003</p>
    </div>
</div>
</div>
`
}
}

customElements.define('footer-components',FOOTERcomponents)