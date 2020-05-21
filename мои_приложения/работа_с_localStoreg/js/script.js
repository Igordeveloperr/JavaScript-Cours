// все продукты, которые я в теории получил с сервера
let cards = {
    "akm-715":{
        img:"img/akm.jpg",
        name: "AKM",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!`,
        price: 33,
    },
    "altin-715":{
        img:"img/алтын.jpg",
        name: "Armor",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!`,
        price: 109,
    },
    "plate-715":{
        img:"img/plate.png",
        name: "PlateCarrer",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia!`,
        price: 240,
    }
}

// объявляю класс для работы с карточками продуктов
class Card{
    // объявляю метод, который перебирает массив со всеми товарами и выводит их на главной странице
    static addCard(obj){
        const outBlock = document.querySelector(".wrap"); // блок в который я буду выводить товары
        let out = ""; // строка в которую буду добавлять html разметку
        // собственно сам вывод товара
        for(let k in obj){
            out += `<div class="product">`;
                out += `<img src="${obj[k]['img']}" alt="img">`;
                out += `<div class="description">`;
                    out += `<h3>${obj[k]['name']}</h3>`;
                    out += `<p>${obj[k]['description']}</p>`;
                out += `</div>`;
                out += `<div class="buy">`;
                    out += `<p>${obj[k]['price']}$</p>`;
                    out += `<button class="buyBtn" data-articul="${k}">Buy</button>`;
                out += `</div>`;
            out += `</div>`;

            outBlock.innerHTML = out;
        }
    }
    // метод работает с кнопками, которые находятся в карточке товара
    turnOnBtnEvents(obj){
        const btn = document.querySelectorAll(".buyBtn"); // получаю все кнопочки
        let product = []; // создаю вспомогательный массив, в который буду записывать продукты, после нажатия кнопки "Buy"
        // перебираю массив с кнопками и на каждую из них вешаю событие
        for(let i = 0; i < btn.length; i++){
            btn[i].addEventListener("click", (e) => {
                let element = e.target, // узнаю на какую именно кнопку нажали
                    articul = element.getAttribute("data-articul"); // получаю артикул нажатой кнопочки
                product.push(obj[articul]); // добавляю товар в массив, у которого артикул совпадает с артикулом нажатой кнопки
                localStorage.setItem("products", JSON.stringify(product)); // добавляю массив с товарами в локальное хранилище, точнее преобразую массив в строку и добавляю в хранилище
            });
        }
    }
}

Card.addCard(cards); // вызываю метод, который выводит все товары
new Card().turnOnBtnEvents(cards); // вызываю метод, который обрабатывает события на кнопочках