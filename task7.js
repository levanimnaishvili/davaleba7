task.js
/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .
!!!!დაწერეთ ამ ამოცანის მინიმუმ სამი სხვადასხვა ამოხსნის გზა 
function palindrom(txt) {

}

*/
//version #1
let Word = 'Abba';
function reverseString(str) {
    return str.split("").reverse().join("");
}


function palindrom(txt) {
    if(txt.toLowerCase() === reverseString(txt.toLowerCase()) && txt === txt.toLowerCase() || txt.toLowerCase() === reverseString(txt.toLowerCase()) && txt === txt.toUpperCase() ){
        return true
    }else{
        return false
    }
}
console.log(palindrom(Word));
//version #2
let palWord = 'status';
function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function palindrom(txt) {
    if(txt === reverseString(txt)){
        return "it's palindrom"
    }else{
        return "it's not a palindrom"
    }
}
console.log(palindrom(palWord));

//version #3
let word = "hesa";
function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
  }
  console.log(isPalindrome(word))
//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'


*/
let nonRepeated = 'abcdefabcde';
function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
      let c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }
console.log(firstNonRepeatedCharacter(nonRepeated))

// let aa = "abca"
// let aaa = "b"
// console.log(aa.indexOf(aaa,2))
/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/


/*


//Task 4

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/


/*
Task 5 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/



let  array = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ];

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
function readyToPutInTheDOM(arr) {
    return arr.map(el => `<h1>${el.name}</h1><h2>${el.age}</h2>`);
}
console.log(readyToPutInTheDOM(array))

//Task 6

/*

დაწერეთ ფუნქცია რომელიც დაითვლის ნულების მიმდევრობის რაოდენობას .  მიმდევრობა ვალიდურია თუ კი არის არანაკლებ 4 სიგრძისა 

[0, 0, 0, 0, 0, 1]  -->  1
# ერთი ჯგუფი 0ლების მიმდევრობის რომელიც 4ზე მეტია

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# ორი სხვადასხვა 4 სიგრძის მიმდევრობა

[0, 0, 0, 1, 0]  -->  0 
# ერთი მიმდევრობა არის 3 სიგრძის მეორე 1 სიგრძის ანუ არც ერთი არ არის ვალიდური და ფუნქციამ უნდა დაგვიბრუნოს 0 

[0, 0, 0, 1, 0, 0]  -->  0
# იგივე

[1, 2, 3, 4, 5]  -->  0
# საერთოდ არ გვაქვს მიმდევრობა

[]  -->  0
# ცარიელია


*/


//Task 7
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

hint : 15670 
1567 % 10 -> 7
156 % 10 -> 6
15 % 10 -> 5

n < 10 -> n 
*/
let number = 15670000001;
function sumOfDigits (n) {
    if(n < 10) {
        return n
    } else {
        return n % 10 + sumOfDigits(Math.floor(n / 10))
    }
}
console.log(sumOfDigits(number))

//with recursion
let findSum = (num) => {
    if(num < 10){
       return num;
    }
    let lastDigit = num % 10;
    let remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(1567));

//Task 8
//დაწერეთ TO-DO List , input ველით 