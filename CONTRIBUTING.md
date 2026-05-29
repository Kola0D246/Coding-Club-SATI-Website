# 🌿 Repository Branching Rules & Workflow

To maintain a clean commit history and ensure our live website never crashes, all contributors must follow these Git rules.

### 1. Branch Naming Conventions
Always name your branch based on the work you are doing. Use lowercase and hyphens:
* For new features: `feature/your-feature-name`
* For fixing a bug: `bugfix/issue-description`
* For documentation updates: `docs/update-readme`

### 2. The Development Workflow
Never work directly on `main` or `dev`. Follow these steps for every task:

1. **Pull the latest changes:** Before creating a branch, make sure your local repository is up to date.
```bash
   git checkout dev
   git pull origin dev
```

2. **Create your branch:**

```Bash
    git checkout -b feature/add-discord-link
```

3. **Commit frequently with clear messages:** Write meaningful commit messages (e.g., `feat: add discord invite button to footer` instead of `fix: changes`).

4. **Push your branch to GitHub:**

```Bash
    git push origin feature/add-discord-link
```

### 3. Pull Request (PR) Rules

- **Target the right branch:** All Pull Requests for features and bug fixes must target the dev branch, NOT `main`.

- **No Self-Merges:** You cannot merge your own Pull Request. At least one core maintainer/reviewer must review your code and approve it.

- **Keep it clean:** Before raising a PR, ensure your code builds locally without errors and contains no console logs or leftover debugging code.

### 4. Direct Pushes are Blocked

The `main` and `dev` branches are protected on GitHub. Any attempt to run `git push origin main` directly from your terminal will be rejected by the server.
