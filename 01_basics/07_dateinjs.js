// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Sun Jan 21 2024 00:47:17 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Sun Jan 21 2024
// console.log(myDate.toLocaleString()); // 1/21/2024, 12:48:45 AM
// console.log(typeof myDate) // object

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
  weekday: "long",
});
