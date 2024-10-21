# Pokémon Guessing Game: Who's That Pokémon?

**Made for BrainStation Web API Hackathon**

This project is a web-based Pokémon guessing game inspired by the classic "Who's That Pokémon?" challenge. It pulls data from the [PokéAPI](https://pokeapi.co/) and provides users with a silhouette of a random Pokémon, challenging them to guess the name. Users can reveal the Pokémon or load a new challenge.

[Play Here](https://betelhemalemayehu.github.io/webApiHackathon/)

---

## Developers & GitHub Links

- **Courtney Scrimshaw**: User Interface and Front-End Development (HTML, CSS)
  [GitHub](https://github.com/cscrim)

- **Betelhem Alemayehu**: API Integration (JavaScript)
  [GitHub](https://github.com/betelhemalemayehu)

---

## Project Overview

This project was created during the BrainStation Web API Hackathon. Our goal was to create an interactive, responsive, and user-friendly Pokémon guessing game using modern web technologies. We focused on seamless API integration, clean UI design, and enhancing the user experience through animations and interactivity.

---

## Features

- **Pokémon API Integration**: Fetch random Pokémon data from the [PokéAPI](https://pokeapi.co/).
- **Guessing Mechanism**: Display the silhouette of a Pokémon and allow users to guess its name.
- **Reveal Functionality**: A "Show Me!" button that reveals the Pokémon's image and name.
- **Next Pokémon**: A "Next" button to load a new Pokémon for guessing.
- **Responsive Design**: Optimized for various screen sizes using responsive CSS techniques and media queries.

---

## Technologies Used

- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and ensuring responsive design using Flexbox and media queries.
- **Sass**: For efficient and organized CSS management.
- **JavaScript (ES6)**: For handling DOM manipulation, API requests, and game logic.
- **PokéAPI**: To retrieve Pokémon data asynchronously.

---

## Requirements

- Use HTML5, CSS3, and Flexbox for building the UI.
- Follow the BEM (Block, Element, Modifier) naming convention for CSS class names.
- Use DOM APIs to manipulate the webpage (e.g., displaying or hiding elements).
- Implement JavaScript for API calls and logic (e.g., fetching and displaying Pokémon).
- Use responsive design principles to ensure the game works across different screen sizes.
- (Optional) Add CSS animations, external fonts, and media queries for enhanced UX.

---

## API Used

- **PokéAPI**: [https://pokeapi.co/](https://pokeapi.co/)
  - Fetch random Pokémon data using their `official-artwork` image and display their silhouette.
  - Example API call: `https://pokeapi.co/api/v2/pokemon/{id}`

---

## How It Works

1. **Fetch Pokémon**: A random Pokémon is fetched using the PokéAPI.
2. **Silhouette Display**: The fetched Pokémon's image is displayed with a filter (black silhouette).
3. **Reveal Pokémon**: When the user clicks "Show Me!", the silhouette is removed, revealing the Pokémon and its name.
4. **Load New Pokémon**: Users can click "Next" to fetch and display a new random Pokémon.

---

## Miro Tool Usage

The team utilized **Miro** for collaborative ideation and brainstorming during the hackathon. It allowed us to:

- Plan and organize tasks
- Vote on ideas using **Dot Voting**
- Prototype designs and sketch concepts before coding
  [Miro](https://miro.com/app/board/uXjVLRbozKI=/?share_link_id=58198819104)

---

## Lessons Learned

- **API Integration**: Using asynchronous programming to handle API requests efficiently.
- **Responsive Design**: Ensuring the game works across different screen sizes using Flexbox and media queries.
- **Collaboration**: Effective communication using Miro, Slack, and GitHub to manage tasks and synchronize development.

---

## Future Iterations

- **Score Tracking**: Add a points system to track the user's correct guesses.
- **Hint System**: Implement a system to provide hints using Pokémon abilities (e.g., `pokemon.abilities`).
- **Multiplayer Mode**: Add support for multiple users to guess the Pokémon and compete.
- **Animations**: Further enhance the UI with CSS animations, such as transitions and hover effects.
