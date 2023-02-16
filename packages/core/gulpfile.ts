import gulp from 'gulp'
// import fs from 'fs'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'

async function css() {
  gulp
    .src('src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist'))
}

// async function token() {
//   fs.writeFile(`./src/css/themes.css`, content, function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Saved!')
//     }
//   })

//   fs.readdir('./src/tokens/generator', (err, files) => {
//     if (err) {
//       console.log(err)
//     } else {
//       files.forEach((file) => {
//         const [name, extension] = file.split('.')
//         console.log(file)
//         const { colors } = require(`./src/tokens/generator/${file}`)

//         // create define file
//         const define = []

//         colors.forEach((color: any) => {
//           define.push({
//             name: color.name,
//           })
//         })

//         // create export file
//         const object: Record<any, any> = {}

//         colors.forEach((color: any) => {
//           object[color.name] = color.value
//         })

//         const content = `const tokens = ${JSON.stringify(object, null, 2)}`

//         fs.writeFile(`./src/tokens/artifacts/${file}`, content, function (err) {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log('Saved!')
//           }
//         })
//       })
//     }
//   })
//   console.log('gulpfile')
//   // gulp.src('src/*.css').pipe(gulp.dest('dist'))
// }

export async function build() {
  await css()
  // await token()
}
