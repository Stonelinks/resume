# CLAUDE.md

## Environment

`source env.sh` before anything else. It pins the bun and Go versions, keeps all
tooling under `~/.resume/opt`, and puts `bin/` and `node_modules/.bin` on
`PATH` — so `build`, `deploy`, `format` and the rest are called by bare name.

Every script in `bin/` sources `env.sh` itself, so they also work when invoked
directly from any directory.

## Commands

- `bun run dev` — dev server on :3000
- `format` — shfmt over shell scripts, then prettier and `tsc --noEmit`
- `build` — writes `dist/{index.html,pdf.html,lucas_doyle_resume.pdf}`
- `deploy` — `build`, then push `dist/` to the `gh-pages` branch

There are no tests. `build` is the check that matters: it must exit 0 and leave
all three artifacts non-empty. Run it before deploying.

## How the build works

One React app produces both outputs. `?pdf` in the query string switches it to
the print layout — no background, no card chrome, contact details as plain text
rather than buttons.

1. `bin/build` serves the app on :3001.
2. `single-file` captures it twice, once plain and once with `?pdf`, inlining
   every asset. All of its optimisation flags are off on purpose; they strip
   fonts, scripts and responsive-hidden elements the page depends on.
3. `pdf.ts` loads the captured print page and renders it to A4.

The captured HTML still contains the live React bundle, so the app re-runs when
`pdf.ts` opens the file. That is why `pdf.ts` appends `?pdf` to the `file://`
URL: without it the page re-renders in web layout, silently undoing the print
capture.

## Editing

- Content: `RESUME_DATA` in `resume-data.ts`. Responsibilities are markdown.
- Styling: Tailwind utilities; theme tokens and the `@media print` rules live in
  `style.css`.
- Print layout is easy to break. After changing anything that affects it, render
  the result and look at it:
  `pdftoppm -png -r 60 dist/lucas_doyle_resume.pdf /tmp/page`
