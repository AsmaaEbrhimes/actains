class HEADERCOMPONENTS extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
        <div class="container">
        <i class="fa-solid fa-bars bars"></i>
            <div class="content-headre">
                <ul class="list-header">
                    <a href="../html/index.html"><h1>ACTAN</h1></a>
                    <li class="li-shopping"><a href=""><i class="fa-solid fa-cart-shopping shopping"></i></a>
                    <span class='length'></span>
                        <div class="content-shopping">
                            <p></p>

                            <div class="content-cart">
                           
                             </div>

                        </div>
                    </li>

                    <li>تسجيل<a href="../html/formregister.html"><i class="fa-solid fa-user-plus"></i></li></a>
                    <li class='user'><p></p> <a href=""><i class="fa-regular fa-hand-spock"></i></a></li>

                    <li class="li-search"><a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                        <div class="content-search">
                            <button class="btn-search"><i onclick='SearchproductShopping()'class="fa-solid fa-magnifying-glass"></i></button> 
                            <input placeholder="اخبرنا عن ماذا تبحث؟" type="text" class="search">
                            <select class="option-search">
                                <option>الكل</option>
                                <option>فساتين</option>
                                <option>جاكيت</option>
                               <option>جلابيات</option>
                            </select>
                        </div>


                        <div class='search-content'>
                        </div>


                    </li>
                    <a href="../html/clothes.html"><li>اطقم</li></a> 
                   <a href="../html/dress.html"><li>فساتين</li></a> 
                    <a href="../html/jalabia.html"><li>جلابيات</li></a>
                    <a href="../html/jambsot.html"><li>جامبسوت</li></a>
                </ul>
            </div>
        </div>
    </header>
        `
    }

}

customElements.define('header-components', HEADERCOMPONENTS)