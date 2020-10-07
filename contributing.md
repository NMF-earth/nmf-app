# 👐 Contributing

So you want to contribute to the app? Great! Please read the following instructions to avoid any confusion. Working with many people on a single project can be a challenge, it can very painfull for both maintainers and contributors, so we need to set some guidelines to make it smooth.

NB : These guidelines are and will always be up for discussion. Just open a ticket if anything could be improved!

We love your input, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing improvement / new features
- Becoming a maintainer

### Pull Requests

We welcome pull requests to change to the codebase.

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Make your pull request

### Contributions are under the GPL-3.0 License

When you submit code changes, your submissions are understood to be under [GPL-3.0 License](https://github.com/NotMyFaultEarth/nmf-app/blob/master/LICENSE).

### Open source guide

You can read it [here](https://opensource.guide/).

## Code Quality

Please try to do the following :

- Every new piece of code requires tests. If you don't know how to do that, it's fine, but please create an issue and add a `/* TODO: write test for ...` so we don't forget about doing it.
- Write stories for new components. If you don't know how to do that, write a todo like previously shown.
- Update tests / stories if you change anything
- Run `yarn lint` to make sure that your code passes linting. 
- Naming and folder structure is _really_ important. Have a look to the current code and see how it's done 😉
- Do not reinvent the wheel : if you want to add a library like lodash instead of ramda, open a ticket first so we can discuss it.

The `import ... from '...';` at the top of files follow some rules:

- Absolute imports before relative imports

```diff
- import { Emission } from './Emission';
- import React from 'react';
+ import React from 'react';
+ import { Emission } from './Emission';
```

- Absolute imports are sorted alphabetically by package name

```diff
- import { StackNavigation } from 'react-navigation';
- import React from 'react';
+ import React from 'react';
+ import { StackNavigation } from 'react-navigation';
```

- Relative imports are reverse-sorted by import depth, meaning deeper imports appear first

```diff
- import { Emission } from './Emission';
- import { calculation } from "utils";
+ import { calculation } from "utils";
+ import { Emission } from './Emission';
```

- Imports at the same depth are sorted alphabetically by module name

```diff
- import { Emission } from './Emission';
- import { About }  from './About';
+ import { About }  from './About';
+ import { Emission } from './Emission';
```

- Destructured fields are ordered alphabetically

```diff
- import { useState, useContext } from 'react';

- const { width, height } = props;

+ import { useContext, useState } from 'react';

+ const { height, width } = props;
```

- Props in React components are ordered alphabetically

```diff
- <Emission style={{ width: 30 }} distance={20} />
+ <Emission distance={20} style={{ width: 30 }} />
```




