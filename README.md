The Sweet Spot — Static Website
Pure HTML, CSS, and JavaScript. No build step, no backend. Deploys to GitHub Pages in minutes.

Files
index.html — Home
menu.html — Products & pricing
about.html — Our story
payment.html — Banking details
contact.html — Contact form (opens WhatsApp)
styles.css — All design system styles
script.js — Interactions (menu, scroll, WhatsApp, form)
partials.js — Shared nav + footer injection
Customise
WhatsApp number — open script.js and replace WHATSAPP_NUMBER (international format, no +, e.g. 27821234567).
Contact info — edit phone/email/address in partials.js (footer) and contact.html.
Banking details — replace [Placeholder] values in payment.html.
Google Maps — in contact.html, replace the .map-embed div with an iframe from Google Maps → Share → Embed a map.
Images — current images are from Unsplash CDN. Swap any <img src="..."> for your own.
Deploy to GitHub Pages
Create a new repo on GitHub (e.g. sweet-crumb-bakery).
Upload all files from this folder to the repo root (or git push).
Repo → Settings → Pages.
Source: Deploy from a branch, Branch: main / root, Save.
Your site goes live at https://<username>.github.io/<repo-name>/.
Brand
Cream #FFF8F0 · Caramel #8B5E3C · Pink #F7A8B8 · Beige #F5E6D3
Fonts: Playfair Display (headings), Inter (body) — loaded from Google Fonts.
Enjoy 🥐