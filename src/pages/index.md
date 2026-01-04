---
title: AngularJS Long Term Support
description: CVE advisories and self-maintained patch notes for a custom AngularJS fork.
sidebar_position: 1
---

This site tracks **AngularJS (1.x)** security vulnerabilities (CVEs) and the **patches we maintain ourselves** in our fork.

> We are **self-patching**. “Fixed in” means: **fixed in our fork**, at the commit(s) linked here.

## How to use this site

1. Start with the **CVE table** below.
2. Open a CVE page to see:
   - What the vulnerability is
   - How it manifests (and why it matters)
   - The patch approach and the exact code change (or summary)
   - Our patch commit reference
   - How to verify the fix (pre/post PoCs + expected behavior)

## CVE index

**Legend**
- **PoC**: reproduces the issue against a vulnerable build
- **Patch commit**: commit in *our fork* that applies the mitigation

| CVE | Vulnerability type | Component | PoC | Patch commit |
|---|---|---|---|---|
| CVE-2025-4690 | ReDoS (super-linear regex) | `ngSanitize` / `linky` | [CVE-2025-4690](./docs/CVE-2025-4690#pre-patch-poc) | [028eeca2b](https://github.com/TJSTONE99/angular.js-lts/commit/028eeca2b) |
| CVE-2025-2336 | Improper sanitization → content spoofing | `ngSanitize` (SVG `<image>` `href`) | [CVE-2025-2336](./docs/CVE-2025-2336#pre-patch-poc) | [26809d90d](https://github.com/TJSTONE99/angular.js-lts/commit/26809d90d) |
| CVE-2025-0716 | Improper sanitization → content spoofing | sanitize/URI handling (SVG `<image>` `href`) | [CVE-2025-0716](./docs/CVE-2025-0716#pre-patch-poc) | [30c91a1ac](https://github.com/TJSTONE99/angular.js-lts/commit/30c91a1ac) |
| CVE-2024-8372 | Improper sanitization → content spoofing | `[srcset]` handling | [CVE-2024-8372](./docs/CVE-2024-8372#pre-patch-poc) | [43445fa4e](https://github.com/TJSTONE99/angular.js-lts/commit/43445fa4e) |
| CVE-2024-8373 | Improper sanitization → content spoofing | `<source srcset>` handling | [CVE-2024-8373](./docs/CVE-2024-8373#pre-patch-poc) | [7ea8e0528](https://github.com/TJSTONE99/angular.js-lts/commit/7ea8e0528) |
| CVE-2024-21490 | ReDoS (regex backtracking) | `ng-srcset` parsing | [CVE-2024-21490](./docs/CVE-2024-21490#pre-patch-poc) | [03609306e](https://github.com/TJSTONE99/angular.js-lts/commit/03609306e) |
| CVE-2023-26118 | ReDoS (regex backtracking) | `<input type="url">` validation | [CVE-2023-26118](./docs/CVE-2023-26118#pre-patch-poc) | [901317a35](https://github.com/TJSTONE99/angular.js-lts/commit/901317a35) |
| CVE-2023-26117 | ReDoS (regex backtracking) | `$resource` | [CVE-2023-26117](./docs/CVE-2023-26117#pre-patch-poc) | [c6c975c5a](https://github.com/TJSTONE99/angular.js-lts/commit/c6c975c5a) |
| CVE-2023-26116 | ReDoS (regex backtracking) | `angular.copy()` | [CVE-2023-26116](./docs/CVE-2023-26116#pre-patch-poc) | [ae991ac12](https://github.com/TJSTONE99/angular.js-lts/commit/ae991ac12) |
| CVE-2022-25869 | XSS (IE cache + `<textarea>` interpolation) | core | [CVE-2022-25869](./docs/CVE-2022-25869#pre-patch-poc) | [b9f30db37](https://github.com/TJSTONE99/angular.js-lts/commit/b9f30db37) |
| CVE-2022-25844 | ReDoS / DoS via locale formatting | `NUMBER_FORMATS` / currency formatting | [CVE-2022-25844](./docs/CVE-2022-25844#pre-patch-poc) | [a2819f1d8](https://github.com/TJSTONE99/angular.js-lts/commit/a2819f1d8) |

## Contributing

### Adding/updating a CVE entry
1. Create or update: `docs/cves/CVE-YYYY-NNNNN.md`
2. Keep the existing structure used by other CVEs
3. Update:
   - **Patch commit link** (our fork): `https://github.com/<org>/<repo>/commit/<sha>`
   - **PoC** link

### Creating “post-patch” PoCs (recommended)
1. Open the **pre-patch** PoC and **Fork**
2. Swap AngularJS script(s) to your patched artifacts, e.g.:
   - `https://cdn.jsdelivr.net/gh/<org>/<repo>/<sha>/dist/angular.js`
   - `https://cdn.jsdelivr.net/gh/<org>/<repo>/<sha>/dist/angular-sanitize.js`

   - jsdelivr.net acts as a cdn to allow for raw github files to be hosted. replace https://raw.githubusercontent.com with https://cdn.jsdelivr.net/gh
3. Run the same reproduction steps:
   - Pre-patch: issue reproduces
   - Post-patch: issue no longer reproduces (or fails safely)

### Patch commit requirements
Each patch should include:
- Commit message: `fix: CVE-YYYY-NNNNN`
- Tests where feasible (or at minimum a PoC + verification notes)
- Notes for any potentially breaking behavior changes
