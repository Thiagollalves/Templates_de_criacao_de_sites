---
name: project-checkup
description: Audit the health, performance, security, and code quality of a web project and produce a structured diagnosis with prioritized actions. Use when the user asks for a code audit, technical review, performance analysis, security validation, project health check, maintainability assessment, or implementation-ready improvement plan for a web app or website.
---

# Project Checkup

Audit a web project as a senior engineer. Focus on real defects, risky patterns, missing protections, performance bottlenecks, and maintainability issues that materially affect delivery.

Do not give generic advice. Tie every finding to concrete evidence in the codebase. If something cannot be verified from the repository, say so explicitly.

## Audit Workflow

### 1. Build a quick project map

Start by identifying:

- framework and runtime
- package manager
- app entrypoints and routing structure
- API surface
- database or ORM usage
- auth implementation
- test setup
- lint, typecheck, and build scripts

Use this map to decide which checks are applicable. If a category does not apply, mark it as `N/A` instead of forcing a finding.

### 2. Review performance

Check for issues with measurable runtime or bundle impact, including:

- missing lazy loading for heavy routes, images, or client-only modules
- oversized components or files that should be split
- unnecessary client rendering where server rendering or static rendering is possible
- duplicate fetching, unbounded polling, or wasteful re-renders
- missing caching for API calls, expensive computations, or repeated queries
- slow database access patterns, especially missing indexes, N+1 queries, or broad selects
- large JavaScript or TypeScript modules that indicate poor separation of concerns

Prioritize findings that affect initial load, interactivity, server cost, or repeated user flows.

### 3. Review security

Check for:

- hardcoded secrets, tokens, passwords, or API keys
- `.env` or secret-bearing files not covered by `.gitignore`
- missing input validation on API routes, forms, or server actions
- unsafe sinks such as `eval`, `innerHTML`, `dangerouslySetInnerHTML`, or shell execution
- weak authentication or authorization boundaries
- privileged routes or mutations exposed without protection
- insecure cookie, session, or token handling
- dependency or config patterns that obviously increase attack surface

Prefer concrete security risks over speculative ones. Explain exploitability in plain technical terms.

### 4. Review code quality

Check for:

- forgotten `console.log` statements or debug-only code
- `TODO`, `FIXME`, `HACK`, or placeholder logic in production paths
- missing or inconsistent error handling
- weak typing, `any` overuse, or missing schema validation
- fragile abstractions, dead code, or duplicated logic
- missing automated tests for critical flows
- files or modules whose size makes them hard to change safely

Focus on changes that improve reliability, readability, and change safety.

## Scoring Rules

Provide an overall score from 0 to 100 and category scores for:

- Performance
- Security
- Code Quality

Base scores on observed evidence, not vibes. Use this rough interpretation:

- `90-100`: strong, only minor issues
- `75-89`: solid, but notable improvements needed
- `50-74`: meaningful weaknesses affecting delivery or risk
- `0-49`: serious issues with material impact

If a category is only partially applicable, score it based on the applicable surface and mention the limitation.

## Severity Rules

Prioritize findings by impact and urgency:

1. security exposure or privilege bypass
2. data loss, correctness, or production outage risk
3. major performance bottlenecks on core flows
4. maintainability problems that slow delivery or increase defect rate
5. low-risk cleanup items

Do not pad the list. If there are fewer than five real critical issues, report fewer.

## Output Contract

Always produce:

### Overall Score

`Overall Score: X/100`

### Category Breakdown

- `Performance: X/100`
- `Security: X/100`
- `Code Quality: X/100`

### Top Critical Issues

List the highest-value findings first. For each issue include:

1. issue
2. evidence with file references when possible
3. impact
4. recommendation

### Action Plan

End with a prioritized implementation plan grouped into:

- `Do now`
- `Do next`
- `Later`

## Reporting Standard

Keep the response:

- structured
- technical
- concise
- actionable

Avoid generic praise, vague warnings, or boilerplate best-practice lists that are not grounded in the repository.

## Review Rules

- State assumptions clearly.
- Cite file paths for findings whenever possible.
- Distinguish confirmed issues from inferred risks.
- Mark missing validation or testing as a gap, not a proven bug.
- Prefer the smallest high-leverage fixes first.
