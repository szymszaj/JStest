function generateLottoTicket() {
  const ticket = new Set();

  while (ticket.size < 6) {
    const number = Math.floor(Math.random() * 49) + 1;
    ticket.add(number);
  }

  return Array.from(ticket).sort((a, b) => a - b);
}

function generateLottoTickets(totalTickets = 10) {
  const tickets = [];

  for (let i = 0; i < totalTickets; i++) {
    tickets.push(generateLottoTicket());
  }

  return tickets;
}

const results = generateLottoTickets();
results.forEach((ticket, index) => {
  console.log(`Ticket ${index + 1}:`, ticket.join(", "));
});
