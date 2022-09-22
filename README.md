# tree-sitter-swift

Looks like it has an issue with the javascript version of tree-sitter-swift.

## instructions

Installation

```sh
$ yarn install
$ node .
```

Errors with:

```
ree-sitter-swift-version-issue/node_modules/tree-sitter/index.js:259
  setLanguage.call(this, language);
              ^

RangeError: Incompatible language version. Compatible range: 13 - 13. Got: 14
    at Parser.setLanguage (/Users/juspears/Documents/GitHub/tree-sitter-swift-version-issue/node_modules/tree-sitter/index.js:259:15)
    at Object.<anonymous> (/Users/juspears/Documents/GitHub/tree-sitter-swift-version-issue/index.js:5:8)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

```
