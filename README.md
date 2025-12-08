# Pokedex Lite

A small React + Vite "Pokedex Lite" web app.  
Lists Pokemon from the PokeAPI, supports search, type filters, pagination, favorites (persisted in localStorage), and a detailed modal view for each Pokemon.

---

## Live Demo
https://pokedex-lite-chi.vercel.app/


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

## Why These Technologies Were Used

React + Vite
React helps build UI components efficiently, and Vite provides extremely fast development and optimized builds. Perfect for a lightweight web app like Pokedex Lite.

Fetch API
Used to fetch Pokémon data directly from the PokeAPI without installing extra libraries.

Plain CSS
Component-scoped .css files give full styling control, allowing custom card hover effects, gradients, dynamic modal UI, and animations.

localStorage
Used to persist "Favorite Pokémon" even after page reload. This avoids using a backend and keeps the app very lightweight.

---

## Challenges Faced & How They Were Solved

1. Dynamic UI Based on Pokémon Type

I wanted the background color, modal header color, and card accents to match each Pokémon’s type. <br>
Solution: Created a type-to-color mapping inside the components and applied inline dynamic styles.

2. Handling Asynchronous PokeAPI Calls

Some Pokémon need a second API call (for stats, abilities, images). <br>
Solution: Used Promise.all() to fetch all Pokémon details in parallel → faster and smoother UI.

3. Modal Overlapping Design & Backdrop Blur Issue

Safari does not fully support backdrop-filter. <br>
Solution: Added vendor prefixes + fallback transparency for cross-browser consistency.

4. Favorites Not Updating on UI Initially

Favorites were stored but UI did not re-render correctly. <br>
Solution: Added a state update + localStorage sync using useEffect().

5. Pagination + Filters Working Together

Changing pages while filters applied sometimes caused empty results. <br>
Solution: Reset page to 1 whenever filter or search input changes.
