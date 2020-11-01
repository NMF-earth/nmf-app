module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "jest/globals": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "typescript": {} // this loads <rootdir>/tsconfig.json to eslint
          },
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": [0],
        "quotes": [2, "double"],
        "react/display-name": [0],
        "react/prop-types": [0],
        "import/namespace": 0,
        "import/no-named-as-default-member": 0,
        "import/order": [
          "error",
          {
            groups: [
              ["external", "builtin"],
              "internal",
              ["parent", "sibling", "index"],
            ],
            "newlines-between": "always",
          },
        ],
    }
};
