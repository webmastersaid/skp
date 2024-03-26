import '../scss/styles.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CountUp } from 'countup.js'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";

const aosOptions = {
    once: true,
}
AOS.init(aosOptions)

const CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
}
const years = new CountUp('years', document.getElementById('years').innerText, CountUpOptions)
years.handleScroll()
const kilograms = new CountUp('kilograms', document.getElementById('kilograms').innerText, CountUpOptions)
kilograms.handleScroll()
const objects = new CountUp('objects', document.getElementById('objects').innerText, CountUpOptions)
objects.handleScroll()
const percent = new CountUp('percent', document.getElementById('percent').innerText, CountUpOptions)
percent.handleScroll()

const fancyboxOptions = { 
    Thumbs: false, 
}

Fancybox.bind('[data-fancybox="gallery"]', fancyboxOptions)

const carouselContainer = document.getElementById("techCarousel")
const carouselOptions = {
    Dots: false,
    Thumbs: {
        type: 'classic',
    },
    Autoplay: {
        timeout: 3000,
        showProgress: false,
    },
}
new Carousel(carouselContainer, carouselOptions, { Thumbs, Autoplay })

Fancybox.bind('[data-fancybox="carousel"]', fancyboxOptions)