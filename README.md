# Portfolio for developers

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.com?utm_source=smakosh)

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- One click deployment to Vercel

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh) and grab your form endpoint url
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Click [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fgatsby-portfolio-dev&c=1&env=GATSBY_PORTFOLIO_GITHUB_TOKEN%2CGATSBY_PORTFOLIO_FORMIK_ENDPOINT%2CGATSBY_PORTFOLIO_RECAPTCHA_KEY&envDescription=Required%20to%20fetch%20your%20repositories%20from%20GitHub&envLink=https://github.com/smakosh/gatsby-portfolio-dev&framework=nextjs) and pass in your:
  
  - Formik form endpoint
  - Google recaptcha public key
  - Github token

To Env variables section.

### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh)
2. Install [Yarn](https://yarnpkg.com/en/)
3. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Grab your Github token from GitHub
5. Run `cp .env.development.template .env.development`
6. Run `yarn && yarn start`

> You could run `vercel env pull` to get your env variables from Vercel.

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- Formik
- Google recaptcha
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Léu Almeida](https://github.com/LeuAlmeida) https://github.com/smakosh/gatsby-portfolio-dev/pull/21
- [Kudakwashe Mupeni](https://github.com/2wce) https://github.com/smakosh/gatsby-portfolio-dev/pull/20
- [sasannnn](https://github.com/sasannnn) https://github.com/smakosh/gatsby-portfolio-dev/pull/22
- [Michael Seifarth](https://github.com/Kageetai) https://github.com/smakosh/gatsby-portfolio-dev/pull/27
- [Hugo](https://github.com/Kronicom) https://github.com/smakosh/gatsby-portfolio-dev/pull/34 https://github.com/smakosh/gatsby-portfolio-dev/pull/35
- [manula thejan](https://github.com/manula2004) https://github.com/smakosh/gatsby-portfolio-dev/pull/38
- [Smakosh](https://smakosh.com)

## Support

If you love this Gatsby template and want to support me, you can do so through my GitHub profile.
