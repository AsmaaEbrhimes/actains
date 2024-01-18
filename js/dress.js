let data = JSON.parse(localStorage.getItem('dress'));
let show_product = document.querySelector('.show-product')
window.onload=()=>{
    document.querySelector('.range').classList.add('accordion')
    document.querySelector('.content-size .content').classList.add('Accordion')

}

const lodingSppiner=()=>{
    let loading_overlay = document.querySelector('.loading-overlay')
    loading_overlay.classList.add('block')
    setTimeout(() => {
        loading_overlay.classList.remove('block')
    }, 1500);
}

const getData = () => {
    fetch('../../js/api.json')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('dress', JSON.stringify(data[0]['فساتين']))
            displayData(data[0]['فساتين'])
        })
}
getData()

const displayData = (data) => {
    show_product.innerHTML = '';
    data.map((ele) => {
        show_product.innerHTML += `
<div class="card">
    <img onclick="savedIdImgGalabeat(${ele.id})" src="${ele['img-color-main']}">
    <p>${ele.title}</p>
    <p>S.R ${ele.salary}</p>
</div>
    `
    })
}

function savedIdImgGalabeat(id) {
    localStorage.setItem('iddress', id)
    window.location='../html/mydress.html'
}

function showprice(element) {
    if (element.classList.contains('fa-plus')) {
        element.classList.remove('fa-plus')
        element.classList.add('fa-minus')
        document.querySelector('.range').classList.add('accordion')
    } else {
        element.classList.add('fa-plus')
        element.classList.remove('fa-minus')
        document.querySelector('.range').classList.remove('accordion')
    }
}

function showSize(element) {
    if (element.classList.contains('fa-plus')) {
        element.classList.remove('fa-plus')
        element.classList.add('fa-minus')
        document.querySelector('.content-size .content').classList.add('Accordion')
    } else {
        element.classList.add('fa-plus')
        element.classList.remove('fa-minus')
        document.querySelector('.content-size .content').classList.remove('Accordion')
    }
}

function SelectSize(element) {
    let sizeText = element.previousElementSibling.innerHTML;
    let selectedSize;
    switch (sizeText) {
        case "S":
            selectedSize = "size-1";
            break;
        case "M":
            selectedSize = "size-2";
            break;
        case "L":
            selectedSize = "size-3";
            break;
        case "XL":
            selectedSize = "size-4";
    }
    let filteredData = data.filter((element) => element[selectedSize] === sizeText);
    show_product.innerHTML = ''
    lodingSppiner()
    displayData(filteredData);
}

const SelectPrice = (element) => {
    let target = parseInt(element.value);
    let filter = data.filter((ele) => ele.salary < target);
    show_product.innerHTML = ""
    lodingSppiner()
    displayData(filter)
}

function Selecttype(params) {
    let value = params.value
    if (value === 'الاسم من أ-ي') {
        let revers = data.reverse()
        localStorage.setItem('dress', JSON.stringify(data));
        lodingSppiner()
        displayData(revers);
       
    }
    if (value === 'الاسم من ي-أ') {
        let sorted = data.sort((a, b) => a.order - b.order);
        localStorage.setItem('dress', JSON.stringify(sorted));
        lodingSppiner()
        displayData(sorted);
    }
}

