# liveCode

A production-oriented e-commerce and inventory management application
built to implement real-world frontend development practices.

## Project Objectives

- Feature-based architecture
- Reusable UI components
- State management
- API integration
- Authentication and authorization
- Performance optimization
- Unit and integration testing
- CI/CD automation
- AWS deployment

## Technology Stack

- React.js
- JavaScript
- Vite
- Tailwind CSS
- React Router
- Redux Toolkit
- TanStack Query
- Axios
- Jest
- React Testing Library
- ESLint
- Prettier
- GitHub Actions

## Project Structure

liveCode/
├── .github/ # CI/CD workflows
├── client/ # Frontend application
├── server/ # Backend application
├── docs/ # Project documentation
├── .gitignore
└── README.md

## Local Development

```bash
cd client
npm ci
npm run dev
```

## Environment Variables

Create a .env file inside the client folder.
Refer to .env.example for required environment variables.

## Code Quality and Testing

Run these commands from the client folder:

```bash
npm run lint
npm run format:check
npm run test
npm run build
```

## Branching Strategy

- main: Production branch
- dev: Development and staging branch
- feature/\*: New feature development
- fix/\*: Bug fixes

## Development Workflow

1. Create a feature branch from dev.
2. Implement the feature.
3. Run local validation and tests.
4. Commit and push changes.
5. Verify CI pipeline.
6. Create a pull request targeting dev.
7. Merge after required checks pass.

## Continuous Integration (CI)

GitHub Actions automatically runs:

- Dependency installation
- ESLint checks
- Prettier checks
- Jest tests
- Build verification

CI runs on branch pushes and pull requests targeting dev or main.

## Continuous Deployment (CD)

- dev: Planned staging deployment
- main: Planned production deployment
- AWS S3 and CloudFront integration pending.

## Project Status

Under active development.

Frontend setup and CI configuration completed.
Backend integration and AWS deployment pending.
