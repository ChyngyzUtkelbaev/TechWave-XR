
const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {
    link.addEventListener('click', function(e) {
      
        e.preventDefault();

     
        const href = this.getAttribute('href');

     
        const target = document.querySelector(href);

 
        const offsetTop = target.getBoundingClientRect().top;

    
        window.scrollBy({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

function openMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

document.getElementById('preOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;
    
    if(name && email && quantity) {
        alert('Спасибо за ваш предзаказ!');
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

