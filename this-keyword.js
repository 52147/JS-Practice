let myObj = {
  prop: "I am a property!",
  method: function () {
    console.log(this.prop);
  },
};

myObj.method(); // 'I am a property!'

function myFunction() {
  console.log(this);
}

myFunction(); // Window {...} (or global in Node.js environment)

// button.addEventListener("click", function () {
//   console.log(this); // the button element
// });

function MyConstructor() {
  this.prop = "I am a property!";
}

let myInstance = new MyConstructor();
console.log(myInstance.prop); // 'I am a property!'
