// получаю товары из локального хранилища и преобразую их в массив. Ну и переварачиваю массивчик
let productArray = JSON.parse(localStorage.getItem("products")).reverse();
// объявляю класс, который будет работать с корзиной
class Basket{
    // метод для вывода товаров, которые были добавленны в корзину
    static addProductInBasket(arr){
        let out = ""; // строка в которую я буду пихать разметку
        const outBlock = document.querySelector(".wrap"); // блок в который буду выводить товары, которые добавили к корзину
        // перебираю массив, полученный из локального хранилища, и вывожу продукты, которые были добавленны в корзину
        for(let i = 0; i < productArray.length; i++){
            out += `<div class="product">`;
            out += `<img src="${arr[i]['img']}" alt="img">`;
            out += `<div class="description">`;
                out += `<h3>${arr[i]['name']}</h3>`;
                out += `<p>${arr[i]['description']}</p>`;
            out += `</div>`;
            out += `<div class="buy">`;
                out += `<p>${arr[i]['count']}</p>`
                out += `<p>${arr[i]['price']}$</p>`;
                out += `<button class="buyBtn">Заказать</button>`;
            out += `</div>`;
            out += `</div>`;

            outBlock.innerHTML = out;
        }
    }
}

// вызываю метод для вывода товаров, которые были добавленны в корзину и передаю в него наш массивчик с продуктами, полученный из локального хранилища
Basket.addProductInBasket(productArray);