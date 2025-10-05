import * as API from "./js/api.js";
import * as UI from "./js/ui.js";
import { initGraphQLPlayground } from "./js/playground.js";

function initTabs() {
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
}

async function loadGames(genre = "") {
  UI.showLoading("games-list", "Ładowanie gier...");

  try {
    const games = await API.fetchGames(genre);
    UI.renderGames(games, "games-list");
  } catch (error) {
    UI.showError("games-list", error.message);
  }
}

async function loadTopRatedGames() {
  UI.showLoading("games-list", "Ładowanie najlepiej ocenianych gier...");

  try {
    const games = await API.fetchTopRatedGames(5);
    UI.renderGames(games, "games-list");
  } catch (error) {
    UI.showError("games-list", error.message);
  }
}

async function loadReviews() {
  UI.showLoading("reviews-list", "Ładowanie recenzji...");

  try {
    const reviews = await API.fetchReviews();
    UI.renderReviews(reviews, "reviews-list");
  } catch (error) {
    UI.showError("reviews-list", error.message);
  }
}

async function loadAuthors() {
  UI.showLoading("authors-list", "Ładowanie autorów...");

  try {
    const authors = await API.fetchAuthors();
    UI.renderAuthors(authors, "authors-list");
  } catch (error) {
    UI.showError("authors-list", error.message);
  }
}

async function loadPublishers() {
  UI.showLoading("publishers-list", "Ładowanie wydawców...");

  try {
    const publishers = await API.fetchPublishers();
    UI.renderPublishers(publishers, "publishers-list");
  } catch (error) {
    UI.showError("publishers-list", error.message);
  }
}

async function populateFormSelects() {
  try {
    const data = await API.fetchFormData();

    UI.populateSelect(
      "game-publisher",
      data.publishers,
      '<option value="">Wybierz wydawcę (opcjonalnie)</option>'
    );
    UI.populateSelect(
      "review-game",
      data.games,
      '<option value="">Wybierz grę</option>'
    );
    UI.populateSelect(
      "review-author",
      data.authors,
      '<option value="">Wybierz autora</option>'
    );
  } catch (error) {
    console.error("Error populating selects:", error);
  }
}

function initForms() {
  document
    .getElementById("add-game-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const gameData = {
        name: document.getElementById("game-name").value,
        description: document.getElementById("game-description").value,
        releaseDate: document.getElementById("game-release-date").value,
        platforms: document
          .getElementById("game-platforms")
          .value.split(",")
          .map((p) => p.trim()),
        genre: document.getElementById("game-genre").value,
        publisherId: document.getElementById("game-publisher").value,
      };

      try {
        await API.addGame(gameData);
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

      const reviewData = {
        gameId: document.getElementById("review-game").value,
        authorId: document.getElementById("review-author").value,
        rating: document.getElementById("review-rating").value,
        comment: document.getElementById("review-comment").value,
        likes: document.getElementById("review-likes").value,
      };

      try {
        await API.addReview(reviewData);
        e.target.reset();
        alert("Recenzja została dodana!");
      } catch (error) {
        alert("Błąd: " + error.message);
      }
    });
}

function initFiltersAndActions() {
  document.getElementById("genre-filter").addEventListener("change", (e) => {
    loadGames(e.target.value);
  });

  document.getElementById("load-top-rated").addEventListener("click", () => {
    loadTopRatedGames();
  });
}

function init() {
  initTabs();
  initForms();
  initFiltersAndActions();
  initGraphQLPlayground();

  loadGames();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
