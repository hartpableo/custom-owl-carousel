$(document).ready( () => {
    callOwl();
    windowResizeFunctions();
});

// Declare variables
let window_width = $(window).width();

// Call the configured owl carousel based on the current screen size
let callOwl = () => {
    if (window_width >= 800 && window_width <= 1200) {
        customCarouselDesktop2();
    } else if (window_width > 1200) {
        customCarouselDesktop();
    } else {

    }
}

// Functions that need to be executed during window resize also
let windowResizeFunctions = () => {
    $(window).resize( () => {
        window_width = $(this).width();
        callOwl();
    });
}

let carouselInit = () => {
    $(".carousel--gallery").owlCarousel({
        loop: true,
        nav: true,
        navText: [`<i class="bi bi-arrow-left-circle"></i>`,`<i class="bi bi-arrow-right-circle"></i>`],
        responsive: {
            // 800: {
            //     items
            // },
            800: {
                items: 3,
            },
            1201: {
                items: 5,
            }
        },
    });
}

// Desktop carousel
let customCarouselDesktop = () => {
    $('.carousel--gallery').on('initialized.owl.carousel translate.owl.carousel change.owl.carousel', function(e){
        let index = e.item.index;
        $('.owl-item.smallest').removeClass('smallest');
        $('.owl-item.small').removeClass('small right left');
        $('.owl-item.highlight').removeClass('highlight');
        $('.owl-item').eq(index).addClass('smallest');
        $('.owl-item').eq(index + 1).addClass('small left');
        $('.owl-item').eq(index + 2).addClass('highlight');
        $('.owl-item').eq(index + 3).addClass('small right');
        $('.owl-item').eq(index + 4).addClass('smallest');
    });
    carouselInit();
};

// Desktop carousel 2
let customCarouselDesktop2 = () => {
    $('.carousel--gallery').on('initialized.owl.carousel translate.owl.carousel change.owl.carousel', function(e){
        let index = e.item.index;
        $('.owl-item.smallest').removeClass('smallest');
        $('.owl-item.small').removeClass('small right left');
        $('.owl-item.left').removeClass('left');
        $('.owl-item.right').removeClass('right');
        $('.owl-item.highlight').removeClass('highlight');
        $('.owl-item').eq(index).addClass('left');
        $('.owl-item').eq(index + 1).addClass('highlight');
        $('.owl-item').eq(index + 2).addClass('right');
    });
    carouselInit();
};