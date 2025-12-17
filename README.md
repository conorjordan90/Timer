# Timer App

A simple web-based timer for tracking work sessions. Automatically logs time entries to a Microsoft Teams Excel spreadsheet.

## What It Does

- Start/stop timer to track work time
- Fill in job details when you stop
- Automatically calculates duration and cost
- Sends data directly to your Teams Excel file

## How to Use

### On Your Phone

1. Open Safari or Chrome
2. Go to: `conorjordan90.github.io/Timer`
3. Tap Share → "Add to Home Screen"
4. Name it "Timer" and tap Add
5. Use the icon like a regular app

### On Computer

1. Open any browser
2. Go to: `conorjordan90.github.io/Timer`
3. Bookmark it for quick access

### Using the Timer

1. **Start** - Begin tracking time
2. **Stop** - Opens a form to enter job details
3. **Reset** - Clear the timer (asks for confirmation)

When you press Stop, fill in:
- Staff Name (dropdown)
- Job name
- Job Number
- Location
- Date (auto-filled with today)
- Description (optional)

Click "Save & Export" and it goes straight to Excel.

## Behind the Scenes

The timer sends data to Microsoft Power Automate, which adds a row to your Excel file in Teams. No downloads, no manual entry.

## Updating the Excel Connection

If you need to change where data goes:

1. Open `/tmp/timer-project/index.html`
2. Find this line near the top of the `<script>` section:
   ```javascript
   const WEBHOOK_URL = 'https://...';
   ```
3. Replace the URL with your new Power Automate webhook
4. Save and run:
   ```bash
   cd /tmp/timer-project
   git add index.html
   git commit -m "Update webhook URL"
   git push
   ```
5. Wait 1-2 minutes for GitHub Pages to update

## Troubleshooting

**Timer doesn't update Excel:**
- Check Power Automate flow is turned ON
- Verify the webhook URL is correct
- Check Flow run history for errors

**Timer resets when phone locks:**
- This is rare, but can happen if battery saver kills the browser
- For long sessions, keep the app open or check periodically

**Changes not showing on phone:**
- Hard refresh: pull down to reload
- Or clear browser cache and reload

## Files

- `index.html` - The entire timer app (HTML, CSS, JavaScript)
- `README.md` - This file

---

Live at: `conorjordan90.github.io/Timer`
