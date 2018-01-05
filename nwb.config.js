module.exports = {
  type: 'react-app',
  karma: {
    // browsers: ['Chrome'],
    client: {
      config: {
        browserConsoleLogOptions: true
      }
    },
    files: [
        { pattern: "{app|src}/**/*-test.js", watched: false, served: true, included: true }
    ],
    preprocessors: {
      '{app|src}/**/*-test.js': ['webpack', 'sourcemap']
    },
  },
  babel: {
    // env: {
      // test: {
        plugins: ['rewire']
      // }
    // }
  },
  webpack: {
    extra: {
      module: {
        loaders: [
          { test: /\.js$/, loader: "source-map-loader", exclude: [/node_modules/]  },
          { test: /\.jsx$/, loader: "source-map-loader", exclude: [/node_modules/]  }
        ]
      },
      devtool: 'cheap-source-map', // 'source-map', //cheap-eval-source-map
    }
  }
}