module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
        es2020: true,
    },

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    plugins: ["@typescript-eslint", "prettier", "sonarjs", "security"],

    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "prettier",
    ],

    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",

        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],

        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "no-nested-ternary": "off",

        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
    },
};
