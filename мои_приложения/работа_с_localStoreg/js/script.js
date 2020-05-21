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

class Card{
    static addCard(obj){
        const outBlock = document.querySelector(".wrap");
        let out = "";
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
    turnOnBtnEvents(obj){
        const btn = document.querySelectorAll(".buyBtn");
        let product = [];
        for(let i = 0; i < btn.length; i++){
            btn[i].addEventListener("click", (e) => {
                let element = e.target,
                    articul = element.getAttribute("data-articul");
                product.push(obj[articul]);
                localStorage.setItem("products", JSON.stringify(product));
            });
        }
    }
}

Card.addCard(cards);
new Card().turnOnBtnEvents(cards);