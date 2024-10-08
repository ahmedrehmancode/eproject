const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");

});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});



// swiper for branding

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000, // Time in milliseconds between slide changes
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
    slidesPerView: 1,
    spaceBetween: 10, // Optional: Space between slides
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});


// banner text swper


const rotator = document.querySelector('.rotation-container');
const rotationItems = rotator.querySelectorAll('.rotation-item');
let activeIndex = 0;

function updateRotation() {
    rotationItems.forEach((item, index) => {
        item.classList.remove('visible');
        let angleOffset = index - activeIndex;
        if (angleOffset < 0) angleOffset += rotationItems.length;
        item.style.transform = `rotateY(${angleOffset * 120}deg) translateZ(300px)`;
    });
    rotationItems[activeIndex].classList.add('visible');
}

function rotateItems() {
    activeIndex = (activeIndex + 1) % rotationItems.length;
    updateRotation();
}

updateRotation();
setInterval(rotateItems, 6000);


// banner imgage swiper

const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel__item');
let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        let offset = index - currentIndex;
        if (offset < 0) offset += items.length;
        item.style.transform = `rotateY(${offset * 120}deg) translateZ(300px)`;
    });
    items[currentIndex].classList.add('active');
}

function rotateCarousel() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

updateCarousel();
setInterval(rotateCarousel, 6000);



// Section 3



const button = document.getElementById('snowmanButton');
        const card2 = button.querySelector('.card2');
        const button1 = document.getElementById('snowmanButton1')
        const card1 = button1.querySelector('.card1');

        button.addEventListener('mouseenter', () => {
            card2.style.display = 'block';
        });

        button.addEventListener('mouseleave', () => {
            card2.style.display = 'none';
        });
        button1.addEventListener('mouseenter', () => {
            card1.style.display = 'block';
        });

        button1.addEventListener('mouseleave', () => {
            card1.style.display = 'none';
        });



        // age catagory swiper



        const ageSwiper = new Swiper('.age_swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    // spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    // spaceBetween: 40,
                },
                // 1280: {
                //     slidesPerView: 5,
                // },
            },
        });







