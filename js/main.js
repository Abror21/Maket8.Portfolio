$(document).ready(function () {
    $('.count_num').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
});


$(document).ready(function () {

    $(".menu_item-1").click(() => $('html,body').animate({
        scrollTop: $("#home").offset().top
    },
        'slow'));
    $(".menu_item-2").click(() => $('html,body').animate({
        scrollTop: $("#about").offset().top
    },
        'slow'));
    $(".menu_item-3").click(() => $('html,body').animate({
        scrollTop: $("#services").offset().top
    },
        'slow'));
    $(".menu_item-4").click(() => $('html,body').animate({
        scrollTop: $("#skills").offset().top
    },
        'slow'));
    $(".menu_item-5").click(() => $('html,body').animate({
        scrollTop: $("#education").offset().top
    },
        'slow'));
    $(".menu_item-6").click(() => $('html,body').animate({
        scrollTop: $("#experience").offset().top
    },
        'slow'));
    $(".menu_item-7").click(() => $('html,body').animate({
        scrollTop: $("#work").offset().top
    },
        'slow'));
    $(".menu_item-8").click(() => $('html,body').animate({
        scrollTop: $("#blog").offset().top
    },
        'slow'));
    $(".menu_item-9").click(() => $('html,body').animate({
        scrollTop: $("#contacts").offset().top
    },
        'slow'));
});

$(window).scroll(function () {

    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
        // $('.menu').addClass('fixed');
        $('.main section').each(function (i) {
            if ($(this).position().top <= windscroll - (-50)) {
                $('.menu_item a.active').removeClass('active');
                $('.menu_item a').eq(i).addClass('active');
            }
        });
    } else {
        // $('nav').removeClass('fixed');
        $('.menu_item a.active').removeClass('active');
        $('.menu_item a:first').addClass('acti');
    }

}).scroll();
// ///////////////////////////////////////////////////
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    grabCursor: false
});
// /////////////////////////////

const burger_icon = document.querySelector('.burger_icon');
const aside = document.querySelector('.aside');
const main = document.querySelector('.main');
const body = document.querySelector('body');

burger_icon.addEventListener('click', function () {
    burger_icon.classList.toggle('active')
    aside.classList.toggle('active')
    body.classList.toggle('active')
});

const links = document.querySelectorAll('.menu_item a');
links.forEach(link => {
    link.addEventListener('click', () => {
        burger_icon.classList.toggle('active')
        aside.classList.toggle('active')
        body.classList.toggle('active')
    })
})
///////////////////////////////////////////////
const panelHeaders = document.querySelectorAll('.panel_header');

panelHeaders.forEach(panelHeader => {

    if (panelHeader.classList.contains('active')) {
        panelHeader.nextElementSibling.style.maxHeight = panelHeader.nextElementSibling.scrollHeight + 'px';
    }

    panelHeader.addEventListener('click', () => {
        const currentlyActivePanelHeader = document.querySelector('.panel_header.active');
        if (currentlyActivePanelHeader && currentlyActivePanelHeader !== panelHeader) {
            currentlyActivePanelHeader.classList.remove('active');
            currentlyActivePanelHeader.nextElementSibling.style.maxHeight = 0;
        }

        panelHeader.classList.toggle('active');
        if (panelHeader.classList.contains('active')) {
            panelHeader.nextElementSibling.style.maxHeight = panelHeader.nextElementSibling.scrollHeight + 'px';
        } else {
            panelHeader.nextElementSibling.style.maxHeight = 0;
        }
    })
});
// ///////////////////////////////////////////
new WOW().init();
