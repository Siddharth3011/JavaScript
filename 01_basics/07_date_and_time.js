// dates:

let mydate = new Date()
// console.log(mydate.toString()); //it prints everything day, date, time, IST
// console.log(mydate.toDateString()); //it prints only day and date
// console.log(mydate.toISOString()); // date(in formate yyyy-mm-dd) and location
// console.log(mydate.toLocaleString()); //it prints date, time and am,pm
// console.log(mydate.toLocaleDateString()); //date
// console.log(mydate.toLocaleTimeString()); //time

// console.log(typeof mydate); // date object type data type hota hai

// let myCreateDate = new Date(2023, 0,23);
// let myCreateDate = new Date(2023, 0, 23,5,3);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-04-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateStamp.getTime());
// console.log(Math.floor(Date.now())/1000);

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1); //month and date dono 0 se start hongi
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})
