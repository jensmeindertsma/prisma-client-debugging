# prisma-client-debugging

A minimal Prisma Client set up aimed towards testing across several branches the latest changes and new features of Prisma Client as they are released, to discover bugs and have a reproduction to provide when reporting.

## upgrade

This branch updates from `6.6.0` to `6.7.0` to fix a typechecking issue.

## upgrade-querycompiler

This branch additionally opts into the new `queryCompiler` preview feature that allows Prisma Client to function 100% in JavaScript code, no more Rust bindings. This currently results in an issue with regards to a missing declaration file in `@prisma/client` for the seemingly now-irrelevant files that would connect to the Rust-based SQLite driver, now that it has been replaced by the `better-sqlite3` driver adapter. A temporary fix is implemented in `tsconfig.json`. For more info, [see the relevant GitHub issue](https://github.com/prisma/prisma/issues/27027).
