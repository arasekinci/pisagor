import fs from 'node:fs'
import { execSync } from 'child_process'
import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'

import background from './src/tokens/artifacts/background'
import border from './src/tokens/artifacts/border'
import font from './src/tokens/artifacts/font'
import icon from './src/tokens/artifacts/icon'
import layer from './src/tokens/artifacts/layer'
import palette from './src/tokens/artifacts/palette'
import shadow from './src/tokens/artifacts/shadow'

type Token = {
  name: string
  data: any[]
}

function execute(command: string) {
  execSync(command, {
    stdio: 'inherit',
  })
}

function generator(tokens: Token[]): string {
  const data: Record<string, string> = {}

  for (const token of tokens) {
    for (const item of token.data) {
      data[item.name] = item.value
    }

    try {
      const content = JSON.stringify(token.data, null, 2)
      const dist = './dist'

      if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
      }

      fs.writeFileSync(`${dist}/schema/${token.name}.json`, content)
    } catch (error) {
      console.log(error)
    }
  }

  return JSON.stringify(data, null, 2)
}

async function css() {
  gulp
    .src('src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist'))
}

async function token() {
  const schemaDir = './dist/schema'
  const comments = `/**
  * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY
  *
  * @command yarn build
  */`
  let template = comments
  template += '\n\n'
  template += "import { TOKEN_NOT_FOUND } from '../constants'"
  template += '\n\n'
  template += `const tokens = #{data}`
  template += '\n\n'
  template += `export function #{name}(name: keyof typeof tokens) {
      return tokens[name] || TOKEN_NOT_FOUND
    }`

  if (!fs.existsSync(schemaDir)) {
    fs.mkdirSync(schemaDir, {
      recursive: true,
    })
  }

  try {
    const tokens: Token[] = [
      {
        name: 'background',
        data: background,
      },
      {
        name: 'border',
        data: border,
      },
      {
        name: 'font',
        data: font,
      },
      {
        name: 'icon',
        data: icon,
      },
      {
        name: 'shadow',
        data: shadow,
      },
    ]
    const content = template
      .replace('#{data}', generator(tokens))
      .replace('#{name}', 'token')

    fs.writeFileSync(`./src/tokens/token.ts`, content)
  } catch (error) {
    console.log('token', error)
  }

  try {
    const tokens: Token[] = [
      {
        name: 'layer',
        data: layer,
      },
    ]
    const content = template
      .replace('#{data}', generator(tokens))
      .replace('#{name}', 'layer')

    fs.writeFileSync(`./src/tokens/layer.ts`, content)
  } catch (error) {
    console.log('layer', error)
  }

  try {
    const tokens: Token[] = [
      {
        name: 'palette',
        data: palette,
      },
    ]
    const content = template
      .replace('#{data}', generator(tokens))
      .replace('#{name}', 'palette')

    fs.writeFileSync(`./src/tokens/palette.ts`, content)
  } catch (error) {
    console.log('color', error)
  }
}

async function script() {
  execute('yarn lint')
  execute('tsc --build tsconfig/commonjs.json')
  execute('tsc --build tsconfig/esm.json')
  execute('tsc --build tsconfig/esnext.json')
}

export async function build() {
  await css()
  await token()
  await script()
}
