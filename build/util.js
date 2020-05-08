// 全局定义px2remLoader 
  const px2remLoader = { 
    loader: 'px2rem-loader', 
    options: { 
      remUnit: 37.5 
    // remUnit为转换rem的基础 设计稿单位/等分数 
    = remUnit } } 
    // 在该函数的loaders中添加 
    function generateLoaders (loader, loaderOptions) { 
  // 添加使用 px2remLoader 
  const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader, px2remLoader]
    }