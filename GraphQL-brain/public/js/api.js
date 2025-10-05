const GRAPHQL_URL = "http://localhost:4000/";

export async function graphqlQuery(query, variables = {}) {
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

export async function fetchGames(genre = "") {
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
  return genre ? data.gamesByGenre : data.games;
}

export async function fetchTopRatedGames(limit = 5) {
  const query = `
        query {
            topRatedGames(limit: ${limit}) {
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
  return data.topRatedGames;
}

export async function fetchReviews() {
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
  return data.reviews;
}

export async function fetchAuthors() {
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
  return data.authors;
}

export async function fetchPublishers() {
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
  return data.publishers;
}

export async function fetchFormData() {
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

  return await graphqlQuery(query);
}

export async function addGame(gameData) {
  const { name, description, releaseDate, platforms, genre, publisherId } =
    gameData;

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

  return await graphqlQuery(mutation);
}

export async function addReview(reviewData) {
  const { gameId, authorId, rating, comment, likes } = reviewData;

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

  return await graphqlQuery(mutation);
}
