# 👐 Contributing

So you want to contribute to the app? Great! Please read the following instructions to avoid any confusion. Working with many people on a single project can be a challenge, it can very painful for both maintainers and contributors, so we need to set some guidelines to make it smooth.

NB : These guidelines are and will always be up for discussion. Just open a ticket if anything could be improved!

We love your input, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing improvement / new features
- Becoming a maintainer

### Translations fix

Please fix translations on [POEditor](https://poeditor.com/join/project/0MbginCsWp) to avoid sync issues.

### Pull Requests

We welcome pull requests to change the codebase.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Make your pull request

NB : PR older than one month will be deleted.

### Contributions are under the GPL-3.0 License

When you submit code changes, your submissions are understood to be under [GPL-3.0 License](https://github.com/NotMyFaultEarth/nmf-app/blob/main/LICENSE).

### Open source guide

You can read it [here](https://opensource.guide/).

## Code Quality

Please try to do the following :

- Every new piece of code requires tests. If you don't know how to do that, it's fine, but please create an issue and add a `/* TODO: write test for ...` so we don't forget about doing it.
- Write stories for new components. If you don't know how to do that, write a todo like previously shown.
- Update tests / stories if you change anything
- Run `yarn lint` to make sure that your code passes linting.
- Naming and folder structure is _really_ important. Have a look at the current code and see how it's done 😉
- Do not reinvent the wheel : if you want to add a library like lodash instead of ramda, open a ticket first so we can discuss it.

- no inline if, use brackets

```diff
- if(isAndroid) return null;
+ if(isAndroid) {
+   return null;
+ }
```

## NPM packages

All packages used in `package.json` should be using strict version. No `~` or `^` are allowed. Freezing version ensures that we all have the same version and that we don't need to have a look at `yarn.lock` to see what version we are using. Debugging and bug finding should be easier thanks to that.

This rule can be discussed in the issues but until a better solution is found, any PR not respecting this rule will be declined.
