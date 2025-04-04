class ProgrammerLife {
  constructor() {
    this.coffeeLevel = 0;
    this.motivation = 100;
    this.bugs = 999;
    this.todo = [
      "fix bug",
      "attend meeting",
      "scroll StackOverflow",
      "cry internally",
    ];
  }

  startDay() {
    console.log("🔁 Good morning, time for another sprint!");
    this.drinkCoffee();
    this.checkEmails();
    this.code();
  }

  drinkCoffee() {
    this.coffeeLevel++;
    this.motivation += 10;
    console.log("☕️ Coffee++ | Motivation: " + this.motivation);
  }

  checkEmails() {
    console.log("📬 Checking emails... Uh-oh, another ticket arrived!");
    this.todo.push("fix something that used to work");
  }

  code() {
    while (this.todo.length > 0 && this.motivation > 0) {
      const task = this.todo.shift();
      console.log(`💻 Working on: ${task}`);

      if (task.includes("bug")) {
        this.fixBug();
      } else {
        this.randomEvent();
      }

      this.motivation -= 15;
    }

    if (this.motivation <= 0) {
      console.log("😩 Out of motivation. Time for some dev memes.");
    }

    console.log("🛌 Day over. Shutting down...");
  }

  fixBug() {
    if (Math.random() > 0.7) {
      console.log("✅ Bug fixed!");
      this.bugs--;
    } else {
      console.log("❌ You fixed one, three new ones appeared...");
      this.bugs += 2;
      this.todo.push("fix 3 new bugs");
    }
  }

  randomEvent() {
    const events = [
      "💥 Production just crashed!",
      "🧑‍💻 PR from junior with zero context",
      '📞 Boss calling with a new "idea"',
      "😵 Merge conflict... with yourself",
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    console.log(`🔔 Random event: ${event}`);
    this.motivation -= 10;
  }
}

const monday = new ProgrammerLife();
monday.startDay();
