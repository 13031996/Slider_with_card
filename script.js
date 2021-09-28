const slideContainer  = document.querySelector('.slide-container')
const slideLeft  = document.querySelector('.left-slide')
const slideRight  = document.querySelector('.right-slide')
const upButton  = document.querySelector('.up-button')
const downButton  = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

console.log(slidesLength)

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength-1) * 100}vh`

upButton .addEventListener('click', () => changeSlide('up'))


downButton .addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex = 0 
        }

    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
    }
}

slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`

slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
}


