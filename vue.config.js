module.exports = {
  "devServer": {
    "clientLogLevel": 'info',
    "proxy":{
      '^/api': {
          target: 'http://webencoder.space/demo/api/public',
          ws: true,
          changeOrigin: true
      },
      
      
    } 
    
  },
  "outputDir": "../../../public/assets/app",
  "publicPath": "http://greensceneint.com",
  "indexPath": "index.html",
  "transpileDependencies": [
    "vuetify"
  ],
  
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  // outputDir: '../../../public/assets/admin',

  publicPath: process.env.NODE_ENV === 'production'
    ? '/assets/admin/'
    : '/',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../../../resources/views/admin.blade.php'
    : 'index.html'
  
}