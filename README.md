# Daniel Nichols — author website

A single static page served by GitHub Pages.

- `index.html` holds all of the page's text, styles and script.
- The images sit next to it in the same folder.

To change a line of copy, edit `index.html` and commit; GitHub Pages republishes the site within a minute or two.

## Project hub refresh (November 2026)

- `index.html`: portfolio and filterable Start Here project directory.
- `refresh.css`: responsive additions to the original visual design.
- `camp-potuk.html`: forthcoming book detail page, no release date or preorder implied.
- `camp-potuk-cover.jpg`: web-sized export of the approved November 17 original-lettering front cover.
- `robots.txt` and `sitemap.xml`: public search discovery.

Fit Confetti is deliberately labeled in development. Its current Sites version is owner-private; do not replace its contact action with a public launch claim without verifying public availability. No private prototype URL or credentials are included.

### Local preview

Run `python3 -m http.server 8798 --bind 127.0.0.1` in this directory, then open `http://127.0.0.1:8798`.

### Browser checks

`qa/check.cjs` uses Playwright and tests home/book layouts at 1440, 768, 390 and 320 pixels, filters, menu dismissal, dialog repeat/dismissal, navigation, image loading, and no-JavaScript fallback. Screenshots/results are ignored by Git.

With Playwright available, run `node qa/check.cjs`. Set `PLAYWRIGHT_MODULE` to an installed module path if needed, and `CHROME_PATH` to a Chrome executable if the default bundled Chromium is not installed. Start the local preview first. These checks do not exercise third-party account sign-in, payment, or private app flows.

### Publishing

GitHub Pages serves `main` at `danielnichols.net`. Do not merge/push preview work to `main` until the tested changes are approved for publication. Preserve `CNAME` and domain/email configuration. Verify deployment and both public page URLs after publishing.

### Public fitness calendar preview

`calendar-embed.js` loads the public `https://withmight.com/events` page only after a visitor selects Explore the calendar, and removes it on Close. It does not copy catalog data, pass account credentials, or read personal WithMight records. The source retains its live-data and availability warnings. An always-visible full-calendar link covers blocked frames and JavaScript-disabled browsers. Account saving and registration are handled by the source services, not this author site.

QA (November 18, 2026): internal supported preview, desktop 1331px and 390px frame (375px usable viewport): calendar loads, search yields expected results, zero-match search, close/reopen, and no outer overflow. Observed pre-existing WithMight issue: Clear filters resets fields but results do not refresh until another input/change event. This is in WithMight's `events.mjs` reset handler, not the embedding code. No private record, account login, registration, or payment flow was exercised.

## Beta reader (password-protected)

`read/a-use-for-good-men/index.html` and `read/the-secret-of-camp-potuk/index.html` are the beta readers' editions of the two books for invited readers. Each page holds only a lock screen and the encrypted book (AES-256-GCM, opened in the browser with the readers' password); the text itself is never committed to this repository. It is not linked from the site, carries `noindex`, and `robots.txt` excludes `/read/`. The page is generated outside this repository from the manuscript; do not edit it by hand, and never commit the password or a readable copy of the book.
