# Pokedex Lite

A small React + Vite "Pokedex Lite" web app.  
Lists Pokémon from the PokéAPI, supports search, type filters, pagination, favorites (persisted in localStorage), and a detailed modal view for each Pokémon.

---

## Live Screenshots

Home page (grid + filters)  
![home-screenshot](./screenshots/home.png)

Pokemon modal (detail view)  
![modal-screenshot](./screenshots/modal.png)

> Replace `./screenshots/home.png` and `./screenshots/modal.png` with your actual screenshots in the `screenshots/` folder.

---

## Features (implemented)
- Fetch Pokémon list from PokéAPI.  
- Responsive grid view of Pokémon with image and name.  
- Search by name (instant client-side filtering).  
- Filter by Pokémon type (select a type to show only matching Pokémon).  
- Pagination (fetches data page-by-page).  
- Favorite Pokémon and persist favorites in `localStorage`.  
- Modal detail view: shows stats and abilities.  
- Nice UI: card hover effects, modal design, dynamic background color based on selected Pokémon.

These requirements follow the assignment guidelines. :contentReference[oaicite:0]{index=0}

---

## Tech stack
- React + Vite  
- Plain CSS (component-scoped `.css` files)  
- Fetch API for requests to PokéAPI  
- localStorage for favorites persistence

---

## Project setup (local)

1. Clone the repo
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
