module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ssr' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bb.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
