// Получаем все ссылки, которые ведут на якоря
const links = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события клика для каждой ссылки
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Предотвращаем стандартное действие ссылки
        event.preventDefault();
        
        // Получаем значение атрибута href ссылки
        const href = this.getAttribute('href');
        
        // Находим элемент, к которому нужно прокрутить страницу
        const target = document.querySelector(href);
        
        // Получаем верхнюю координату элемента относительно окна просмотра
        const offsetTop = target.getBoundingClientRect().top;
        
        // Плавно прокручиваем страницу к указанному элементу
        window.scrollBy({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Функция для открытия/закрытия меню
function openMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

// Обработчик события отправки формы
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
