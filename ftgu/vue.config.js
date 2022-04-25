//// bootstrap local image paths
// const options = {
//   transformAssetUrls: {
//     video: ['src', 'poster'],
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href',
//     'b-avatar': 'src',
//     'b-img': 'src',
//     'b-img-lazy': ['src', 'blank-src'],
//     'b-card': 'img-src',
//     'b-card-img': 'src',
//     'b-card-img-lazy': ['src', 'blank-src'],
//     'b-carousel-slide': 'img-src',
//     'b-embed': 'src'
//   }
// }


//// vue relative path imports
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('images')
//         .set('parser', {
//           dataUrlCondition: {
//             maxSize: 4 * 1024 // 4KiB
//           }
//         })
//   }
// }

// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// module.exports = {
//   configureWebpack: config => {
//     // Copy data directory into build
//     // copy-webpack-plugin is a dependency of Vue Cli
//     const CopyWebpackPlugin = require('copy-webpack-plugin')
//     config.plugins.push(
//       new CopyWebpackPlugin([
//         {
//           from: resolve('data'),
//           ignore: ['.*'],
//           to: 'data'
//         }
//       ])
//     )
//   }
// }
