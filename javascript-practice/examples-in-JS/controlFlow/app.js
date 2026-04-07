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

let hour = 10;

if (hour < 12) {
  if (hour < 6) {
    console.log("Jeszcze noc.");
  } else {
    console.log("Poranek.");
  }
} else {
  console.log("Popołudnie lub wieczór.");
}
