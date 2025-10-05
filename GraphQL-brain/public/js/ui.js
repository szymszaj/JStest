export function renderGames(games, containerId) {
  const container = document.getElementById(containerId);

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
}

export function renderReviews(reviews, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = reviews
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
}

export function renderAuthors(authors, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = authors
    .map(
      (author) => `
        <div class="author-card">
            <h3>${author.name}</h3>
            <p class="email">📧 ${author.email}</p>
            <p class="${author.verified ? "verified" : "not-verified"}">
                ${author.verified ? "✓ Zweryfikowany" : "✗ Nie zweryfikowany"}
            </p>
            <p>📝 Liczba recenzji: ${author.reviews.length}</p>
        </div>
    `
    )
    .join("");
}

export function renderPublishers(publishers, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = publishers
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
}

export function showLoading(containerId, message = "Ładowanie...") {
  const container = document.getElementById(containerId);
  container.innerHTML = `<div class="loading">${message}</div>`;
}

export function showError(containerId, message) {
  const container = document.getElementById(containerId);
  container.innerHTML = `<div class="error">Błąd: ${message}</div>`;
}

export function populateSelect(selectId, options, defaultOption) {
  const select = document.getElementById(selectId);
  select.innerHTML =
    defaultOption +
    options
      .map((opt) => `<option value="${opt.id}">${opt.name}</option>`)
      .join("");
}
