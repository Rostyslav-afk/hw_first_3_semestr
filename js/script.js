const age = 12;
console.log(age);
const name = "Rostyslav";
console.log(name);
const isStudent = true;
console.log(isStudent);
const myString = "去る者を引き留めてはならない、到着した者を追い払ってはならない";
console.log(myString);
const myNumber = 10;
console.log(myNumber + 10);
const myNull = null;
console.log(myNull)
let userName = prompt("Your name: ");
if (userName) {
    alert("Thank you " + userName + " !")
}
let hotelReservatiion = confirm("Please confirm your reservation!");
if (hotelReservatiion) {
    alert("Thank you!")
} else {
    alert("The action is over(")
}
let disclaimer = confirm("This action is dangerous! Please click on button Ok or Cancel.");
if (disclaimer) {
    alert("Thank you!")
} else {
    alert("The action is over(")
}