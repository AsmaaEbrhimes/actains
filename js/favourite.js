let favourite_clothes = JSON.parse(localStorage.getItem('favouriteclothes')) ?? []
let favourite_dress = JSON.parse(localStorage.getItem('favouritedress')) ?? []
let favourite_jalabia = JSON.parse(localStorage.getItem('favouritejalabia')) ?? []
let favourite_jambsot = JSON.parse(localStorage.getItem('favouritejambsot')) ?? []
let arra_favourite = [...favourite_clothes, ...favourite_dress,...favourite_jalabia, ...favourite_jambsot]

const showProductFavourite = (arry=[]) => {
    let contentFavouriteproduct = document.querySelector('.contentFavouriteproduct')
    let arry_favourite = arry.map((ele) => {
        return `
                <div class="content-favourite">
                    <img src="${ele.img}">
                    <p class="salary">${ele.salary} SR</p>
                    <p>${ele.title}</p>
                    <p>${ele.qty}</p>
                    <button onclick='DeleteProductFavourite(${ele.id})'>هل تريد حذف المنتج</button>
                </div>
`
    })
    contentFavouriteproduct.innerHTML = arry_favourite.join("")
}

showProductFavourite(arra_favourite)


const DeleteProductFavourite = (id) => {
    arra_favourite = arra_favourite.filter((ele) => ele.id !== id);
    localStorage.setItem('favouriteclothes', JSON.stringify(arra_favourite.filter((ele) => ele.category === 'clothes')));
    localStorage.setItem('favouritedress', JSON.stringify(arra_favourite.filter((ele) => ele.category === 'jalabia')));
    localStorage.setItem('favouritejambsot', JSON.stringify(arra_favourite.filter((ele) => ele.category === 'jambsot')));
    localStorage.setItem('favouritejalabia', JSON.stringify(arra_favourite.filter((ele) => ele.category === 'dress')));
    showProductFavourite(arra_favourite);
};


const deleteAccount=()=>{
    let alera_vavorite=document.querySelector('.alera-vavorite')
    let out=document.querySelector('.out')
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    DeleteProductFavourite()
    alera_vavorite.classList.add('block');
    out.classList.add('is-btn-loding');

    setTimeout(() => {
        out.classList.remove('is-btn-loding');
        alera_vavorite.remove('block');
        showProductFavourite(arra_favourite);
    }, 1500)
}
