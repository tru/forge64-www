# forge64.se

Source for the Forge64 Consulting AB website, built with [Astro](https://astro.build) + Tailwind CSS.
Deployed to GitHub Pages via `.github/workflows/pages.yml` on every push to `main`.

## Structure

- `src/pages/` — one file per route (`/`, `/about/`, `/work/`, `/games/`, `/videos/`, `/contact/`)
- `src/layouts/Layout.astro` — shared header/nav/footer
- `src/data/` — content as plain TypeScript, edit these instead of the page markup:
  - `work.ts` — case studies
  - `games.ts` — shipped games; add box art to `public/games/` and fill in `description`
  - `videos.ts` — talks/videos; set `youtubeChannelUrl` once you have the channel link confirmed
- `public/` — static files copied as-is (favicon, `CNAME`, `games/` box art)

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Content TODOs

- [ ] Add box art images to `public/games/` (`ac-shadows.jpg`, `ac4-resynced.jpg`) and write the `description` for each entry in `src/data/games.ts`
- [ ] Confirm the YouTube channel URL and set `youtubeChannelUrl` in `src/data/videos.ts`
