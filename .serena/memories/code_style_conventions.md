# Code Style and Conventions

## TypeScript/React Conventions (based on existing code)

### General Style
- **File Extensions**: Use `.tsx` for React components, `.ts` for TypeScript files
- **Import Style**: ES6 imports with explicit file extensions where needed
- **Quotes**: Single quotes for strings
- **Semicolons**: Not used (based on existing code pattern)

### React Patterns
- **Components**: Use functional components with hooks
- **Export Style**: Default exports for components (`export default ComponentName`)
- **Hook Usage**: Import hooks from 'react' (`import { useState } from 'react'`)
- **JSX**: Use JSX fragments (`<>...</>`) when no wrapper element is needed

### File Organization
- **Entry Point**: `main.tsx` serves as the application entry point
- **Components**: Main app component in `App.tsx`
- **Styles**: CSS files co-located with components (`App.css`, `index.css`)
- **Assets**: Static assets in `src/assets/` directory

### Naming Conventions
- **Components**: PascalCase (e.g., `App`)
- **Files**: PascalCase for component files (e.g., `App.tsx`)
- **Functions**: camelCase
- **Variables**: camelCase

### TypeScript Configuration
- **Strict Mode**: Enabled in tsconfig.json
- **Module System**: ES modules (`"type": "module"` in package.json)
- **Target**: Modern ES standards