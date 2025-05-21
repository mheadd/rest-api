# Simple Node.js REST API

This project is a basic REST API built with Node.js and Express. It provides a simple example endpoint for demonstration purposes.

**Note:** This project is an experiment using Visual Studio Code and GitHub Copilot to do "vibe coding"—rapid, AI-assisted development and iteration.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```

The API will be available at `http://localhost:3000/`.

## Running Tests

To run the test suite:
```bash
npm test
```

## Endpoints
- `GET /` - Returns a welcome message.
- `GET /reverse/:input` - Returns the reversed string from the `input` parameter as `{ reversed: "..." }`.

---

This project is intended as a starting point for building REST APIs with Node.js and Express.
