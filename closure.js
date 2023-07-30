function outerFunction() {
    let outerVariable = 'I am from outer function!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let myNewFunction = outerFunction();
myNewFunction();  // Logs: 'I am from outer function!'

// Here is a more practical use case - creating private variables:

function createCounter(){
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    };
}
let counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());