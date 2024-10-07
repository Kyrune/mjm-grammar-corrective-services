// Scroll to top functionality
topAnchor = document.getElementById('top-anchor');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topAnchor.style.display = 'block';
    } else {
        topAnchor.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
