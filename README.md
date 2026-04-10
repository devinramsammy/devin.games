# devin.games

Completely vibecoded with Claude.

A Wii Menu clone built as a portfolio site, recreating the iconic Nintendo Wii dashboard experience in the browser.

## Tech Stack

- **Next.js 16** with React 19 and TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **shadcn/ui** component primitives

## Project Structure

```
app/
  page.tsx                  # Main dashboard — channel grid, pagination, SVG animations
  layout.tsx                # Root layout with fonts
  globals.css               # Global styles, custom fonts, Wii background texture, custom cursor

  components/
    Channel.tsx             # Individual channel tile with gradient background
    ChannelView.tsx         # Full-screen channel detail overlay
    ChannelActionBar.tsx    # Action bar shown inside channel views
    HomeActionBar.tsx       # Action bar for the home screen
    BottomActionBar.tsx     # Bottom bar switcher (home vs channel mode)
    ActionButton.tsx        # Reusable action bar button
    CircularButton.tsx      # Round icon button used in action bars
    NavigationArrow.tsx     # Left/right page navigation arrows
    CurrentTime.tsx         # 7-segment style clock display
    CurrentDate.tsx         # Formatted date display

public/
    fonts/                  # QuartzMS (clock) and Adventure (UI text) fonts
    cursors/                # Custom Wii hand cursor (multiple sizes)
```

## Running Locally

```bash
npm install
npm run dev
```
