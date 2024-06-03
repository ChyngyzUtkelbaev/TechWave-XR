function openMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
}


document.getElementById('preOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваш предзаказ был успешно отправлен!');
});
