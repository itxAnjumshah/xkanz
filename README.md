# Xkanz — UAE Buy & Sell (Prototype)

A clean, professional landing page for Xkanz — a marketplace to buy and sell pre‑loved items across the UAE — with a white, green, and golden theme.

## Quick Start

Open `index.html` directly in your browser, or use a simple static server:

```powershell
# Option 1: open the file
Start-Process "d:\Html projects\xkanz\index.html"

# Option 2: serve the folder (requires Python)
python -m http.server 8080 -d "d:\Html projects\xkanz"; Start-Process http://localhost:8080/index.html
```

## Structure

- `index.html`: Homepage with hero, search, categories, listings, CTA, trust section, and footer.
- `style.css`: White/green/gold theme, responsive layout, modern components.
- `script.js`: Mobile menu toggle, search filtering, category quick filters, sample data rendering.

## Customize

- Colors: adjust CSS variables in `style.css` (`--green-*`, `--gold-*`).
- Listings: replace the sample array in `script.js` with data from your backend.
- Sections: add pages for posting ads, authentication, and messaging as you grow.

## Notes

- Content and design are original; no third‑party assets are copied.
- This prototype focuses on UX and visual design to kickstart development.
