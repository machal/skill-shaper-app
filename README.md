# SkillShaper Pro 2026

Interactive visualizer for modern talent archetypes (T, Pi, M, V shapes). Optimized for high-end tech presentations and CEO skill-mapping.

## Live demo

[Your GitHub Pages link here](https://YOUR_USERNAME.github.io/skill-shaper-app)

## Key features

- **Dynamic columns:** Drag-to-resize skill depth with plastic visual effects.
- **Archetype presets:** Instant transformation into T-shape, M-shape, or V-shape profiles.
- **CEO defaults:** Pre-configured with essential startup leadership domains.
- **Persistence:** Save and load custom profiles using LocalStorage.
- **Minimalist UI:** Built with the ps.one brand palette (dark blue and pink).

## Tech stack

- React (Vite)
- Tailwind CSS
- Lucide Icons

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

1. Create a repository on GitHub (e.g. `skill-shaper-app`).
2. Set `package.json` → `"homepage"` to `https://<YOUR_USERNAME>.github.io/<REPO>/`.
3. In `vite.config.ts`, set `GH_PAGES_BASE` to `'/<REPO>/'` (must match the repo name).
4. Push your code, then run:

```bash
npm run deploy
```

The site is published from the `gh-pages` branch via the `dist` folder.

## Usage

1. Use **Change Skills** to edit the horizontal axis labels.
2. Drag the pink columns to set expertise depth.
3. Save snapshots for presentations using the **Profiles** panel.
