# Personal Site

A Hugo-based personal site with a blog and resume. Custom theme, no external dependencies.

## Local Development

```bash
# 1. Install Hugo (macOS)
brew install hugo

# 2. Run the dev server
hugo server -D

# 3. Open http://localhost:1313
```

## Customizing

Edit `hugo.toml` to update your name, tagline, GitHub/LinkedIn links, and site URL.

Edit `content/about.md` to fill in your real resume content.

Create new posts:

```bash
hugo new posts/my-new-post.md
```

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `yourusername.github.io` for a user site, or any name for a project site)
2. Push this repo to `main`
3. In the repo settings → Pages → Source: select **GitHub Actions**
4. Update `baseURL` in `hugo.toml` to your site URL
5. Push — the workflow in `.github/workflows/deploy.yml` handles the rest

Your site will be live at `https://yourusername.github.io` (user site) or `https://yourusername.github.io/repo-name/` (project site).

## Structure

```
content/
  about.md          ← Resume / About page
  posts/            ← Blog posts (Markdown)
layouts/            ← HTML templates
static/
  css/style.css     ← All styles
  js/theme.js       ← Dark/light mode toggle
hugo.toml           ← Site config
.github/workflows/  ← GitHub Actions CI/CD
```
