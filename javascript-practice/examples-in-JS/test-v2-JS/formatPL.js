const formatPLN = (n) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(n);

export default formatPLN;
