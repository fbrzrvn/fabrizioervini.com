module.exports = {
  '**/*.ts?(x)': [
    'npm run lint',
    'npm run lint:format:check',
    'npm run test:related',
  ],
  '*.{css,scss,html,md,json,yml,yaml}': ['npm run lint:format:check'],
};
