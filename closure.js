function outerFunction() {
    let outerVariable = 'I am from outer function!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let myNewFunction = outerFunction();
myNewFunction();  // Logs: 'I am from outer function!'
