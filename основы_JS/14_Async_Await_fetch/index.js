const delay = ms =>{
    return new Promise(r => setTimeout(() => r(), ms));
}

const url = "https://jsonplaceholder.typicode.com/photos/1";

function fetchTodos(){
    // делаю запрос на сервер после 2 секунд
    console.log("Fetch to do started ...")
    return delay(2000).then(() => {
        // отправляю запрос
        return fetch(url);
    })
    // вызываю метод json, чтобы получить данные в формате .json
    .then(response => response.json()) ;
}

fetchTodos()
// вывожу данные после их получения
.then(data => console.log("Data", data))
// ловлю все ошибки и вывожу в консоль
.catch((err) => console.error(err));


// Async, Await
// Async - делает функцию асинхронной
async function fetchAsyncTodos(){
    // await - обрабатывает промис(можно не использовать .then())
    /*await заменяет оператор then*/
    const out = document.querySelector("#out");
    try{
        await delay(3000);
        const response = await fetch(url);
        const data = await response.json();
        out.innerHTML = `<img src="${data.url}">`;
    }
    catch(e){
        console.error(e);
    }
    finally{
        console.log("ШУЕ!");
    }
}

fetchAsyncTodos().then(() => console.log("я кста промис возвращаю"));