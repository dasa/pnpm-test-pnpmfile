# PNPM 12 doesn't support ESM pnpmfile with `js` extension

The `package.json` includes `"type": "module"`. This works in PNPM 11.

## Reproduction

1. Clone this repository

   ```sh
   git clone https://github.com/dasa/pnpm-test-pnpmfile
   cd pnpm-test-pnpmfile
   ```

2. Run `pnpm install` where the global version of PNPM is v12 and see the error:

```
Error: ERR_PNPM_PNPMFILE_NOT_FOUND

  × pnpmfile at "/Users/dasa2721/Developer/misc/test-pnpmfile/pnpmfile.js" is not found
```

This can also be reproduced when the global pnpm version is v11 using `pn with 12.5.1 install`.
