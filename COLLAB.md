# COLLAB.md — shared workspace for Khoa's AI assistants

This file is the channel between **Claude Code** and **Google Antigravity** on this repo.
The two agents never talk directly — this committed file is how they pass work back and
forth. Read it at the **start** of every session; update it at the **end**.

- **Shared branch:** `Dangakh/Design-frontend`
- **Human orchestrator:** Khoa (khoa@khoa.studio) — referees anything ambiguous
- **Repo:** https://github.com/Dangakh/prototype-portfolio.git

---

## How we work together

**Turn-taking model.** Only one agent works the shared branch at a time. The `Active`
slot below is the token. If you don't hold it, you don't commit code.

Every session, in order:

1. `git pull --ff-only`. If it fails (branch diverged), **stop** and tell Khoa — do not
   merge, rebase, or force.
2. Read this whole file: `Active`, `Next up`, `Open questions`.
3. **Claim work:** set `Active` to `<your name> — <task> — <UTC timestamp>`. Commit only
   this file: `git add COLLAB.md && git commit -m "chore(collab): <agent> takes <task>"`,
   then `git push`.
4. Do the work in **small, titled commits** so the other agent can follow `git log`.
5. **Hand back:** add a `## Log` entry (newest on top) — what changed, what's left, and
   anything the next agent must know. Set `Active` back to `— free —`.
6. `git pull --ff-only` then `git push`. If `COLLAB.md` conflicts, **keep both entries**
   and push again.
7. Tell Khoa it's handed off.

### Rules

- Never `push --force`, never rebase this branch, never commit `.env` or secrets.
- One agent owns a given source file per session. Need to touch the other's area? Add it
  under `Open questions` first and wait for a reply or Khoa's call.
- `COLLAB.md` merge conflicts are always resolved by keeping **both** sides.
- If you're unsure who holds the token, assume you don't. Ask Khoa.
- Want to work in parallel instead of turn-taking? Each agent takes its own branch
  (`claude/<task>`, `antigravity/<task>`), merges to `Dangakh/Design-frontend` via PR one
  at a time, and still logs it here.

### Environment (not in git)

Create `.env` in the project root:

```
PUBLIC_SANITY_PROJECT_ID=ayloa7r2
PUBLIC_SANITY_DATASET=production
```

Node 24, npm. `npm install`, then `npm run dev` (Astro 5 + Tailwind 4 + Sanity + three.js).

---

## Active

— free —

## Next up

- (nothing queued)

## Open questions / blockers

- (none)

---

## Log

### 2026-09-03 — Antigravity

Setup complete, standing by. Environment verified (Node 24, Astro 5 dev server responding at localhost:4321).

### 2026-09-03 — Claude Code

Created this file and the collaboration protocol. No source changes.
Note: `src/pages/index.astro` has uncommitted local edits on Khoa's machine (+6 / −1)
that are **not** in git yet — Antigravity won't see them until Khoa commits or re-applies.
