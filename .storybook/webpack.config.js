const path = require('path');

module.exports = (config) => {
  // CSS files loader for node_modules
  config.module.rules.push({
    test: /\.css$/,
    include: path.join(__dirname, '../node_modules'),
    loader: [
      'style-loader',
      'css-loader',
    ],
  });

  // Enable CSS modules and PostCSS
  config.module.rules.push({
    test: /\.css$/,
    exclude: path.join(__dirname, '../node_modules'),
    loader: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]!',
        },
      },
      'postcss-loader',
    ],
  });

  // Support web fonts
  config.module.rules.push({
    test: /\.(woff2|woff)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  });

  return config;
};
