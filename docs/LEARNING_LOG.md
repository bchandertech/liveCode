# Learning Log

## Sprint 00 - Project Setup

### Concepts Covered

- Git branching strategy
- GitHub branch protection
- Pull request workflow
- React and Vite setup
- Tailwind CSS configuration
- ESLint and Prettier
- Jest and React Testing Library
- Environment variables
- GitHub Actions CI pipeline

### Problems and Solutions

1. Direct push to protected branches rejected.
   Solution: Use feature branches and pull requests.

2. CI pipeline not triggered on push.
   Solution: Add push event to GitHub Actions workflow.

3. Prettier check failed in CI.
   Solution: Fix formatting and use identical local and CI scripts.

4. Generated coverage files committed to Git.
   Solution: Update .gitignore and remove files from Git tracking.

5. npm commands failed in root directory.
   Solution: Run npm commands from the client directory.

### Pending Tasks

- AWS configuration
- Staging deployment
- Production deployment
- CD pipeline
