// Упражнение №2
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector('.j-btn-test');

// Размер экрана
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

//Размер окна браузера с учётом полосы прокрутки
const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

// Внутренний размер окна без полос прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

// Размер веб-страницы
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

// Вывод размеров экрана в ALERT
btn.onclick = () => {
    alert(`Размер экрана: ${screenWidth} на ${screenHeight};
Размер окна браузера с учётом полосы прокрутки: ${windowInnerWidthScroll} на ${windowInnerHeightScroll};
Внутренний размер окна без полос прокрутки: ${windowInnerWidth} на ${windowInnerHeight};
Размер веб-страницы: ${pageWidth} на ${pageHeight};`)
}