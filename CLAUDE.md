# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Personal Website built with Next.js 15.5.2, using the App Router architecture. The project uses TypeScript, Tailwind CSS v4, and ESLint for development.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
No testing framework is currently configured.

## Architecture

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global CSS with Tailwind imports
- `public/` - Static assets (SVG icons included)

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (enabled by default)
- **Import Alias**: `@/*` maps to `./src/*`

### Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path mapping
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind