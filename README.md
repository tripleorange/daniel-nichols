# Daniel Nichols — author website

A single static page served by GitHub Pages.

- `index.html` holds all of the page's text, styles and script.
- The images sit next to it in the same folder.

To change a line of copy, edit `index.html` and commit; GitHub Pages republishes the site within a minute or two.

## Reader edition (unlisted)

`read/a-use-for-good-men/` holds a read-in-the-browser edition of *A Use for Good Men* for beta readers: one page per chapter, built from the manuscript's chapter files by `build_reader.py` in the project's shared folder (`website/reader/`). It is not linked from the site, every page carries a noindex tag and `robots.txt` keeps crawlers out of `/read/`. Rebuild and commit the folder when the text changes; the edition line is set at build time.
