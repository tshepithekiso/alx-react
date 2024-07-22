const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to production
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regex to match CSS files
        use: ['style-loader', 'css-loader'], // Loaders to use
      },
      // Other rules...
    ],
  },
  // Other configurations...
};

