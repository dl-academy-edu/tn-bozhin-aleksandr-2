var popup = document.querySelector ('.popup')
var overLay = document.querySelector ('.popup__overlay')
var popupOpenBtn = document.querySelector ('.slider-offer__button')
var popupCloseBtn = popup.querySelector ('.popup__close-button')
var input = popup.querySelector ('input')


popupOpenBtn.addEventListener ('click', function(){
    popup.classList.add('open');
    overLay.classList.add('show');
    input.focus()
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            popup.classList.remove('open');
            overLay.classList.remove('show');
        }
    })
})
popupCloseBtn.addEventListener('click', function(){
    popup.classList.remove('open');
    overLay.classList.remove('show');
})

var header = document.querySelector ('.header')
var headerMenu = document.querySelector ('.header-mobile')
var headerOverlay = document.querySelector ('.header-overlay')
var headerOpenBtn = document.querySelector ('.header__menu-btn')
var headerCloseBtn = header.querySelector ('.header__close-btn')
var input = popup.querySelector ('input')


headerOpenBtn.addEventListener ('click', function(){
    header.classList.add('header-fixed');
    headerMenu.classList.add('open');
    headerOverlay.classList.add('open');
    headerOpenBtn.classList.add('close');
    headerCloseBtn.classList.add('open');
    window.addEventListener('keydown', function(evt){
        if (evt.code === "Escape") {
            header.classList.remove('header-fixed');
            headerMenu.classList.remove('open');
            headerOverlay.classList.remove('open');
            headerOpenBtn.classList.remove('close');
            headerCloseBtn.classList.remove('open');
        }
    })
})
headerCloseBtn.addEventListener('click', function(){
    header.classList.remove('header-fixed');
    headerMenu.classList.remove('open');
    headerOverlay.classList.remove('open');
    headerOpenBtn.classList.remove('close');
    headerCloseBtn.classList.remove('open');
})