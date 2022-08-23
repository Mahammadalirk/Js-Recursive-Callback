
// function sum(n) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }

// console.log(sum(5));

// function getSum(n) {
//     if (n == 1) {
//         return n;
//     }
//     else {
//         return (n + getSum(n - 1))
//     }
// }
// console.log(getSum(3));

// function getFactorial(m) {
//     if (m == 1) {
//         return m;
//     }
//     else {
//         return (m * getFactorial(m - 1))
//     }
// }
// console.log(getFactorial(4));

// let nums = ["Bir", "Iki", "Uc", "Dord"];

// nums.forEach((elem, index, arr) => {
//     console.log(elem + "-" + index + arr);
// });


// let users = [{
//     email: "haqverdi@code.edu.az",
//     password: "12345"

// },
// {
//     email: "cavid@code.edu.az",
//     password: "12345"
// },

// {
//     email: "maga@code.edu.az",
//     password: "134985"
// },
// {
//     email: "sadiq@code.edu.az",
//     password: "12345"
// }]

// for (const key in users) {
//     // console.log(users[key]);
//     // console.log(users[key].email);
//     console.log(users[key].password);
// }



// let nums = [1, 2, 3, 4, 5, 6, 7, 8]

// function evenNum(n) {
//     return n % 2 == 0;
// }

// function oddNum(n) {
//     return n % 2 != 1;
// }

// function moreThree(n) {
//     return n >= 3;
// }

// function sumEvenNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumOddNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNums(nums), evenNum);
// console.log(sumEvenNums(nums), oddNum);
// console.log(sumThanThree(nums), moreThree);


// let evenNums = (n) => n % 2 == 0;

// let evenOdds = (n) => n % 2 != 0;

// let moreThree = (n) => n >= 3;


// function sumEvenNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumOddNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNums(nums, (n) => n % 2 == 0));
// console.log(sumEvenNums(nums, (n) => n % 2 != 0));
// console.log(sumThanThree(nums, (n) => n >= 3));


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums);
// let filtered = nums.filter(m => m >= 7);

// function sumFiltered(arr) {

//     let sum = 0;
//     for (const item of arr) {
//         sum += item
//     }
//     return sum;
// }
// console.log(sumFiltered(filtered));

// nums.forEach((item, index) => {
//     nums[index] = item * 2;

// });
// console.log(nums);
// let result = nums.map(m=>m/2)
// console.log(result);

// let users = [
//     {
//         name: "Cavid",
//         surname: "Beshirov",
//         age: 40
//     },
//     {
//         name: "Eli",
//         surname: "Eliyev",
//         age: 20
//     },
//     {
//         name: "Veli",
//         surname: "Veliyev",
//         age: 60
//     }
// ]
// let date = new Date();

// let result = users.map(m => {
//     return {
//         fullname: m.name + m.surname,
//         yearOfBirth: date.getFullYear() - m.age
//     }

// })
// console.log(result);

