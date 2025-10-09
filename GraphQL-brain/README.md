# GraphQL Games Review API

🎮 Kompletny projekt GraphQL API do zarządzania bazą gier, recenzji, autorów i wydawców z interaktywnym frontendem.

## 📋 Funkcjonalności

### Backend (GraphQL API)

- **Games** - zarządzanie grami (dodawanie, usuwanie, wyszukiwanie)
- **Reviews** - recenzje gier z ocenami i polubienami
- **Authors** - autorzy recenzji (zweryfikowani/niezweryfikowani)
- **Publishers** - wydawcy gier
- **Advanced Queries**:
  - Wyszukiwanie gier po gatunku
  - Top oceniane gry
  - Relacje między wszystkimi typami

### Frontend

- **Zakładka Gry** - przeglądanie wszystkich gier, filtrowanie po gatunku, top rated games
- **Zakładka Recenzje** - wszystkie recenzje z ocenami i polubienami
- **Zakładka Autorzy** - lista autorów z ich statystykami
- **Zakładka Wydawcy** - wydawcy z listą ich gier
- **Zakładka Dodaj** - formularze do dodawania nowych gier i recenzji
- **GraphQL Playground** - interaktywne wykonywanie zapytań GraphQL

## 🚀 Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski (z hot reload)
npm run dev

# Lub uruchom normalnie
npm start
```

## 🌐 Dostęp

Po uruchomieniu serwera:

- **GraphQL API**: http://localhost:4000/
- **Frontend**: http://localhost:4000/
- **Apollo Studio**: http://localhost:4000/ (GraphQL Playground w przeglądarce)

## 📝 Przykładowe Zapytania GraphQL

### Pobierz wszystkie gry

```graphql
query {
  games {
    id
    name
    genre
    platforms
    publisher {
      name
    }
  }
}
```

### Pobierz grę z recenzjami

```graphql
query {
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
}
```

### Wyszukaj gry po gatunku

```graphql
query {
  gamesByGenre(genre: "RPG") {
    name
    releaseDate
    platforms
  }
}
```

### Top oceniane gry

```graphql
query {
  topRatedGames(limit: 5) {
    name
    genre
    reviews {
      rating
    }
  }
}
```

### Wydawca z grami

```graphql
query {
  publisher(id: "1") {
    name
    country
    games {
      name
      releaseDate
      genre
    }
  }
}
```

## 🔧 Mutacje

### Dodaj nową grę

```graphql
mutation {
  addGame(
    name: "Dark Souls 3"
    description: "Trudna gra souls-like"
    releaseDate: "2016-04-12"
    platforms: ["PC", "PS4", "Xbox One"]
    genre: "RPG"
    publisherId: "5"
  ) {
    id
    name
  }
}
```

### Dodaj recenzję

```graphql
mutation {
  addReview(
    gameId: "1"
    authorId: "2"
    rating: 9
    comment: "Świetna gra!"
    likes: 5
  ) {
    id
    rating
  }
}
```

### Dodaj autora

```graphql
mutation {
  addAuthor(name: "Nowy Recenzent", email: "nowy@email.com", verified: true) {
    id
    name
  }
}
```

### Usuń grę

```graphql
mutation {
  deleteGame(id: "1")
}
```

## 📁 Struktura Projektu

```
GraphQL-brain/
├── index.js          # Główny plik serwera (Express + Apollo)
├── schema.js         # Definicje typów GraphQL
├── resolvers.js      # Resolvery dla zapytań i mutacji
├── data.js           # Przykładowe dane
├── package.json      # Konfiguracja npm
├── public/           # Pliki frontendu
│   ├── index.html    # Główna strona HTML
│   ├── styles.css    # Style CSS
│   └── app.js        # Logika JavaScript
└── README.md         # Ten plik
```

## 🎯 Przypadki użycia

Ten projekt jest idealny do:

- **Nauki GraphQL** - pełny przykład API z relacjami
- **Prezentacji** - piękny frontend pokazujący możliwości GraphQL
- **Podstawy projektu** - gotowa struktura do rozbudowy
- **Porównania z REST** - demonstracja przewag GraphQL

## 🛠️ Technologie

- **Apollo Server** - serwer GraphQL
- **Express** - serwer HTTP i static files
- **GraphQL** - język zapytań
- **Vanilla JS** - frontend bez frameworków
- **CSS3** - nowoczesne style

## 📚 Rozszerzenia

Możliwe rozszerzenia projektu:

- Dodanie autentykacji użytkowników
- Paginacja wyników
- Subskrypcje GraphQL (real-time updates)
- Integracja z bazą danych (MongoDB, PostgreSQL)
- Upload zdjęć gier
- System komentarzy pod recenzjami
- Ocenianie recenzji (helpful/not helpful)

## 📄 Licencja

ISC
