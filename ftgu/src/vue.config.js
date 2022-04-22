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