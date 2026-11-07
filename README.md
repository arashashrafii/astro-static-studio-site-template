# Astro Static Studio site template

A small static Astro site generated from the content saved by Astro Static Studio. This is a customer site repository. It does not contain the Studio dashboard, local API, publishing credentials, sample customer data, or customer photos.

## Requirements

- Node.js 22.23.4 or newer
- npm

## Run and build

```sh
npm ci
npm run dev
npm run validate:content
npm run build
```

Astro writes the static site to `dist/`. Preview the built output with `npm run preview`. This starter does not configure a GitHub Actions workflow or production deployment; site automation can be added when the supported build runner is configured.

## Content and media

The site reads `content/content.json` and validates it with the Content V2 contract at build time. The starter file is intentionally empty and uses the canonical version 2 shape. Astro Static Studio saves the site's pages, collections, and items to that file.

Managed images use portable paths such as `/media/<image-id>.webp`; image files belong in `public/media/`. Keep the JSON paths and media files together when moving or backing up a site repository. Do not put secrets or publishing credentials in this repository.

This template currently renders the supported Atelier preset. It does not promise compatibility with arbitrary Astro themes or user-provided Astro source.

## License

The template's user-authored site code is provided under Apache-2.0; see [LICENSE](LICENSE). Third-party dependency and runtime license information is in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
