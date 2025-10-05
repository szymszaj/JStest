import { graphqlQuery } from "./api.js";

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

export function initGraphQLPlayground() {
  document.querySelectorAll(".example-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const queryType = btn.getAttribute("data-query");
      document.getElementById("graphql-query").value =
        exampleQueries[queryType];
    });
  });

  document
    .getElementById("execute-query")
    .addEventListener("click", async () => {
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
}
