function Dog(name, breed, age, weight) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weight = weight;
  this.eat = function () {
    console.log(this.name + ": Chomp");
  };
  this.bark = function () {
    console.log(this.name + ": Woof");
  };
}

const twoSumSolver = {
  findPairs(nums, target) {
    const map = new Map();
    const result = [];

    nums.forEach((num, i) => {
      const complement = target - num;
      if (map.has(complement)) {
        result.push([map.get(complement), i]);
      }
      map.set(num, i);
    });

    return result;
  },
};

const library = {
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      available: true,
    },
    { title: "1984", author: "George Orwell", available: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      available: true,
    },
    { title: "Moby-Dick", author: "Herman Melville", available: false },
  ],

  listAvailableBooks() {
    console.log("Available books:");
    this.books.forEach((book) => {
      if (book.available) {
        console.log(`${book.title} by ${book.author}`);
      }
    });
  },

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book && book.available) {
      book.available = false;
      console.log(`You have borrowed "${book.title}" by ${book.author}`);
    } else if (book) {
      console.log(`Sorry, "${book.title}" is currently unavailable.`);
    } else {
      console.log(`Sorry, we don't have "${title}" in our library.`);
    }
  },

  returnBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book && !book.available) {
      book.available = true;
      console.log(`You have returned "${book.title}" by ${book.author}`);
    } else if (book) {
      console.log(`"${book.title}" was not borrowed.`);
    } else {
      console.log(`Sorry, we don't have "${title}" in our library.`);
    }
  },
};
