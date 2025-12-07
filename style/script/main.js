// const mainElement = document.querySelector('main'); 


// --- КОНСТАНТЫ ---
const THEME_STORAGE_KEY = 'user-selected-theme'; // Ключ для хранения в localStorage
const DARK_THEME_CLASS = 'dark-theme'; 

const btn = document.querySelector('.btn-toggle'); 
// btn.addEventListener('click', function() { // Отслеживаем щелчок по кнопке

// Затем переключаем (добавляем/удаляем) класс .dark-theme для body


const themeableElements = [
    // document.querySelector('body').classList.toggle('dark-theme'); //для body
    // document.querySelector('main').classList.toggle('dark-theme'); //для блока main
    // document.querySelector('header').classList.toggle('dark-theme'); //для header
    // document.querySelector('.main_info').classList.toggle('dark-theme'); //для текстового блока .main_info
    // document.querySelector('.separator').classList.toggle('dark-theme'); //для разделителя в header
    // document.querySelector('.welcome').classList.toggle('dark-theme'); //для текста Welcome в header
    // document.querySelector('.diarhea_web').classList.toggle('dark-theme'); //для текста Diarhea's Web-site в header
    // document.querySelector('.btn-toggle').classList.toggle('dark-theme'); //для кнопки
    // document.querySelector('.hidden').classList.toggle('dark-theme');//для спрятанной ссылки
    // document.querySelector('.portfolio').classList.toggle('dark-theme');// для кнопок навигации
    // document.querySelector('.im_in').classList.toggle('dark-theme')
    // document.querySelector('.i_love_this').classList.toggle('dark-theme')
    // document.querySelector('.extra_button').classList.toggle('dark-theme')
    document.querySelector('body'), 
    document.querySelector('main'), 
    document.querySelector('header'), 
    document.querySelector('.main_info'), 
    document.querySelector('.separator'), 
    document.querySelector('.welcome'), 
    document.querySelector('.diarhea_web'), 
    document.querySelector('.btn-toggle'), 
    document.querySelector('.hidden'), 
    document.querySelector('.portfolio'), 
    document.querySelector('.im_in'), 
    document.querySelector('.i_love_this'), 
    document.querySelector('.extra_button'),
].filter(el => el !== null)

function applyTheme(shouldBeDark) {
    themeableElements.forEach(element => {
        // .toggle(className, force) - удобный метод:
        // добавляет класс, если force = true, и удаляет, если force = false.
        element.classList.toggle(DARK_THEME_CLASS, shouldBeDark);
    });
    
    // 3. Сохраняем текущий выбор в localStorage
    const themeToSave = shouldBeDark ? 'dark' : 'light';
    localStorage.setItem(THEME_STORAGE_KEY, themeToSave);
}

/**
 * 2. Загружает сохраненную тему из localStorage при загрузке страницы.
 */
function loadTheme() {
    // Получаем сохраненное значение, по умолчанию - 'light' (если в хранилище ничего нет)
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light'; 
    
    // Применяем сохраненную тему
    const shouldBeDark = savedTheme === 'dark';
    applyTheme(shouldBeDark); 
    
    // ВАЖНО: Мы сохранили состояние в applyTheme, но при первой загрузке (если localStorage пуст)
    // нам нужно, чтобы 'light' также записалось, чтобы не сбивалась логика переключения.
    // Если savedTheme === 'light' (т.е. localStorage был пуст), applyTheme это запишет.
}


// 1. Обработчик клика для ПЕРЕКЛЮЧЕНИЯ и СОХРАНЕНИЯ темы
btn.addEventListener('click', function() {
    // Проверяем текущее состояние body (или любого другого элемента из списка)
    const isCurrentlyDark = document.body.classList.contains(DARK_THEME_CLASS);
    
    // Переключаем на противоположную тему и сохраняем
    const newShouldBeDark = !isCurrentlyDark;
    applyTheme(newShouldBeDark);
});


// Запускаем функцию загрузки темы, чтобы применить ее сразу при старте скрипта
loadTheme();