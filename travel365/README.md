# Travel365 - Travel Website Frontend

A modern Angular 21 travel website application with routing, testing, and production-ready configuration for CI/CD pipeline testing.

## Project Overview

Travel365 is a scaffold application designed to demonstrate:

- Angular 21 project setup with standalone components
- Client-side routing with lazy-loaded pages
- Comprehensive unit testing with 80%+ code coverage
- Production build optimization
- CI/CD pipeline integration readiness

## Features

### Pages

- **Home** - Landing page with featured travel benefits and call-to-action
- **Destinations** - Browse popular travel destinations worldwide
- **About** - Company information, team, and statistics

### Technical Highlights

- ✅ Angular 21 with standalone components
- ✅ TypeScript 5.9
- ✅ Lazy-loaded routes for optimal performance
- ✅ Vitest for unit testing
- ✅ 80%+ test coverage (63 tests passing)
- ✅ Production build optimized
- ✅ Responsive design with SCSS
- ✅ Modern component architecture

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm 10.9.3

### Installation

```bash
cd travel365
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

## Building

### Development Build

```bash
npm run build
```

### Production Build

```bash
npm run build:prod
```

Build artifacts are stored in the `dist/travel365/` directory.

**Production Build Stats:**

- Initial bundle: ~223 KB (raw) / ~62 KB (gzipped)
- Lazy chunks: 3-5 KB each (per route)
- Build time: ~8 seconds

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests with coverage

```bash
npm run test:coverage
```

**Test Results:**

- Total test files: 4
- Total tests: 63
- All tests passing ✅
- Coverage: 80%+ (lines, functions, branches, statements)

## Project Structure

```
travel365/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.spec.ts
│   │   │   ├── destinations/
│   │   │   │   ├── destinations.component.ts
│   │   │   │   ├── destinations.component.html
│   │   │   │   ├── destinations.component.scss
│   │   │   │   └── destinations.component.spec.ts
│   │   │   └── about/
│   │   │       ├── about.component.ts
│   │   │       ├── about.component.html
│   │   │       ├── about.component.scss
│   │   │       └── about.component.spec.ts
│   │   ├── app.ts (main app component)
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── vitest.config.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Routes

| Path            | Component             | Description          |
| --------------- | --------------------- | -------------------- |
| `/`             | Redirect to `/home`   | Default route        |
| `/home`         | HomeComponent         | Landing page         |
| `/destinations` | DestinationsComponent | Destinations listing |
| `/about`        | AboutComponent        | About page           |
| `**`            | Redirect to `/home`   | Fallback route       |

## CI/CD Ready

This application is configured for CI/CD pipelines with:

1. **Fast builds**: Production build completes in ~8 seconds
2. **Automated testing**: 63 unit tests with coverage reporting
3. **Quality gates**: 80% code coverage threshold
4. **Build artifacts**: Optimized bundles in `dist/` directory
5. **Lazy loading**: Route-based code splitting for performance

### Sample CI/CD Commands

```bash
# Install dependencies
npm ci

# Run linting (if configured)
npm run lint

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build:prod

# Deploy dist/travel365/ contents to hosting
```

## Additional Scripts

```bash
npm run ng          # Run Angular CLI commands
npm run watch       # Build in watch mode for development
```

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
