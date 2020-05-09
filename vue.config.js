const path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({ remUnit: 75 
  //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75 
})

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = { 
  lintOnSave:false,
  devServer:{
    open:true,
    proxy:{
      '/3002': {
          target: 'http://localhost:3002',
          changeOrigin: true,
          pathRewrite:{
              "^/3002":""
          }
      },
      '/163':{
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite:{
            "^/163":""
        }
  }
 }
},

configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
                'ajax':resolve('src/ajax'),
                'router':resolve('src/router'),
            }
        }
    },
  css: { loaderOptions: { postcss: { plugins: [ postcss ] } } } 
}