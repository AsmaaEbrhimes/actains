window.onload = () => {
    document.querySelector('.load-fires').classList.add('active-loader');
    setTimeout(() => {
        document.querySelector('.load-fires').classList.remove('active-loader');
    }, 2500);
  }

const swiper = new Swiper('.swiper', {
    slidesperrView: 3,
    spaceBetweeb: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        320: {
            slidesperView: 1,
        },
        768: {
            slidesperView: 2,
            spaceBetween: 20
        },
        992: {
            slidesperView: 2,
            spaceBetween: 20
        },
    },
    autoplay: {
        delay: 3000,
    },
});


const changeImage = (element, newImagePath) => {
    element.querySelector('img').src = newImagePath;

}

const restoreImage = (element, originalImagePath) => {

    element.querySelector('img').src = originalImagePath;
}


document.querySelector('.efect').addEventListener('click', () => {
    window.scrollTo(0, 0);
  
});

