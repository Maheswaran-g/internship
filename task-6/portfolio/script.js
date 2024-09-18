let themetoggler = document.querySelector('#theme-toggler');

themetoggler.onclick = () => {
    themetoggler.classList.toggle('fa-sun');  
    themetoggler.classList.toggle('fa-moon'); 

    if(themetoggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');  
    } else {
        document.querySelector('body').classList.remove('active');  
    }
}
