module.exports = {
  // TypeScript type checking (no emit)
  '**/*.{ts,tsx}': () => 'npm run tsc -- --noEmit',

  // Lint & format JS / TS files
  '**/*.{ts,tsx,js}': (filenames) => [
    `npm run lint -- --fix ${filenames.join(' ')}`,
    `npm run format -- ${filenames.join(' ')}`,
  ],

  // Format Markdown & JSON files
  '**/*.{md,json}': (filenames) =>
    `npm run format -- ${filenames.join(' ')}`,
};
