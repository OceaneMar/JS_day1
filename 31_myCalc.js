/*
let calc = new Calc(); 
 
console.log(calc.compute("1+2")); //"1+2=3" 
console.log(calc.compute("2-1")); //"2-1=1" 
console.log(calc.compute("2*3")); //"2*3=6" 
console.log(calc.compute("10/2")); //"10/2=5" 
 
console.log(calc.lastResult()); //5 
console.log(calc.history());//["1+2=3","2-1=1","2*3=6","10/2=5"]
*/

class Calc {
    constructor () {
        this._lastResult = null;
        this._history = [];
    }

    compute (expression) {
        //parsing
        let arr = expression.split(/[+*\/-]/g);

        arr = arr.map(i => parseInt(i));

        //calcul
        let result = null;
        if (expression.includes("+")) {
            result = arr[0] + arr[1];
        } else if (expression.includes("-")) {
            result = arr[0] - arr[1];
        } else if (expression.includes("*")) {
            result = arr[0] * arr[1];
        } else if (expression.includes("/")) {
            if (arr[1]===0) {
                console.log("impossible de diviser par 0");
                return;
            }
            result = arr[0] / arr[1];
        } else {
            console.log("il y a un problème dans le calcul");
        };

        //affecter le résultat dans la clé du constructeur de la classe
        this._lastResult = result;

        // formater le résultat
        result = `${expression} = ${result}`;

        //history
        this._history.push(result);

        //return
        return result;
    }

    lastResult() {
        return this._lastResult;
    }

    history() {
        return this._history;
    }
}

let calc = new Calc();

console.log(calc.compute("1+2"));
console.log(calc.compute("15-5"));
console.log(calc.compute("2*5"));
console.log(calc.compute("10/2"));

module.exports= Calc;