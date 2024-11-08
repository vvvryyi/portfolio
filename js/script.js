document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__links').classList.toggle('active');
}); 

document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.nav__links').classList.remove('active');
    });
}); 