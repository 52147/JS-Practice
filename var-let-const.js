function testVar() {
    var x = 1;
    if (true) {
        var x = 2;  // Same variable!
        console.log(x);  // Outputs: 2
    }
    console.log(x);  // Outputs: 2
}
testVar()
function testLet() {
    let x = 1;
    if (true) {
        let x = 2;  // Different variable
        console.log(x);  // Outputs: 2
    }
    console.log(x);  // Outputs: 1
}
testLet()
function testConst() {
    const x = 1;
    if (true) {
        const x = 2;  // Different variable
        console.log(x);  // Outputs: 2
    }
    console.log(x);  // Outputs: 1
}
testConst()