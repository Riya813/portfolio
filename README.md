# Riya Singh — Portfolio

SEO, content and digital marketing portfolio.

Live site: `https://<your-github-username>.github.io/portfolio/`

## Files
- `index.html` — the page
- `style.css` — styles (light and dark mode)
- `script.js` — expandable projects, copy-email button, section highlighting
- `img/` — case study screenshots
- `reports/` — full report PDFs
- `.nojekyll` — tells GitHub Pages to serve the files as they are

## Deploy to GitHub Pages
1. Copy everything in this folder (including the hidden `.nojekyll` file) into your local `portfolio` repository.
2. Push it:
   ```
   git add .
   git commit -m "Add portfolio site"
   git push origin main
   ```
3. On GitHub, open the repository → **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose **main** and **/ (root)**, then **Save**.
5. After a minute or two the site is live at `https://<your-github-username>.github.io/portfolio/`.

## Updating
Edit the files, then `git add . && git commit -m "Update" && git push`. GitHub Pages redeploys automatically.
