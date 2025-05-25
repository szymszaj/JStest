function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleSearch = debounce((query) => {
  console.log("Sending API request:", query);
}, 500);

handleSearch("React");
