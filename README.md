# resume

My resume, as a React page that builds into a single self-contained HTML file
and a PDF. Published to GitHub Pages at
<https://stonelinks.github.io/resume/>.

## Setup

Everything lives under `~/.resume/opt` rather than in global tool directories,
so this does not disturb the rest of the machine.

```bash
direnv allow     # or: source env.sh
setup-local      # installs go + shfmt, bun, node_modules and chrome
```

`env.sh` puts `bin/` and `node_modules/.bin` on `PATH`, so the commands below
are available by name once it is sourced.

## Develop

```bash
bun run dev
```

Serves on <http://localhost:3000> with hot reload. Append `?pdf` to preview the
print layout: <http://localhost:3000?pdf>.

## Build

```bash
build
```

Writes three artifacts to `dist/`:

| file                     | what it is                                       |
| ------------------------ | ------------------------------------------------ |
| `index.html`             | the web page, fully self-contained (no requests) |
| `pdf.html`               | the same page in print layout, self-contained    |
| `lucas_doyle_resume.pdf` | `pdf.html` rendered to A4 by headless chrome     |

`build` serves the app on port 3001, captures it with `single-file` (with every
optimisation disabled, since they strip fonts and scripts the page needs), then
runs `pdf.ts` over the captured print page. It fails if any artifact comes out
missing or empty.

## Deploy

```bash
deploy
```

Runs `build`, then pushes `dist/` to the `gh-pages` branch. There is no CI; this
is the only way the site is published.

## Editing

- **Content** — `RESUME_DATA` in `resume-data.ts`. Bullet lists are markdown.
- **Layout** — the components in `resume.tsx`.
- **Styling** — Tailwind classes, with the theme and the print rules in
  `style.css`.

The page reads `?pdf` from the query string to pick between the web and print
layouts. `pdf.ts` appends it when loading the captured file over `file://`,
where there would otherwise be no query string.
