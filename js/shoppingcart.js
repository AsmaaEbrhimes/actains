
let shopping_jalabia = JSON.parse(localStorage.getItem('productjalabia')) ?? []
let shopping_clothes = JSON.parse(localStorage.getItem('productclothes')) ?? []
let shopping_jambsot = JSON.parse(localStorage.getItem('productjambsot')) ?? []
let shopping_dress = JSON.parse(localStorage.getItem('productdress')) ?? []
let arry_shopping = [...shopping_jalabia, ...shopping_clothes, ...shopping_jambsot, ...shopping_dress]



const ShoppingProducts = () => {
    const tabel = document.querySelector('.tabel')
    let map_shopping = arry_shopping.map((ele) => {
        return `                   
<tr>
<td class="td-1">
    <p>${ele.salary}S.R</p>
</td>
<td class='td-2'>
    <p>${ele.salary}S.R</p>
</td>

<td class='td-3'>
    <div>
        <span class='delete' onclick='deletproductShopping(${ele.id})'>x</span>
        <span onclick='UpdateQty(${ele.id})'><i class="fa-solid fa-rotate rotate"></i></span>
        <span>
        <p id="number-product-shopping-${ele.id}" class='number-product-shopping'>1</p>
        </span>
        <span class='icons'>
            <i onclick='IncreseProductShopping(this)' data-productid="${ele.id}" class="fa-solid fa-angle-up"></i>
            <i onclick='DecreseProductShopping(this)' data-productid="${ele.id}" class="fa-solid fa-angle-down"></i>
        </span>
    </div>
</td>

<td class="postion">
    <span class="content-td">
        <p class="desc">${ele.title}</p>
        <p>نقاط المكافاءات${ele.point}</p>
        <img src="${ele.img}" alt="">
    </span>
</td>
</tr>
`
    })
    let hheaderTabel = `
<th>الاجمالي</th>
<th>سعر الوحده</th>
<th>الكميه</th>
<th>
    <span>الاسم</span>
    <span class="head-img">الصورة</span>
</th>
</tr>
`
    tabel.innerHTML = hheaderTabel + "" + map_shopping.join('')
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





















