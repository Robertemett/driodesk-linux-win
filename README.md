# Portfolio

Static Astro foundation for the portfolio MVP. Unit 1 intentionally contains only a semantic Spanish placeholder page and the quality harness required by the construction roadmap.

## Runtime

- Node.js 22.19.0 or newer
- npm 9.6.5 or newer

## Commands

| Category                         | Command                  |
| -------------------------------- | ------------------------ |
| Install dependencies             | `npm install`            |
| Local development                | `npm run dev`            |
| Astro and TypeScript diagnostics | `npm run check`          |
| Write formatting                 | `npm run format`         |
| Check formatting                 | `npm run format:check`   |
| Lint source                      | `npm run lint`           |
| Complete unit suite              | `npm run test`           |
| Focused unit-test foundation     | `npm run test:unit`      |
| Browser smoke                    | `npm run test:e2e`       |
| Static production build          | `npm run build`          |
| Inspect static output            | `npm run inspect:static` |
| Preview production output        | `npm run preview`        |

Playwright's Chromium binary must be available before the browser smoke runs. Install it with `npx playwright install chromium`.

## Static output

`npm run build` writes the site to `dist/`. The inspection command verifies that the output contains `index.html` and a generated CSS asset, and that no server entry exists.
