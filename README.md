# Pokedex Lite

A small React + Vite "Pokedex Lite" web app.  
Lists Pokemon from the PokeAPI, supports search, type filters, pagination, favorites (persisted in localStorage), and a detailed modal view for each Pokemon.

---

## Live Screenshots

Home page (grid + filters) 
<img width="1440" height="900" alt="HomePage" src="https://github.com/user-attachments/assets/de3c9d11-15f2-4d27-b6a4-ee561ee4a303" />


Pokemon modal (detail view) 
<img width="1440" height="900" alt="PokemonDetails" src="https://github.com/user-attachments/assets/f2b4007f-c846-4433-8c08-e6c964a716fb" />


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
