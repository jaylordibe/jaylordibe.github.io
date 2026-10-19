# Jay Lord Ibe · Portfolio

The personal site of Jay Lord Ibe, Lead Software Engineer. Live at <https://jaylordibe.github.io>.

The page is built as a station departures board. The hero is a working split-flap board that flips into place. Each featured project is a "departure", with its architecture drawn as a transit route. The skill set is a network of five lines: Languages, Backend, Frontend, Data, and Cloud & DevOps.

## Stack

Plain HTML, CSS and JavaScript. There is no build step and there are no runtime dependencies.

- `index.html`: content and structure
- `styles.css`: design tokens (`:root`), layout and motion
- `script.js`: split-flap engine, scroll reveals, section signage, local clock, copy-email button
- `fonts/`: self-hosted Big Shoulders Display, Barlow and Barlow Condensed (SIL Open Font License)

Motion respects `prefers-reduced-motion`: boards render settled, and routes and lines render already drawn. Without JavaScript, every board falls back to plain text.

## Run locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

GitHub Pages serves the `master` branch, so pushing to it publishes the site.

## Editing content

- **Board text:** set the `data-flap` attributes in the hero. Characters must be in the `CHARS` set in `script.js`. Each row pads to its `data-length`.
- **Projects:** each `<article class="dep">` has a code, description, stack and sector, plus an `<ol class="route">` with up to six stops.
- **Skills:** each `.line` in the network section is a list of stops.
