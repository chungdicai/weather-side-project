module.exports = {
  devServer: {
    port: 3000, // 端口
      overlay: {
        warnings: true,
        errors: false,
      },
    open: true,
   },
   css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/common.scss";`
      }
    }
  },
  filenameHashing: false,
};
