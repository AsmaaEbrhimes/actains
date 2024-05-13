const contentShopping = document.querySelector('.content-shopping')
const user = document.querySelector('.user p')
let usename = localStorage.getItem('username')
user.innerHTML = usename

document.querySelector('.bars').addEventListener('click', () => {
    document.querySelector('.list-header').classList.toggle('max')
})

const showCartShopping = () => {
    let product_jalabia = JSON.parse(localStorage.getItem('productjalabia')) ?? []
    let product_clothes = JSON.parse(localStorage.getItem('productclothes')) ?? []
    let product_jambsot = JSON.parse(localStorage.getItem('productjambsot')) ?? []
    let product_dress = JSON.parse(localStorage.getItem('productdress')) ?? []
    let datashopping = [...product_jalabia, ...product_clothes, ...product_jambsot, ...product_dress];
    let content_cart = document.querySelector('.content-cart');
    let length = document.querySelector('.length')
    length.textContent = datashopping.length
    if (datashopping.length > 0) {
        let loopShoping = datashopping.map((ele) => {
            return `
            <div class="content">
                <div class="img-cart">
                    <div class="desc">
                        <h4>${ele.title}</h4>
                        <p class='count'>الكمية<span>${ele.qty}</span></p>
                    </div>
                    <img src="${ele.img}" alt="">
                </div>
            </div>
        `;
        });
        let btn = `<a href='../html/shoppingcart.html''><span>معاينة السلة</span></a>`;
        content_cart.innerHTML = loopShoping.join('') + btn;
    } else {
        content_cart.innerHTML = `<img class='shopping-img' src="../imges/customer-day-hand-drawn-flat-illustration_23-2149562584.avif" alt="">`;
    }
}
showCartShopping();

document.querySelector('.li-shopping').addEventListener('mouseenter', () => {
    contentShopping.classList.add('active')
})

contentShopping.addEventListener('mouseleave', () => {
    contentShopping.classList.remove('active')
})

const SearchproductShopping = () => {
    fetch('../../js/api.json')
        .then(res => res.json())
        .then(data => {
            displaySearchResults(data[0]['فساتين'])
            displaySearchResults(data[1]["جاكيت"])
            displaySearchResults(data[2]['جامبسوت'])
            displaySearchResults(data[3]['بناتي'])
        })
}

const displaySearchResults = (data) => {
    let search_content = document.querySelector('.search-content');
    let searchValue = document.querySelector('.search').value
    let filter = data.filter((ele) => {
        return ele.name === searchValue;
    });
    if (filter) {
        filter.map((ele) => {
            search_content.classList.add('active');
            search_content.innerHTML += `
                <a href='${ele.link}'>
                    <div class='content'>
                        <div class='desc'>
                            <p>${ele.title}</p>
                            <p>salary</p>
                        </div>
                        <img src="${ele.img}">
                    </div>
                </a>
            `;
        });
    }
};

document.querySelector('.li-search').addEventListener('mouseenter', () => {
    document.querySelector('.content-search ').classList.add('active')
})


document.querySelector('.content-search').addEventListener('mouseleave', () => {
    document.querySelector('.content-search').classList.remove('active')
})

document.querySelector('.search-content').addEventListener('mouseleave', () => {
    document.querySelector('.content-search').classList.remove('active')
    document.querySelector('.search-content').classList.remove('active')

})
