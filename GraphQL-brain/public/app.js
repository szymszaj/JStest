const GRAPHQL_URL = "http://localhost:4000/";

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(`${tabId}-tab`).classList.add("active");

    switch (tabId) {
      case "games":
        loadGames();
        break;
      case "reviews":
        loadReviews();
        break;
      case "authors":
        loadAuthors();
        break;
      case "publishers":
        loadPublishers();
        break;
      case "add":
        populateFormSelects();
        break;
    }
  });
});

async function graphqlQuery(query, variables = {}) {
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
    return result.data;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
}

async function loadGames(genre = "") {
  const container = document.getElementById("games-list");
  container.innerHTML = '<div class="loading">Ładowanie gier...</div>';

  try {
    let query;
    if (genre) {
      query = `
                query {
                    gamesByGenre(genre: "${genre}") {
                        id
                        name
                        description
                        releaseDate
                        platforms
                        genre
                        publisher {
                            name
                        }
                    }
                }
            `;
    } else {
      query = `
                query {
                    games {
                        id
                        name
                        description
                        releaseDate
                        platforms
                        genre
                        publisher {
                            name
                        }
                    }
                }
            `;
    }

    const data = await graphqlQuery(query);
    const games = genre ? data.gamesByGenre : data.games;

    if (games.length === 0) {
      container.innerHTML =
        '<div class="loading">Brak gier do wyświetlenia</div>';
      return;
    }

    container.innerHTML = games
      .map(
        (game) => `
            <div class="game-card">
                <h3>${game.name}</h3>
                ${game.genre ? `<span class="genre">${game.genre}</span>` : ""}
                <p class="description">${game.description || "Brak opisu"}</p>
                <div class="platforms">
                    ${game.platforms
                      .map((p) => `<span class="platform">${p}</span>`)
                      .join("")}
                </div>
                <p class="date">📅 ${game.releaseDate}</p>
                ${
                  game.publisher
                    ? `<p class="date">🏢 ${game.publisher.name}</p>`
                    : ""
                }
            </div>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<div class="error">Błąd: ${error.message}</div>`;
  }
}

async function loadTopRatedGames() {
  const container = document.getElementById("games-list");
  container.innerHTML =
    '<div class="loading">Ładowanie najlepiej ocenianych gier...</div>';

  try {
    const query = `
            query {
                topRatedGames(limit: 5) {
                    id
                    name
                    description
                    releaseDate
                    platforms
                    genre
                    publisher {
                        name
                    }
                }
            }
        `;

    const data = await graphqlQuery(query);
    const games = data.topRatedGames;

    container.innerHTML = games
      .map(
        (game) => `
            <div class="game-card">
                <h3>${game.name}</h3>
                ${game.genre ? `<span class="genre">${game.genre}</span>` : ""}
                <p class="description">${game.description || "Brak opisu"}</p>
                <div class="platforms">
                    ${game.platforms
                      .map((p) => `<span class="platform">${p}</span>`)
                      .join("")}
                </div>
                <p class="date">📅 ${game.releaseDate}</p>
                ${
                  game.publisher
                    ? `<p class="date">🏢 ${game.publisher.name}</p>`
                    : ""
                }
            </div>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<div class="error">Błąd: ${error.message}</div>`;
  }
}

async function loadReviews() {
  const container = document.getElementById("reviews-list");
  container.innerHTML = '<div class="loading">Ładowanie recenzji...</div>';

  try {
    const query = `
            query {
                reviews {
                    id
                    rating
                    comment
                    likes
                    game {
                        name
                    }
                    author {
                        name
                    }
                }
            }
        `;

    const data = await graphqlQuery(query);

    container.innerHTML = data.reviews
      .map(
        (review) => `
            <div class="review-card">
                <div class="review-header">
                    <span class="review-rating">⭐ ${review.rating}/10</span>
                    <span class="review-likes">❤️ ${review.likes} polubień</span>
                </div>
                <p class="review-comment">"${review.comment}"</p>
                <div class="review-meta">
                    <strong>Gra:</strong> ${review.game.name} | 
                    <strong>Autor:</strong> ${review.author.name}
                </div>
            </div>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<div class="error">Błąd: ${error.message}</div>`;
  }
}

async function loadAuthors() {
  const container = document.getElementById("authors-list");
  container.innerHTML = '<div class="loading">Ładowanie autorów...</div>';

  try {
    const query = `
            query {
                authors {
                    id
                    name
                    email
                    verified
                    reviews {
                        id
                    }
                }
            }
        `;

    const data = await graphqlQuery(query);

    container.innerHTML = data.authors
      .map(
        (author) => `
            <div class="author-card">
                <h3>${author.name}</h3>
                <p class="email">📧 ${author.email}</p>
                <p class="${author.verified ? "verified" : "not-verified"}">
                    ${
                      author.verified
                        ? "✓ Zweryfikowany"
                        : "✗ Nie zweryfikowany"
                    }
                </p>
                <p>📝 Liczba recenzji: ${author.reviews.length}</p>
            </div>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<div class="error">Błąd: ${error.message}</div>`;
  }
}

async function loadPublishers() {
  const container = document.getElementById("publishers-list");
  container.innerHTML = '<div class="loading">Ładowanie wydawców...</div>';

  try {
    const query = `
            query {
                publishers {
                    id
                    name
                    country
                    founded
                    games {
                        id
                        name
                    }
                }
            }
        `;

    const data = await graphqlQuery(query);

    container.innerHTML = data.publishers
      .map(
        (publisher) => `
            <div class="publisher-card">
                <h3>${publisher.name}</h3>
                <p class="info">🌍 ${publisher.country}</p>
                <p class="info">📅 Założono: ${publisher.founded}</p>
                <p class="info">🎮 Liczba gier: ${publisher.games.length}</p>
                <div style="margin-top: 10px;">
                    ${publisher.games
                      .map((g) => `<span class="platform">${g.name}</span>`)
                      .join(" ")}
                </div>
            </div>
        `
      )
      .join("");
  } catch (error) {
    container.innerHTML = `<div class="error">Błąd: ${error.message}</div>`;
  }
}

async function populateFormSelects() {
  try {
    const query = `
            query {
                games {
                    id
                    name
                }
                authors {
                    id
                    name
                }
                publishers {
                    id
                    name
                }
            }
        `;

    const data = await graphqlQuery(query);

    const publisherSelect = document.getElementById("game-publisher");
    publisherSelect.innerHTML =
      '<option value="">Wybierz wydawcę (opcjonalnie)</option>' +
      data.publishers
        .map((p) => `<option value="${p.id}">${p.name}</option>`)
        .join("");

    const gameSelect = document.getElementById("review-game");
    gameSelect.innerHTML =
      '<option value="">Wybierz grę</option>' +
      data.games
        .map((g) => `<option value="${g.id}">${g.name}</option>`)
        .join("");

    const authorSelect = document.getElementById("review-author");
    authorSelect.innerHTML =
      '<option value="">Wybierz autora</option>' +
      data.authors
        .map((a) => `<option value="${a.id}">${a.name}</option>`)
        .join("");
  } catch (error) {
    console.error("Error populating selects:", error);
  }
}

document
  .getElementById("add-game-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("game-name").value;
    const description = document.getElementById("game-description").value;
    const releaseDate = document.getElementById("game-release-date").value;
    const platforms = document
      .getElementById("game-platforms")
      .value.split(",")
      .map((p) => p.trim());
    const genre = document.getElementById("game-genre").value;
    const publisherId = document.getElementById("game-publisher").value;

    try {
      const mutation = `
            mutation {
                addGame(
                    name: "${name}"
                    description: "${description}"
                    releaseDate: "${releaseDate}"
                    platforms: ${JSON.stringify(platforms)}
                    genre: "${genre}"
                    ${publisherId ? `publisherId: "${publisherId}"` : ""}
                ) {
                    id
                    name
                }
            }
        `;

      await graphqlQuery(mutation);

      e.target.reset();
      alert("Gra została dodana!");
      populateFormSelects();
    } catch (error) {
      alert("Błąd: " + error.message);
    }
  });

document
  .getElementById("add-review-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const gameId = document.getElementById("review-game").value;
    const authorId = document.getElementById("review-author").value;
    const rating = document.getElementById("review-rating").value;
    const comment = document.getElementById("review-comment").value;
    const likes = document.getElementById("review-likes").value;

    try {
      const mutation = `
            mutation {
                addReview(
                    gameId: "${gameId}"
                    authorId: "${authorId}"
                    rating: ${rating}
                    comment: "${comment}"
                    likes: ${likes}
                ) {
                    id
                    rating
                }
            }
        `;

      await graphqlQuery(mutation);

      e.target.reset();
      alert("Recenzja została dodana!");
    } catch (error) {
      alert("Błąd: " + error.message);
    }
  });

document.getElementById("genre-filter").addEventListener("change", (e) => {
  loadGames(e.target.value);
});

document.getElementById("load-top-rated").addEventListener("click", () => {
  loadTopRatedGames();
});

const exampleQueries = {
  allGames: `query {
  games {
    id
    name
    genre
    platforms
    publisher {
      name
    }
  }
}`,
  gameWithReviews: `query {
  game(id: "1") {
    name
    description
    reviews {
      rating
      comment
      author {
        name
      }
    }
  }
}`,
  topRated: `query {
  topRatedGames(limit: 3) {
    name
    genre
    reviews {
      rating
    }
  }
}`,
  publisherGames: `query {
  publisher(id: "1") {
    name
    country
    games {
      name
      releaseDate
    }
  }
}`,
};

document.querySelectorAll(".example-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const queryType = btn.getAttribute("data-query");
    document.getElementById("graphql-query").value = exampleQueries[queryType];
  });
});

document.getElementById("execute-query").addEventListener("click", async () => {
  const query = document.getElementById("graphql-query").value;
  const resultContainer = document.getElementById("graphql-result");

  if (!query.trim()) {
    resultContainer.textContent = "Wprowadź zapytanie GraphQL";
    return;
  }

  resultContainer.textContent = "Wykonywanie zapytania...";

  try {
    const data = await graphqlQuery(query);
    resultContainer.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultContainer.textContent = `Błąd: ${error.message}`;
  }
});

loadGames();
