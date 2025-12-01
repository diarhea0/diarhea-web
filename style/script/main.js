// const mainElement = document.querySelector('main'); 
const btn = document.querySelector('.btn-toggle'); 
btn.addEventListener('click', function() { // Отслеживаем щелчок по кнопке

// Затем переключаем (добавляем/удаляем) класс .dark-theme для body



document.querySelector('body').classList.toggle('dark-theme'); //для body
document.querySelector('main').classList.toggle('dark-theme'); //для блока main
document.querySelector('header').classList.toggle('dark-theme'); //для header
document.querySelector('.main_info').classList.toggle('dark-theme'); //для текстового блока .main_info
document.querySelector('.separator').classList.toggle('dark-theme'); //для разделителя в header
document.querySelector('.welcome').classList.toggle('dark-theme'); //для текста Welcome в header
document.querySelector('.diarhea_web').classList.toggle('dark-theme'); //для текста Diarhea's Web-site в header
document.querySelector('.btn-toggle').classList.toggle('dark-theme'); //для кнопки
document.querySelector('.hidden').classList.toggle('dark-theme');//для спрятанной ссылки

}) 