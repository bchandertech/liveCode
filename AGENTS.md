# AI Coding Agent Instructions

## 1. Project Context

- This is a production-level e-commerce and inventory management project.
- The primary objective is to learn real-world enterprise frontend development.
- Follow the sprint roadmap and implement features step by step.
- Follow README.md and CONTRIBUTING.md.

## 2. Development Rules

- Inspect existing code before making any changes.
- Work only on the assigned sprint and ticket.
- Do not implement future sprint requirements.
- Do not create unnecessary files or folders.
- Do not install unnecessary packages.
- Ask for approval before installing new dependencies.
- Do not change existing architecture without approval.
- Do not modify unrelated functionality.
- Do not overwrite existing developer changes.
- Never assume missing requirements.
- Ask for clarification when requirements are unclear.

## 3. Frontend Rules

- Follow feature-based architecture.
- Use functional React components and hooks.
- Create reusable and maintainable components.
- Keep business logic separate from UI components.
- Follow responsive design and accessibility standards.
- Avoid unnecessary re-rendering.
- Avoid premature optimization and overengineering.
- Remove unused imports, variables and dead code.
- Follow existing ESLint and Prettier configurations.

## 4. State Management

- Use useState for local component state.
- Use Context API for simple shared state.
- Use Redux Toolkit for complex global client state.
- Use TanStack Query for server state.
- Do not introduce state management libraries unnecessarily.

## 5. Backend and API Rules

- This project follows a frontend-first development approach.
- Do not modify backend code without approval.
- Do not assume backend ports, API URLs or response structures.
- Use centralized Axios configuration.
- Manage API URLs through environment variables.
- Handle loading, error, empty and success states.
- Do not create mock APIs or mock data without approval.

## 6. Security Rules

- Never hardcode sensitive information.
- Never expose private API keys in frontend code.
- Never commit environment secrets or credentials.
- Validate user inputs.
- Avoid unsafe HTML rendering.
- Follow existing authentication and authorization architecture.

## 7. Testing and Code Quality

- Write tests for important functionality.
- Update tests when existing functionality changes.
- Do not remove tests to resolve failures.
- Never disable ESLint or Prettier to bypass errors.
- Never bypass CI checks.
- Run validation commands from the client directory:

  npm run lint
  npm run format:check
  npm run test
  npm run build

- Report any failed checks honestly.

## 8. Git and CI/CD Rules

- Create feature branches from dev.
- Never push directly to dev or main.
- Never commit or push without developer approval.
- Never merge branches automatically.
- Never delete branches without approval.
- Never modify branch protection rules without approval.
- Never modify CI/CD workflows without approval.
- Do not commit generated files or sensitive information.

## 9. AI Development Workflow

1. Understand the assigned requirement.
2. Inspect the existing implementation.
3. Identify affected files.
4. Explain the implementation approach.
5. Wait for developer approval before making changes.
6. Implement only the approved requirements.
7. Run relevant validation and tests.
8. Report changed files and validation results.
9. Wait for approval before starting the next task.

## 10. Learning Guidelines

- Follow real-world enterprise development practices.
- Explain why a technology or approach is being used.
- Explain important architectural decisions.
- Do not generate the entire project at once.
- Keep explanations practical, concise and relevant.
- Prefer simple, scalable and maintainable solutions.
- Do not make assumptions about existing configurations.
- Clearly communicate blockers and incomplete work.

## 11. Applicability

These instructions apply to all AI coding assistants, including:

- OpenAI Codex
- GitHub Copilot
- Claude
- Cursor
- Gemini
- Other AI coding assistants

AGENTS.md is the single source of truth for AI development rules.
