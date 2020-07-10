const path = require("path");

module.exports = {
    entry:"./паттерны_практика/index.js", // файл с которого все начинается
    output:{
        filename:"result.js", // файл, который получится в итоге
        path:path.resolve(__dirname, "dist") // куда будут складываться файлы, после компиляции
    }
}