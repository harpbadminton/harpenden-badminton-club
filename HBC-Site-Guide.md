# Harpenden Badminton Club — Website Guide
**Last updated: May 2026**

---

## 1. What Was Built

A fully custom static website for Harpenden Badminton Club, built from scratch using plain HTML, CSS and JavaScript. No frameworks, no monthly fees, no subscriptions.

### Pages
| Page | URL | Purpose |
|---|---|---|
| Home | `/index.html` | Hero slideshow, season stats, recent results, about snippet |
| The Club | `/about.html` | Club info, committee, membership details |
| Schedule | `/schedule.html` | Season schedule, club nights, summer club |
| Teams & Results | `/results.html` | All 6 teams, full fixture lists, scores |
| Tournaments | `/tournaments.html` | Club tournament results |
| Club History | `/history.html` | Club history with PDF link |
| Notices & Links | `/notices.html` | Club kit, documents, score sheets, useful links |
| Gallery | `/gallery/` | Season photo galleries (2020–21 through 2025–26) |
| Contact | `/contact.html` | Contact form and committee contacts |

---

## 2. How the Site is Hosted

| | Detail |
|---|---|
| **Code repository** | github.com/harpbadminton/harpenden-badminton-club |
| **Live site (Netlify)** | https://harpenden-badminton-club.netlify.app |
| **Admin / CMS** | https://harpenden-badminton-club.netlify.app/admin |
| **GitHub account** | harpbadminton (you have the login) |
| **Cost** | Free — GitHub + Netlify free tiers |

**How publishing works:** Any change pushed to the `main` branch on GitHub automatically deploys to the live Netlify site within ~60 seconds. The CMS does this automatically when you save.

---

## 3. Documents & Files

All downloadable documents live in `/assets/docs/` and are linked from the Notices & Links page.

| File | Description |
|---|---|
| `club-constitution.pdf` | Club Constitution & Committee Role Definitions |
| `gdpr-statement.pdf` | GDPR Statement of Operation |
| `data-protection-policy.pdf` | Data Protection & Information Security Policy |
| `team-selection-policy.pdf` | Team Selection Policy |
| `swhbl-ladies4-score-sheet.pdf` | SWHBL Score Sheet — Ladies 4 |
| `swhbl-mens4-score-sheet.pdf` | SWHBL Score Sheet — Mens 4 |
| `swhbl-mens6-score-sheet.pdf` | SWHBL Score Sheet — Mens 6 |
| `swhbl-mixed6-score-sheet.pdf` | SWHBL Score Sheet — Mixed 6 |
| `herts-mens6-county-score-sheet.pdf` | Herts County Score Sheet — Mens 6 & Mixed |
| `swhbl-club-directory-2023-24.xlsx` | SWHBL Club Directory 2023–24 |

To add a new document: copy the file into `/assets/docs/`, add a card in `notices.html`, commit and push.

---

## 4. The CMS — How to Update the Site

### Logging In
Go to: **https://harpenden-badminton-club.netlify.app/admin**
Log in with the `harpbadminton` GitHub account.

### What You Can Edit in the CMS
| Section | What to update |
|---|---|
| **Season Settings** | Season label, status (Active/Complete), W/L/D totals, champion text, hero badge |
| **Teams** | Division name, captain, champions toggle, all fixtures and results |
| **Recent Results** | The 3–6 results shown on the homepage |

### How to Update a Score (step by step)
1. Log into the admin panel
2. Click **Teams** → select the team (e.g. Men's 1)
3. Scroll to **Fixtures** → find the match
4. Change the Result field: `Won 7–2` / `Lost 3–6` / `Drew 4–4`
5. Click **Save** — live within 60 seconds

### Result Format
- `Won 7–2` — use an en dash (–) not a hyphen (-)
- `Lost 3–6`
- `Drew 4–4`
- `TBP` — To Be Played (for upcoming fixtures)

---

## 5. Security & Search

- **robots.txt** is in place — gallery images are blocked from Google/Bing indexing
- The admin panel is protected by GitHub OAuth — only the `harpbadminton` GitHub account can log in
- All documents are publicly downloadable (appropriate for a club site)
- GDPR and Data Protection policies are published on the site

---

## 6. What Still Needs Doing (Future Work)

These are deferred items that require more development time. Recommended for September 2026 when the new season starts.

### Priority 1 — Wire HTML pages to the CMS data (most important)
Currently the CMS saves data to JSON files in `/_data/` but `results.html`, `index.html` and `schedule.html` still show hardcoded content. The next step is to rewrite these pages to read from the JSON files so that a CMS save automatically updates the visible pages.

**Effort:** ~4–6 hours of Kiro work. Do this at the start of the 2026–27 season.

### Priority 2 — New season setup (September 2026)
Each new season requires:
- Clear all fixture results (set to `TBP`)
- Update division names if teams are promoted/relegated
- Update captains if changed
- Update season label to `2026–27`
- Add new gallery page `/gallery/2026-27.html`
- Update schedule page status to "Active"

### Priority 3 — Gallery update
Add new season photos to `/assets/images/gallery/2026-27/` and create a new gallery page. Follow the same structure as existing gallery pages.

### Priority 4 — Custom domain (optional)
If the club wants `www.harpendenbadmintonclub.com` pointing to the site, this can be configured in Netlify's domain settings at no extra cost (domain registration fee applies separately).

---

## 7. Key Contacts & Credentials

| Item | Detail |
|---|---|
| GitHub account | harpbadminton |
| Netlify account | Connected to harpbadminton GitHub |
| GitHub OAuth App | HBC Admin (in GitHub Developer Settings) |
| Secretary email | secretary@harpendenbadmintonclub.com |
| Webmaster | dave@compleit.co.uk |

> **Keep the GitHub password and Netlify OAuth Client Secret secure. Do not share them.**

---

*Built with Kiro AI — May 2026*
