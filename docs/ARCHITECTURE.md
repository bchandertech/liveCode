# Architecture Decision Log

## Project Architecture

- Repository: Monorepo
- Frontend: client/
- Backend: server/
- Documentation: docs/
- Architecture: Feature-based
- Development approach: Frontend-first

## Technical Decisions

| Technology            | Reason                                |
| --------------------- | ------------------------------------- |
| React.js              | Component-based UI development        |
| Vite                  | Fast development and optimized builds |
| JavaScript            | Core frontend implementation          |
| Tailwind CSS          | Responsive and consistent UI          |
| React Router          | Client-side routing                   |
| Redux Toolkit         | Complex global client state           |
| TanStack Query        | Server state and caching              |
| Axios                 | Centralized API communication         |
| Jest                  | Automated testing                     |
| React Testing Library | Component and interaction testing     |
| ESLint                | Code quality                          |
| Prettier              | Consistent code formatting            |
| GitHub Actions        | Automated CI/CD                       |

## Git Strategy

- feature/\*: Feature development
- fix/\*: Bug fixes
- dev: Development and staging
- main: Production

## Deployment Strategy

- Staging: AWS S3 + CloudFront (Pending)
- Production: AWS S3 + CloudFront (Pending)

## Architecture Rules

- Follow separation of concerns.
- Keep UI and business logic separate.
- Prefer reusable components.
- Avoid unnecessary dependencies.
- Document major architectural changes.
- Do not introduce unnecessary complexity.
