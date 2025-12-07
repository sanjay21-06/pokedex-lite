# Pokedex Lite

A small React + Vite "Pokedex Lite" web app.  
Lists Pokemon from the PokeAPI, supports search, type filters, pagination, favorites (persisted in localStorage), and a detailed modal view for each Pokemon.

---

## Live Screenshots

Home page (grid + filters)  
![home-screenshot](./screenshots/home.png)

Pokemon modal (detail view)  
![modal-screenshot](./screenshots/modal.png)

> Replace `./screenshots/home.png` and `./screenshots/modal.png` with your actual screenshots in the `screenshots/` folder.

---

## Features (implemented)
- Fetch Pokemon list from PokeAPI.  
- Responsive grid view of Pokemon with image and name.  
- Search by name (instant client-side filtering).  
- Filter by Pokemon type (select a type to show only matching Pokémon).  
- Pagination (fetches data page-by-page).  
- Favorite Pokemon and persist favorites in `localStorage`.  
- Modal detail view: shows stats and abilities.  
- Nice UI: card hover effects, modal design, dynamic background color based on selected Pokemon.

These requirements follow the assignment guidelines. :contentReference[oaicite:0]{index=0}

---

## Tech stack
- React + Vite  
- Plain CSS (component-scoped `.css` files)  
- Fetch API for requests to PokeAPI  
- localStorage for favorites persistence

---

## Project setup (local)

1. Clone the repo
```bash
git clone https://github.com/sanjay21-06/pokedex-lite.git
cd pokedex-lite
