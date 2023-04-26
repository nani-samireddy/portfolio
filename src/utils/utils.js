window.onscroll = function () {
    var navbar = document.getElementById('NavBar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('navblur');
    } else {
        navbar.classList.remove('navblur');
    }
}