module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
    publicPath: process.env.NODE_ENV === "production" ? "/thesis/ftgu/" : "/",

  },

  configureWebpack: config => {
    // Copy data directory into build
    // copy-webpack-plugin is a dependency of Vue Cli
    const CopyWebpackPlugin = require('copy-webpack-plugin')
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: resolve('data'),
          ignore: ['.*'],
          to: 'data'
        }
      ])
    )
  }

//// vue relative path imports
  chainWebpack: config => {
    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4KiB
          }
        })
  }

}


// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
