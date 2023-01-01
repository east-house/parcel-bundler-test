// ESM => 브라우저 환경에서 사용하는 방법
// CommonJS => node js 환경에서 사용하는 방법

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

//export 
module.exports = {
  plugins : [
    autoprefixer
  ]
}