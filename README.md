# Skeleton: Deno

This is a starter project for Deno projects.

## Installation

```bash
git clone git@github.com:Industrial/skeleton-deno.git my-project
cd my-project
rm -rf .git
```

## Usage

### Install dependencies

This will install pnpm, husky and lint-staged.

When making commits, will run the following processes:

- Tests with coverage reporting (LCOV).
- Linting on all staged files.

```bash
deno task install-dependencies
```

### Lint

```bash
deno task lint
deno task lint:watch
```

### Test

```bash
deno task test
deno task test:watch
deno task test:coverage
```
