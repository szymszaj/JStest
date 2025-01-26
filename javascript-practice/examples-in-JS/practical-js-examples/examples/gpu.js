const GPUOld = [
  { name: "GTX 1080", brand: "Nvidia", price: 500, led: true },
  { name: "RX 580", brand: "AMD", price: 250, led: false },
  { name: "GTX 1070", brand: "Nvidia", price: 400, led: true },
  { name: "RX 570", brand: "AMD", price: 200, led: false },
  { name: "GTX 1060", brand: "Nvidia", price: 300, led: true },
  { name: "RX 560", brand: "AMD", price: 150, led: false },
  { name: "GTX 1050", brand: "Nvidia", price: 150, led: true },
  { name: "RX 550", brand: "AMD", price: 100, led: false },
];

const GPUNew = [
  { name: "RTX4060", brand: "Nvidia", price: 300, led: false },
  { name: "RTX4070", brand: "Nvidia", price: 400, led: false },
  { name: "RTX4070ti", brand: "Nvidia", price: 550, led: true },
  { name: "RTX4080", brand: "Nvidia", price: 1110, led: true },
  { name: "RTX4090", brand: "Nvidia", price: 1450, led: true },
];

const allGPU = [...GPUOld, ...GPUNew];

allGPU.sort((a, b) => a.price - b.price);

const amdGPUs = allGPU.filter((gpu) => gpu.brand === "AMD");
const nvidiaGPUs = allGPU.filter((gpu) => gpu.brand === "Nvidia");

console.log("Karty AMD posortowane według ceny:");
amdGPUs.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});

console.log("\nKarty Nvidia posortowane według ceny:");
nvidiaGPUs.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});

const amdLED = amdGPUs.filter((gpu) => gpu.led);
const nvidiaLED = nvidiaGPUs.filter((gpu) => gpu.led);

console.log("Karty AMD z LED posortowane według ceny:");
amdLED.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});

console.log("\nKarty Nvidia z LED posortowane według ceny:");
nvidiaLED.forEach((gpu) => {
  console.log(`${gpu.name} - $${gpu.price}`);
});
