# CHOP LIFE × LEARN SENSE — 3-DAY CARNIVAL TRILOGY

## Design direction
This revision deliberately returns to the **original/first website design**: black background, bold yellow/red accents, large condensed typography, simple hero layout and clean information sections.

## Interaction changes
- Vendor prices and package details are **NOT displayed on the main page**.
- Clicking **VIEW VENDOR SPACE** opens a modal where visitors choose a vendor package; only then are package details and price revealed.
- Sponsorship prices and package details are **NOT displayed on the main page**.
- Clicking **VIEW SPONSORSHIP** opens a modal where visitors choose a sponsorship category; only then are details and price revealed.
- After selecting a sponsorship package, visitors can submit their details, talk to the organiser directly on WhatsApp, or use the sponsorship payment button.
- The payment URL is controlled from `config.js`.
- Volunteer, vendor, partnership and sponsorship forms use Netlify Forms so submissions can be viewed in the Netlify dashboard after deployment.
- The broadcast/media broadcast section has been removed.

## Deployment
Upload this folder to Netlify. The `data-netlify="true"` forms will be detected by Netlify during deployment.
