---
name: vercel-deploy
description: Deploy the current project to Vercel (preview by default) when the user explicitly asks to publish, preview, or push live.
---

# Vercel Deploy Skill

Check for `vercel` CLI without escalation (`command -v vercel`). Run `vercel deploy [path] -y` with a 10-minute timeout (retry with escalated network permissions only if the deploy itself fails). If credentials are missing, fallback to `scripts/deploy.sh` and report both `previewUrl` and `claimUrl`. Use `--prod` only when the user explicitly requests a production deploy.

## Steps

1. Verify CLI availability (`command -v vercel`) without escalated perms.
2. Run `vercel deploy [path] -y` (preview by default) with 600000ms timeout. If sandbox network blocks, rerun with `sandbox_permissions=require_escalated` upon request.
3. If CLI errors with auth, run the bundled fallback script (`scripts/deploy.sh`), then share the returned `previewUrl` and `claimUrl`.
4. For explicit production deploys, append `--prod`.
5. Always return the deployment link(s); do not curl the preview.

## Troubleshooting

- If deploy commands fail due to network timeouts/DNS/resets, rerun with escalated permissions after asking the user.
- Do not escalate CLI checks; only escalate the actual deploy when necessary.
【0†source】【0†source】citeturn6view0
