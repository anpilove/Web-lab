
function isPalindrome(str) {
    var reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false


function replaceNegativeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = Math.pow(arr[i], 2);
        }
    }
    return arr;
}

let numbers = [-2, 4, -6, 8, -10];
console.log(replaceNegativeNumbers(numbers)); // [4, 4, 36, 8, 100]

class User {
    constructor(name) {
        this.name = name;
    }

    showMessage() {
        alert(`Привет, ${this.name}!`);
    }
}

let user = new User('John');
user.showMessage(); // Выведет "Привет, John!"

class MyClass {
    constructor() {
        this.message = "Hello, JavaScript!";
    }

    showMessage() {
        console.log(this.message);
    }
}

let myObject = new MyClass();
myObject.showMessage(); // Выведет "Hello, JavaScript!"


class NameReverser {
    constructor(name) {
        this.name = name;
    }

    reverseName() {
        return this.name.split('').reverse().join('');
    }
}

let myName = new NameReverser('John');
console.log(myName.reverseName()); // "nhoJ"

