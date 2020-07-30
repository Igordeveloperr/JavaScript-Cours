function netfortFetch(url){
    return `${url} - ответ с сервера`;
}

const cache = new Set();
const prox = new Proxy(netfortFetch, {
    apply(target, thisArg, args){
        const url = args[0];
        if(cache.has(url)){
            return `${url} - ответ из кэша`;
        }
        else{
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});

console.log(prox("angular.io"));
console.log(prox("angular.com"));
console.log(prox("angular.io"));