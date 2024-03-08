let header = document.getElementById("sticky");

window.addEventListener('scroll', ( ) => {
    if (window.scrollY > 10) {
        header.classList.add(active);
    } else {
        header.classList.remove (active);
    }
} );