# Travel365 - Quick Start Guide

## Run the Application

```bash
cd travel365
npm install
npm start
```

Open http://localhost:4200

## Run Tests

```bash
npm test                    # Run all tests
npm run test:coverage       # With coverage report
```

**Results**: 63 tests passing, 80%+ coverage ✅

## Build for Production

```bash
npm run build:prod
```

**Output**: `dist/travel365/` (~62 KB gzipped)

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci-cd.yml`) will:

1. ✅ Install dependencies
2. ✅ Run tests with coverage
3. ✅ Build production bundle
4. ✅ Upload artifacts
5. 🚀 Deploy (configure your hosting)

## Project Structure

-   **Pages**: `src/app/pages/` - Home, Destinations, About
-   **Routes**: `src/app/app.routes.ts` - Lazy-loaded routes
-   **Tests**: `**/*.spec.ts` - 63 comprehensive tests
-   **Config**: `vitest.config.ts` - Test coverage settings

## Key Features

✅ Angular 21 with standalone components
✅ Lazy-loaded routing
✅ 63 unit tests (100% passing)
✅ 80%+ code coverage
✅ Production-optimized builds
✅ CI/CD ready

## For CI/CD Integration

```bash
npm ci                      # Clean install
npm run test:coverage       # Tests + coverage
npm run build:prod          # Production build
```

Deploy contents of `dist/travel365/` to your hosting provider.

---

**Ready to test your CI/CD pipeline!** 🚀
