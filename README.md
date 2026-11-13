# TRECIA Human Evaluation — GitHub Pages portal

This repository contains the public, static access portal for the TRECIA human-evaluation platform.

The evaluation application is intentionally not hosted entirely on GitHub Pages: it needs authenticated image delivery, durable response storage, autosave, final submission, and restricted admin exports. The Pages portal contains no research images, captions, evaluator tokens, annotations, database credentials, or admin secrets. Secure evaluator links pass the token in a URL fragment and hand off to the server-backed application with a no-referrer policy.

## URL format

- Evaluator: `https://minchi0304.github.io/trecia-human-evaluation/evaluate/#SECURE_TOKEN`
- Admin: `https://minchi0304.github.io/trecia-human-evaluation/admin/#SECURE_TOKEN`

Do not commit real tokens. They are issued and retained by the server-backed platform.

## Deployment

Pushes to `main` deploy through the official GitHub Pages Actions workflow.
