# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern SaaS application built with Phoenix + Inertia.js + React stack. The project implements a full-stack web application with server-side Elixir and client-side React components connected via Inertia.js for SPA-like experience without traditional API endpoints.

## Architecture

- **Backend**: Phoenix Framework (Elixir) with Ecto and SQLite database
- **Frontend**: React 19 with Inertia.js for seamless server-client integration
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling, Mix for Elixir compilation
- **Design**: Modern SaaS theme with clean interface, light theme, generous whitespace

### Key Structure
- `lib/inertia_app_web/`: Phoenix web layer (controllers, router, layouts)
- `assets/js/Pages/`: React page components (auto-resolved by Inertia)
- `assets/js/components/ui/`: shadcn/ui components (Button, Input)
- `assets/js/lib/utils.js`: Utility functions including `cn` for class merging

## Development Commands

### Initial Setup
```bash
mix setup  # Complete setup: deps, database, assets
```

### Development Server
```bash
mix phx.server         # Start Phoenix at localhost:4000
iex -S mix phx.server  # Start with interactive Elixir shell
```

### Frontend Development
```bash
cd assets
npm run dev      # Vite development server
npm run build    # Production build
```

### Database Operations
```bash
mix ecto.create   # Create database
mix ecto.migrate  # Run migrations  
mix ecto.reset    # Drop and recreate database
mix ecto.setup    # Create, migrate, and seed database
```

### Testing
```bash
mix test  # Run test suite (includes database setup)
```

### Asset Management
```bash
mix assets.setup   # Install CSS/JS build tools
mix assets.build   # Build development assets
mix assets.deploy  # Build and minify for production
```

## Development Patterns

- **Inertia Pages**: React components in `assets/js/Pages/` correspond to Phoenix controller actions
- **Shared Props**: Data passed from Phoenix controllers to React components via Inertia
- **Component Library**: Uses shadcn/ui components with Tailwind styling
- **Router Integration**: Phoenix routes render Inertia responses instead of traditional templates
- **Asset Pipeline**: Vite handles React/JS compilation, Phoenix handles CSS/static assets

## Key Configuration

- Inertia.Plug configured in router pipeline
- React page resolution via Vite glob imports
- SQLite database for development environment
- Tailwind + shadcn/ui for consistent modern SaaS styling