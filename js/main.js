gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

// Preloader

// Hamburger Menu
let menuIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", (e)=>{
    menuIcon.classList.toggle('open')
})

// Typewriter effect
let bannerHeading = document.querySelector('.banner-content .role');

let typewriter = new Typewriter(bannerHeading, {
    loop: true
});

// Banner Animation
let bannerTimeLine = gsap.timeline({});

bannerTimeLine.to(".banner-image", {
    clipPath: 'circle(100% at 50% 50%)',
    opacity: 1,
    duration: 1,
    ease: "none"
})

bannerTimeLine.to(".banner-content h2", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none"
})

bannerTimeLine.to(".banner-content p", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    onComplete: () => {
        typewriter
            .typeString('<span class="outlined">Front-end Developer</span>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('<b>Front-end Developer</span>')
            .pauseFor(2500)
            .start();
    },
    ease: "none"
})

bannerTimeLine.to(".social-icons", {
    opacity: 1,
    duration: 1,
    ease: "none"
})

// About Timeline Animation
let aboutTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: `-20% 30%`,
        end: "bottom 80%",
    }
})

aboutTimeLine.to(".about .image", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "none",
})

aboutTimeLine.to(".about .content h3", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

aboutTimeLine.to(".about .content p", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

aboutTimeLine.to(".about .content .black_btn", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})


// Skills Timeline Animation
let skillTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#skills',
        start: `-20% 30%`,
        end: "bottom 80%",
    }
})


skillTimeLine.to(".skills .image", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "none",
})

skillTimeLine.to(".skills .content h3", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

skillTimeLine.to(".skills .content p", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

skillTimeLine.to(".skills .content .skills-list", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

// Works Timeline Animation
let workTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '#works',
        start: `-20% 30%`,
        end: "bottom 80%",
    }
})


workTimeLine.to(".works .image", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "none",
})

workTimeLine.to(".works .content h3", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

workTimeLine.to(".works .content p", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})

workTimeLine.to(".works .content .black_btn", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
})



// Image Hover Prespective Animation
const container = document.querySelectorAll('.prespective-container');

container.forEach((item) => {
    let image = item.querySelector(".prespective-image")

    // Hover In
    item.addEventListener('mouseenter', (e) => {
        gsap.to(image, {
            duration: 0.5,
            ease: "power3.out"
        });
    });


    // Hover Out
    item.addEventListener('mouseleave', () => {
        gsap.to(image, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            ease: "power3.out"
        });
    });

    // Mouse Move
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(image, {
            duration: 0.3,
            rotateX: -y / 10, // Divide to control tilt intensity
            rotateY: x / 10,
        });
    });
})


// Header scroll animation
let navItem = document.querySelectorAll("header nav li a")

const headerScroll = (e) => {
    e.target.classList.add("active")
    navItem.forEach((nav) => nav !== e.target ? nav.classList.remove('active') : '')
    gsap.to(window, {
        duration: '1.5',
        ease: "back.inOut(1.7)",
        scrollTo: {
            y: `#${e.target.getAttribute('data-id')}`,
            offsetY: document.querySelector("header").offsetHeight
        }
    })
}

navItem.forEach((nav) => { nav.addEventListener("click", headerScroll) })


// Intersection Observer On Scroll
let option = {
    root: null,
    rootMargin: "0px 0px -40% 0px",
    threshold: 0.25,
}
function RemoveActiveMenu() {
    document.querySelectorAll(`header nav li a`).forEach(ul => {
        ul.classList.remove('active')
    })
}

let headerElement = document.querySelector('header')
const section = document.querySelectorAll('section.sec')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let currentSectionId = entry?.target?.id
        if (entry.isIntersecting) {
            RemoveActiveMenu()
            document.querySelector(`header nav li a[data-id=${currentSectionId}]`)?.classList?.add('active')
        }
    })
}, option)

section.forEach((sec) => {
    observer.observe(sec)
})

const headerOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerElement.classList.remove('active')
        } else {
            headerElement.classList.add('active')
        }
    })

}, {
    threshold: 0.97,
})
headerOnScroll.observe(document.querySelector('section'))


// Works Slider
let slidePrev = document.querySelector(".slide-prev");
let slideNext = document.querySelector(".slide-next");
let imageSlides = document.querySelectorAll(".image-slide");
let contentSlides = document.querySelectorAll(".content-slide");
let slides = document.querySelectorAll(".slide");

let currentIndex = 0;

const updateSlide = (index) => {
    imageSlides[0].style.transform = `translateX(${-index * 100}%)`
    contentSlides[0].style.transform = `translateX(${-index * 100}%)`
    slidePrev.removeAttribute('disabled')
    slideNext.removeAttribute('disabled')

    if (index === 0) {
        slidePrev.setAttribute('disabled', true)
    } else if (index === (slides.length / 2 - 1)) {
        slideNext.setAttribute('disabled', true)
    }
}

slideNext.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    updateSlide(currentIndex)
})

slidePrev.addEventListener("click", () => {
    currentIndex = currentIndex - 1;
    updateSlide(currentIndex)
})

