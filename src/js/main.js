import '../scss/styles.scss'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CountUp } from 'countup.js'

const aosOptions = {
    once: true,
}

AOS.init(aosOptions)

const CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
}
const years = new CountUp('years', 300, CountUpOptions)
years.handleScroll()
const kilograms = new CountUp('kilograms', 100, CountUpOptions)
kilograms.handleScroll()
const objects = new CountUp('objects', 50, CountUpOptions)
objects.handleScroll()
const percent = new CountUp('percent', 100, CountUpOptions)
percent.handleScroll()
