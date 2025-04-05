const fs = require("fs");

function generateLottoTicket(totalNumbers = 6, range = 49) {
  const ticket = new Set();

  while (ticket.size < totalNumbers) {
    const number = Math.floor(Math.random() * range) + 1;
    ticket.add(number);
  }

  return Array.from(ticket).sort((a, b) => a - b);
}

function generateLottoTickets(totalTickets = 10, totalNumbers = 6, range = 49) {
  const tickets = [];

  for (let i = 0; i < totalTickets; i++) {
    tickets.push(generateLottoTicket(totalNumbers, range));
  }

  return tickets;
}

function saveTicketsToFile(tickets, filename = "lotto_tickets.txt") {
  const fileContent = tickets
    .map((ticket, index) => `Ticket ${index + 1}: ${ticket.join(", ")}`)
    .join("\n");
  fs.writeFileSync(filename, fileContent);
}

const totalTickets = 10;
const totalNumbers = 6;
const range = 49;
const results = generateLottoTickets(totalTickets, totalNumbers, range);

results.forEach((ticket, index) => {
  console.log(`Ticket ${index + 1}:`, ticket.join(", "));
});

saveTicketsToFile(results);
