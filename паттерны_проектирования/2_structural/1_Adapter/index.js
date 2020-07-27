/*
    Паттерн заключается в том, что в приложение можно добавить новый функционал,
    при этом, не ломая прошлый функционал
*/ 

// старый функционал
class OldCalc
{
    operations(x, y, operation){
        switch(operation)
        {
            case "add": return x + y;
            case "sub": return x - y;
            default: return NaN;
        }
    }
}

// новый функционал
class NewCalc
{
    add(x,y){return x + y;}
    sub(x,y){return x - y;}
}

// комбинируем оба класса в один(объеденяем функционал)
class CalcAdapter
{
    constructor()
    {
        this.calc = new NewCalc();
    }
    operations(x,y,operation)
    {
        switch(operation)
        {
            case "add": return this.calc.add(x, y);
            case "sub": return this.calc.sub(x, y);
            default: return NaN;
        }
    }
}

console.log(new CalcAdapter().operations(10, 20, "sub"));