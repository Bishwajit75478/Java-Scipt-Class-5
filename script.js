// Java script ternay operator
// if else exam
let age = 5;
if (age >= 18) {
  console.log("You Area full aga.");
} else {
  console.log("you are not full age.");
}

// ternay operator
age >= 18
  ? console.log("You Area full aga.")
  : console.log("you are not full age.");

// example tow
let food;
if (age > 12) {
  food = "chicken";
} else {
  food = "ice caram";
}
console.log(`He Like To Eat ${food}`);
//
console.log(`He Like To Eat ${age > 12 ? "chicken" : "ice cram"}`);

//           2 . javascript function
// Exampul 1
function ShowText() {
  console.log("some Text!");
}
ShowText();
ShowText();
ShowText();
ShowText();

// example tow
function ShowName(name) {
  console.log(name);
}
ShowName("Bishwajit");
ShowName("HAZRA");

// Example Three
function calculateNumber(n1, n2) {
  console.log(n1 * n2);
}
calculateNumber(4, 5);
calculateNumber(45, 578);

// Exampul four
function averagemark(s1, s2, s3, s4, s5) {
  console.log((s1 + s2 + s3 + s4 + s5) / 5);
}
averagemark(40, 39, 38, 29, 19);

function averagemark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5;
  return average;
}

// A Mark
const aAveragemark = averagemark(40, 39, 38, 29, 19);
console.log(aAveragemark);

// B mark
const BAveragemark = averagemark(59, 56, 45, 45, 42);
console.log(BAveragemark);

//  c mark
const CAveragemark = averagemark(99, 87, 65, 65, 76);
console.log(CAveragemark);

console.log(aAveragemark, BAveragemark, CAveragemark);
