# CI/CD Practice - React Project......

A basic React project with comprehensive test cases, set up for CI/CD practice.

## Features

- ⚛️ React 18 with Vite
- 🧪 Jest + React Testing Library
- 📦 Modern build tooling
- 🎨 Clean, modern UI

## Project Structure

```
ci-cd-practice/
├── src/
│   ├── components/
│   │   ├── Counter.jsx          # Counter component
│   │   ├── Counter.css
│   │   └── Counter.test.jsx     # Counter tests
│   ├── App.jsx                  # Main App component
│   ├── App.css
│   ├── App.test.jsx             # App tests
│   ├── main.jsx                 # Entry point
│   ├── index.css
│   └── setupTests.js            # Jest setup
├── index.html
├── package.json
├── vite.config.js
├── jest.config.js
└── babel.config.js
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Test Coverage

The project includes comprehensive test cases for:

- **App Component**: Tests for rendering and component integration
- **Counter Component**: Tests for:
  - Initial state
  - Increment functionality
  - Decrement functionality
  - Reset functionality
  - Multiple operations
  - Accessibility (aria-labels)

## CI/CD Ready

This project is configured with:

- Jest for unit testing
- Coverage thresholds (70% minimum)
- Modern React testing best practices
- Ready for integration with CI/CD pipelines (GitHub Actions, GitLab CI, etc.)

## Technologies Used

- React 18
- Vite
- Jest
- React Testing Library
- Babel
