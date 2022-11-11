const path = require('path')
const webpack = require('webpack');

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    },
    i18n: {
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  configureWebpack: {
    mode: "development",
    plugins: [
      new webpack.DefinePlugin({
        mode: "development",
        __INTLIFY_PROD_DEVTOOLS__: false,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true
      })
    ]
  },
  transpileDependencies: [
    'quasar',
    'vuex-composition-helpers'
  ],
}
