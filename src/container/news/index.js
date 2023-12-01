import { createElement, createHeader } from "../../script/layout";
 const page = document.querySelector('.page')
 const header = createHeader()
 page.append(header)
 const title = createElement('h1', 'title', 'Коммьюніті')
 page.append(title)

 const TITLE__TWO = [
            {text: 'База знань', isActive: false },
            {text: 'Інформація', isActive: true },
    
 ]
 const createTitle = () => {
    const title__two = createElement('div', 'title__two')
    TITLE__TWO.forEach((elem) => {
        const info = createElement(
            'div',
            elem.isActive ? 'active' : 'info', elem.text
        )
        title__two.append(info)
        
       
    })
    return title__two

 }

 const title__two = createTitle()
 page.append(title__two)
 const createInfo = () => {
    const info__data = createElement('div', 'info__data')
    const image = createElement('img', 'image')
    image.src = '/img/news.png'
    const title = createElement('div', 'post__info', 'Що таке база знань?')
    const post__data = createElement('div', 'post__data', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ')
    const button = createElement('button', 'back', '')
    // button.src = '/img/Button.jpg'
    info__data.append(image)
    info__data.append(title)
    info__data.append(post__data)
    info__data.append(button)
    return info__data
 }
 const info__data = createInfo()
 page.append(info__data)
//====================приклад з GPT
// import { createElement, createHeader } from "../layout";
// const page = document.querySelector('.page');
// const header = createHeader();
// page.append(header);
// const title = createElement('h1', 'title', 'Коммьюніті');
// page.append(title);

// const TITLE__TWO = [
//     { text: 'База знань', isActive: false },
//     { text: 'Інформація', isActive: true },
// ];

// const createTitle = () => {
//     const title__two = createElement('div', 'title__two');
//     TITLE__TWO.forEach((elem) => {
//         const info = createElement(
//             'div',
//             elem.isActive ? 'active' : 'info',
//             elem.text
//         );
//         title__two.append(info);
//     });
//     return title__two;
// };

// const title__two = createTitle();
// page.append(title__two);

// const createInfo = () => {
//     const info__data = createElement('div', 'info__data');
//     const image = createElement('img', 'image');
//     image.src = '/img/news.png';
//     const title = createElement('div', 'post__info', 'Що таке база знань?');
//     const post__data = createElement('div', 'post__data', 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.');
//     const button = createElement('button', 'back', '');
//     button.textContent = 'Текст кнопки'; // Змінено для встановлення тексту
//     info__data.append(image);
//     info__data.append(title);
//     info__data.append(post__data);
//     info__data.append(button);
//     return info__data;
// };

// const info__data = createInfo();
// page.append(info__data);



