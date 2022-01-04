module.exports = {
  configureWebpack: {
    resolve: {
      // extensions:[],
      // 别名配置
      alias: {
        '@assets' : '@/assests',
        '@common' : '@/common',
        '@comps' : '@/components',
        '@network' : '@/network',
        '@views' : '@/views'
      }
    }
  }
}