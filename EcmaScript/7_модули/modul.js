// экспортируем
export const COLOR = "#000";
export const sum = (a, b) => a + b;

// экспортирование по умолчанию
const privateVar = "Igor";
export default {
    log = () => console.log(privateVar),
}