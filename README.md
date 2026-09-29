# NEXORA — Event Discovery Platform

This version is designed as a college-project-ready full-stack starter.

## Run it
1. Install Node.js LTS.
2. Open a terminal in `Nexora/backend`.
3. Run `npm.cmd install` if PowerShell blocks `npm`.
4. Run `npm.cmd start`.
5. Open http://localhost:3000 in Chrome.

## Included
- Premium responsive UI/UX
- 15 categories
- 18 demo Pune events
- Locality search: Pune, Kothrud, Viman Nagar, Koregaon Park, Kalyani Nagar, Baner, Aundh, Hinjawadi, Wakad, Hadapsar, Shivajinagar, Deccan, Camp, Kharadi and Balewadi
- Search across title, category, venue and location
- Clickable event cards
- Full event details: venue, address, map link, date, time, age, fee and booking action
- Password show/hide buttons
- Saved events with localStorage
- Login/register APIs with bcrypt
- Booking API
- MySQL schema for the database activity

## Important
The visible event listings are demonstration data for the project. Ticket buttons are demo reservation actions unless you connect an actual ticketing provider.

## MySQL
The app runs immediately with JSON demo data. To move to MySQL, import `database/schema.sql` and replace the JSON data layer in `backend/server.js` with MySQL queries.
