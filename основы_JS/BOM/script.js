'use strict' // этот код работает в современном режиме

// 1 - объект navigator: в нем хранится вся информация о браузере и операционной системе
console.log(navigator);
console.log(navigator.userAgent); // вся информация о браузере
console.log(navigator.platform); // определяет операционную систему

// 2 - объект screen: в нем хранятся все данные о экране
console.log(screen);
console.log(screen.width + "x" + screen.height); // получаю ширину и высоту экрана

// 3 - объект location: содержит информацию о текущем url
console.log(location);
console.log(location.href); // получаю текущий url
console.log(location.protocol); // получаю протокол

// 4 - коллекция frames: коллекция всех дочерних объектов
console.log(frames);

// 5 - объект history: хранит в себе историю по переходам между страницами
console.log(history);

let str = prompt();
str === "Привет" ? location.reload() : alert("Тебе повезло");