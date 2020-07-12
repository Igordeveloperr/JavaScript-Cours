// получаем
import {COLOR, sum} from "./modul";
console.log(COLOR);
console.log(sum(1,89)); 

// получаю дефолтный экспорт
import Logger from "./modul"
Logger.log();

// импортирую все в одну переменную
import * as Module from "./modul";
console.log(Module);