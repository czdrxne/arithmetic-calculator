import { defineConfig }     from "eslint/config";
import js                   from "@eslint/js";
import tseslint             from "typescript-eslint";
import svelte               from "eslint-plugin-svelte";
import svelteParser         from "svelte-eslint-parser";
import globals              from "globals";

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...svelte.configs["flat/recommended"],

    {
        files: ["**/*.svelte"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: { parser: tseslint.parser },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    {
        rules: { "no-alert": "off" },
    },
    
]);