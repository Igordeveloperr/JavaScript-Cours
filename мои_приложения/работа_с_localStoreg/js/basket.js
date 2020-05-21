let productArray = JSON.parse(localStorage.getItem("products"));

class Basket{
    static addProductInBasket(arr){
        let out = "";
        const outBlock = document.querySelector(".wrap");
        for(let i = 0; i < productArray.length; i++){
            out += `<div class="product">`;
            out += `<img src="${arr[i]['img']}" alt="img">`;
            out += `<div class="description">`;
                out += `<h3>${arr[i]['name']}</h3>`;
                out += `<p>${arr[i]['description']}</p>`;
            out += `</div>`;
            out += `<div class="buy">`;
                out += `<p>${arr[i]['price']}$</p>`;
                out += `<button class="buyBtn">Заказать</button>`;
            out += `</div>`;
            out += `</div>`;

            outBlock.innerHTML = out;
        }
    }
}

Basket.addProductInBasket(productArray);