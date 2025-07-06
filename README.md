# Portfolio Studio

A simple Sanity CMS studio for managing your portfolio content.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3333](http://localhost:3333) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Sanity

## Content Types

Currently includes:
- **Background Poster** - For managing background images/content

Add more schemas as needed in `src/schemas/`

## Project Structure

```
Portfolio Studio/
├── src/schemas/     # Content type definitions
├── static/          # Static assets
└── sanity.config.ts # Studio configuration
```

That's it! Keep it simple and add what you need when you need it.
