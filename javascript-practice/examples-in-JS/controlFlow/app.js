let temperature = 18;

if (temperature > 25) {
  console.log("Jest gorąco.");
} else if (temperature >= 15) {
  console.log("Jest umiarkowanie.");
} else {
  console.log("Jest zimno.");
}

let day = "środa";

switch (day) {
  case "poniedziałek":
    console.log("Początek tygodnia.");
    break;
  case "środa":
    console.log("Środek tygodnia.");
    break;
  case "piątek":
    console.log("Prawie weekend!");
    break;
  default:
    console.log("Zwykły dzień.");
}

function checkAge(age) {
  if (age >= 18) {
    return "Jesteś pełnoletni.";
  } else {
    return "Jesteś niepełnoletni.";
  }
}

console.log(checkAge(22));
console.log(checkAge(15));
