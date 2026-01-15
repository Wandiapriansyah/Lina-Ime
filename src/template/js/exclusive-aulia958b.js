
// story slider
var storySlider = function () {
    var options = {
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnFocus: false,
      pauseOnHover: false,
      touchThreshold: 5000,
      swipeToSlide: true,
      arrows: false,
      dots: true,
      adaptiveHeight: false,
      fade: true,
    };
  
    // slick options
    var storyPreviewOptions = {
      ...options,
      ...{
        appendDots: "#story__slider-dots",
        asNavFor: "#story__slider-caption",
      },
    };
  
    var storyCaptionOptions = {
      ...options,
      ...{
        dots: false,
        adaptiveHeight: false,
        asNavFor: "#story__slider-preview",
      },
    };
  
    // init slick
    $("#story__slider-preview").slick(storyPreviewOptions);
  
    $("#story__slider-caption").slick(storyCaptionOptions);
};


function waitForElement(selector, callback) {
    const maxWaitTime = 7000; // 7 detik
    const intervalTime = 100;
    let elapsed = 0;

    const interval = setInterval(() => {
        const el = document.querySelector(selector);
        if (el) {
            clearInterval(interval);
            clearTimeout(timeout);
        }
        callback(el);
        elapsed += intervalTime;
    }, intervalTime);

    const timeout = setTimeout(() => {
        clearInterval(interval);
    }, maxWaitTime);
}

// Inisialisasi ketika hadiah-wrap sudah siap
waitForElement('.wedding-gifts-body .hadiah-wrap', (el) => {
    if(!el) return;
    
    const hadiahWrap = document.querySelector('.wedding-gifts-body .hadiah-wrap');
    const cardWraps = document.querySelectorAll('.wedding-gifts-body .hadiah-wrap .hadiah-card-wrap');

    const ratio = 160 / 342;
    const imgRatio = 135 / 160;

    const parentWidth = hadiahWrap.offsetWidth;
    const cardWidth = parentWidth * ratio;
    const imgMinHeight = cardWidth * imgRatio;

    cardWraps.forEach(card => {
        card.style.width = `${cardWidth}px`;

        const imgWrap = card.querySelector('.img-wrap');
        if (imgWrap) {
            imgWrap.style.minHeight = `${imgMinHeight}px`;
        }
    });

    // Inisialisasi Swiper
    const swiperGifts = new Swiper(".wedding-gifts-body .hadiah-wrap", {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true,
        direction: 'horizontal',
        scrollbar: {
            // el: ".swiper-scrollbar"
        }
    });
});

// Wedding Gift Picture
var wgu_classhandle_picture = function(e) {
    
    if (e.target.files.length > 0) {
        $('.wgu-up-btn').removeClass('show');
        $('.wgu-reup-btn').addClass('show');
        $('.wedding-gift-upload-wrap').addClass('show');
    }
}

$(document).on('change', 'input#weddingGiftPicture', wgu_classhandle_picture);    

// Wedding Wish Border Handler

let commentItem = $('.comment-inner-wrapping')
waitForElement('.comment-item', (el) => {
    if(!el){
        commentItem.addClass('no-border');
    }else {
        commentItem.removeClass('no-border');
    }
});

$(document).ready(function () {
    storySlider();
})