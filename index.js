// Упражнение №1

// const btn = document.querySelector('.j-btn-test');

// btn.addEventListener('click', () => {
//     btn.classList.toggle('btn--magic');
// });

// ********************************
// Упражнение №2
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

// const btn = document.querySelector('.j-btn-test');

// // Размер экрана
// const screenWidth = window.screen.width;
// const screenHeight = window.screen.height;

// //Размер окна браузера с учётом полосы прокрутки
// const windowInnerWidthScroll = window.innerWidth;
// const windowInnerHeightScroll = window.innerHeight;

// // Внутренний размер окна без полос прокрутки
// const windowInnerWidth = document.documentElement.clientWidth;
// const windowInnerHeight = document.documentElement.clientHeight;

// // Размер веб-страницы
// const pageWidth = document.documentElement.scrollWidth;
// const pageHeight = document.documentElement.scrollHeight;

// // Вывод размеров экрана в ALERT
// btn.onclick = () => {
//     alert(`Размер экрана: ${screenWidth} на ${screenHeight};
// Размер окна браузера с учётом полосы прокрутки: ${windowInnerWidthScroll} на ${windowInnerHeightScroll};
// Внутренний размер окна без полос прокрутки: ${windowInnerWidth} на ${windowInnerHeight};
// Размер веб-страницы: ${pageWidth} на ${pageHeight};`)
// }


// ********************************
// Упражнение №3

const wsUri = 'wss://echo-ws-service.herokuapp.com';
const inputData = document.querySelector('input');
const sendBtn = document.querySelector('.send-btn')
const sendGeo = document.querySelector('.send-geo');
const wrapperChat = document.querySelector('.chat-wrapper');
const userMessages = document.querySelector('.user-messages');


//Вывод сообщения
function writeToScreen(message, position = 'flex-end') {
    let element = `
        <p class='messages' style='align-self: ${position}'>
            ${message}
        </p>
    `;
    userMessages.innerHTML += element;
    wrapperChat.scrollTop = wrapperChat.scrollHeight;
}

// Объект соединения
let websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) {
    console.log("CONNECTED");
};
websocket.onmessage = function(evt) {
    writeToScreen(`ответ сервера: ${evt.data}`, 'flex-start');
};
websocket.onerror = function(evt) {
    writeToScreen(`server: ${evt.data}`, 'flex-start');
};

// Отправить сообщение
sendBtn.onclick = () => {
    let message = inputData.value;
    websocket.send(message);
    writeToScreen(`Вы: ${message}`);
    inputData.value = ''
}

// Если получение геолокации запрещено
const error = () => {
    let textErr0r = 'Невозможно получить ваше местоположение';
    writeToScreen(textErr0r);
};

// Успешное получениие геолокации
const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    writeToScreen(`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
};

sendGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});