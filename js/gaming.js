/*----Funciones menú hamburguesa----*/
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

/*----Funciones para resaltar los navlinks----*/
document.addEventListener("DOMContentLoaded", function () {
    var currentLocation = window.location.href;

    var menuItems = document.querySelectorAll('.links-navegacion li a');

    menuItems.forEach(function (item) {
        if (item.href === currentLocation) {
            item.parentNode.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var btnFiltros = document.getElementById("btnFiltros");
    var filtrosContent = document.getElementById("filtro-mobile");

    btnFiltros.addEventListener("click", function () {
        if (filtrosContent.style.display === "none") {
            filtrosContent.style.display = "block";
        } else {
            filtrosContent.style.display = "none";
        }
    });
});

/*---Funciones para dropdown menú----*/

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.dropdown-select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.dropdown-menu');
    const options = menu.querySelectorAll('li');
    const selected = menu.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('dropdown-select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('dropdown-menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('dropdown-select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('dropdown-menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

/*---Funciones para carruseles swiffy-slider----*/
$(document).ready(function () {
    configureSlick('.destacados-todos', '.slick-prev-1', '.slick-next-1');
    configureSlick('.destacados-todos-2', '.slick-prev-2', '.slick-next-2');

    function configureSlick(selector, prevArrow, nextArrow) {
        var $selector = $(selector);
        var $prevArrow = $(prevArrow);
        var $nextArrow = $(nextArrow);

        $selector.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $prevArrow,
            nextArrow: $nextArrow,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            easing: 'easeInOutCubic',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
});

/*---Funciones para cuenta regresiva oferta cyberfest----*/
var countDownDate = new Date().getTime() + 20 * 24 * 60 * 60 * 1000;

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Oferta terminada!";
    }
}, 1000);


/*---Funciones para cookies mapa de google (solución)----*/
function setFirstPartyCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=None; Secure";
}
setFirstPartyCookie("mi_cookie", "valor", 30);