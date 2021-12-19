'use strict'

import togglePopup from './modules/popup'
import Carousel from './modules/carousel'
import timer from './modules/timer'




togglePopup()


const carouselBenefits = new Carousel({
    main: '.benefits-inner',
    wrap: '.benefits-wrap',
    prev: '.benefits__arrow--left',
    next: '.benefits__arrow--right',
    slidesToShow: 3,
    infinity: true,
    responsive: [
        {
            breakpoint: 576,
            slidesToShow: 1
        }
    ]
});
carouselBenefits.init()


const carouselServices = new Carousel({
    main: '.services-wrap',
    wrap: '.services-wrap .row',
    prev: '.services__arrow--left',
    next: '.services__arrow--right',
    slidesToShow: 2,
    infinity: true,
    responsive: [
        {
            breakpoint: 576,
            slidesToShow: 1
        }
    ]
});
carouselServices.init()


timer('01 January 2022')