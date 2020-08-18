const url = "https://jsonplaceholder.typicode.com/users"

function sendRequest(metod = "", url = "", body = null){
    return new Promise((res, rej) => {
        // запрос на сервер через объект xhr
        // созданю инстанс класса
        const xhr = new XMLHttpRequest()

        // открываю запрос на сервер
        /*1й параметр - это метод запроса, 2й параметр - это url сервера*/
        xhr.open(metod, url)

        // настройка хедеров
        xhr.setRequestHeader("Content-Type", "application/json")

        // обработка данных !!! перед отправкой запроса на сервер
        xhr.onload = () => {
            // универсальная обработка ошибок
            if(xhr.status >= 400){
                rej(xhr.response)
            }
            else{
                // вывожу полученные данные
                res(JSON.parse(xhr.response))
            } 
        }  

        // обработка ошибок
        xhr.onerror = () => {
            // вывод ошибки
            console.log(xhr.response)
        }

        // отправляю запрос на сервер
        xhr.send(JSON.stringify(body)) 
    })
}

sendRequest("GET", url)
.then(res => console.log(res))
.catch(err => console.log(err))

// POST запросы
const body = {
    name: "igor",
    age: 54,
}
sendRequest("POST", url, body).then(res => console.log(res))