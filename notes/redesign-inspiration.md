# christofphr.com Redesign: Inspiration from Five Photographers

Nov 25, 2026

What I took from the live sites of five photographers, and what to bring into christofphr.com. Both Ethan Jones and David Perez are common names. This doc uses the LA photographer at ethanjones.co and the San Diego film photographer whose Instagram is shotby.dp.

## How each one presents his work

**Joe Greer** ([ioe.photography](https://www.ioe.photography))

- The homepage is a shop page for his India book, not a gallery.
- The menu groups work under a Commercial dropdown with one page per client (Land Rover, Fender, Adidas) and a Personal Work dropdown (Cuba, India, B&W Street, Family).
- Each project page shows one large photo at a time with arrows to click through. That makes you look at every frame, unlike a contact sheet.

**Austin John** ([austiinjohn.com](https://www.austiinjohn.com))

- Warm off-white background, a small serif name, and a tiny sans-serif menu down the left (Overview, Portfolio, Projects, Motion, Shop, Info).
- The work runs as a full-height strip of photos that scrolls sideways. This is the most "photo book" feeling of the five.

**Ethan Jones** ([ethanjones.co](https://www.ethanjones.co))

- His name is centered in a serif font with the menu on the left.
- The homepage is a sideways carousel with arrows.
- The Client Work page is a grid of square cover photos, each labeled with a project name (Aman Residence, One & Only Palmilla, Four Seasons Maui) that opens its own page.
- He also has Shop and Articles pages.

**David Perez** (Instagram: shotby.dp)

- One column of full-width photos, about 11,700px of scrolling.
- The menu uses a typewriter-style font and splits work by category (Lifestyle, Hospitality, Motion).
- Near the top, a large video plays automatically.
- The About page says outright that everything was shot on medium format and 35mm film.

**RJ Bruni** ([rjbruni.com](https://rjbruni.com))

- This layout is very close to yours: italic serif name, left sidebar, white background, even the same "Copyright … All Rights Reserved" line.
- The difference is that his homepage is an index of projects. Each tile is a cover image with the project title and client underneath.
- Each tile opens a project page with a short credit line at the end ("Middle of Mitford / Elwood, Directed by RJ Bruni").

## What to bring into christofphr.com

1. **Make the homepage an index of projects.** Right now `index.html` is 50 loose photos with no titles. You already have strong series: Summer Out East, Club 55, Winter, Studio 54, Out East, Noah Rinker, Hudson Ingram. Studio 54, Out East, Noah Rinker and Hudson Ingram have pages but aren't in the menu. RJ Bruni and Ethan Jones both lead with a grid of cover photos plus a title (and place or year). This is the biggest single change.
2. **Stop cropping the Work grid.** It uses `object-fit: cover`, so every photo gets cut to fit its cell. The Summer Out East page already has a justified-row layout that keeps each photo's real shape. Use that everywhere, or try Austin John's full-height sideways strip on one series.
3. **Add a type with some character.** Everything is in the default system font. Each of the five pairs a distinctive name with a small, quiet menu: serif (Austin John, Ethan Jones, RJ Bruni), all-caps bold (Joe Greer) or typewriter (David Perez). A serif for "christofphr" with the current small uppercase menu would fit the "grit and restraint" line in your bio.
4. **Warm up the background.** Austin John's off-white makes warm, film-toned photos look richer than pure white does. Try something like `#f7f5f0` instead of `#ffffff`.
5. **Give each series a short intro and a credit line.** One or two lines of place, year and camera/film, like RJ Bruni's credits or David Perez's film note. It also gives you a spot for the dreamlike Hamptons prose.
6. **Add a click-to-enlarge view.** Joe Greer's one-photo-at-a-time viewing is easy to build: click a grid photo to see it full screen, use the arrow keys to move through the series, Esc to close. Keep the grid as the overview.
7. **Later: a Shop or Prints page.** Three of the five sell from their site (books, presets, prints). The stylesheet already has unused `.prints-*` styles, and the Assouline-style book could go there eventually.

## Suggested order

Start with the project-index homepage (1) and the uncropped grid (2), then the type and background changes (3 and 4). Those two are small CSS edits.
