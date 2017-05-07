module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFlagsSelect',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    rules: {
      svg: {
        loader: 'svg-inline-loader?classPrefix!image-webpack-loader'
      }
    }
  }
}
