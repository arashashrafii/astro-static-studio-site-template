# Third-party notices

This repository contains no customer media or customer content, and no third-party dependency source is vendored. Dependencies are installed from npm when the repository is built.

Direct production dependencies (versions are pinned in `package.json` and `package-lock.json`):

- [Astro 7.4.2](https://www.npmjs.com/package/astro) — MIT
- [Zod 4.6.7](https://www.npmjs.com/package/zod) — MIT

Build and runtime tools:

- Node.js 24.13.0 (verification runtime) — MIT-licensed runtime, installed separately from this repository.
- npm 11.6.2 (verification package manager) — Artistic-2.0 license, distributed with Node.js or installed separately.

Transitive packages and their license metadata are recorded by npm in `package-lock.json`; each dependency retains its own license notice in the installed package. No transitive package is copied into this repository.
