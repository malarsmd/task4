(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5]);
(function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
})(["hello", "world"]);

3. Sum of all numbers in an array:
javascript
    (function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
    })([1, 2, 3, 4, 5]);
(function (arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    var primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
})([1, 2, 3, 4, 5]);

5. Return all the palindromes in an array:
javascript
    (function (arr) {
        function isPalindrome(str) {
            str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
            var len = str.length;
            for (var i = 0; i < len / 2; i++) {
                if (str[i] !== str[len - 1 - i]) {
                    return false;
                }
            }
            return true;
        }
        var palindromes = arr.filter(isPalindrome);
        console.log(palindromes);
    })(["level", "hello", "radar"]);
  
  Using Arrow Functions:
1. Print odd numbers in an array:
javascript
const printOdd = arr => {
    arr.forEach(item => {
        if (item % 2 !== 0) {
            console.log(item);
        }
    });
};
printOdd([1, 2, 3, 4, 5]);
const toTitleCaps = arr => {
    return arr.map(str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()));
};
console.log(toTitleCaps(["hello", "world"]));

3. Sum of all numbers in an array:
javascript
const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1, 2, 3, 4, 5]));
const toTitleCaps = arr => {
    return arr.map(str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()));
};
console.log(toTitleCaps(["hello", "world"]));

3. Sum of all numbers in an array:
javascript
const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1, 2, 3, 4, 5]));
const toTitleCaps = arr => {
    return arr.map(str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()));
};
console.log(toTitleCaps(["hello", "world"]));

3. Sum of all numbers in an array:
javascript
const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArray([1, 2, 3, 4, 5]));
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = arr => arr.filter(isPrime);
console.log(primeNumbers([1, 2, 3, 4, 5]));

5. Return all the palindromes in an array:
```javascript
  const isPalindrome = str => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  const palindromes = arr => arr.filter(isPalindrome);
  console.log(palindromes(["level", "hello", "radar"]));