import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import ejs from 'ejs'

import { components } from './shared/packages'

function template(name: string) {
  return fs.readFileSync(path.join('./templates', `${name}.ejs`), 'utf8')
}

async function createNodeFile() {
  const content = template('npmignore')

  for (const component of components) {
    const pgkPath = `../packages/${component.name}/package.json`
    const pgk = fs.readFileSync(pgkPath, 'utf8')
    const config = JSON.parse(pgk)
    config.description = component.description
    config.keywords = ['react', 'pisagor', component.name]

    fs.writeFileSync(pgkPath, JSON.stringify(config, null, 2))
    fs.writeFileSync(`../packages/${component.name}/.npmignore`, content)
  }
}

async function createLicenceFile() {
  const content = template('license')

  for (const component of components) {
    const path = `../packages/${component.name}/LICENSE`

    fs.writeFileSync(path, content)
  }
}

async function createReadmeFile() {
  const content = template('readme')

  for (const component of components) {
    const path = `../packages/${component.name}/README.md`
    const data = ejs.render(content, {
      name: component.name,
      namespace: component.namespace,
      description: component.description,
      submodules: component.submodules,
    })

    fs.writeFileSync(path, data)
  }
}

async function createTypeScriptConfigFile() {
  const config = template('tsconfig')
  const commonjs = template('tsconfig/commonjs')
  const esm = template('tsconfig/esm')
  const esnext = template('tsconfig/esnext')

  for (const component of components) {
    const root = `../packages/${component.name}`
    const tsconfig = `${root}/tsconfig`

    if (!fs.existsSync(tsconfig)) {
      fs.mkdirSync(`../packages/${component.name}/tsconfig`)
    }

    fs.writeFileSync(`${root}/tsconfig.json`, config)
    fs.writeFileSync(`${tsconfig}/commonjs.json`, commonjs)
    fs.writeFileSync(`${tsconfig}/esm.json`, esm)
    fs.writeFileSync(`${tsconfig}/esnext.json`, esnext)
  }
}

export async function build() {
  await createNodeFile()
  await createLicenceFile()
  await createReadmeFile()
  await createTypeScriptConfigFile()
}

export async function setup() {
  for (const component of components) {
    try {
      execSync(`cd ../packages/${component.name} && yarn build`)

      console.log(
        chalk.green(
          `[✓] @pisagor/${component.name} package compiled successfully`
        )
      )
    } catch (error) {
      console.log(
        chalk.red(`[x] problem compiling @pisagor/${component.name} package`)
      )
    }
  }

  try {
    execSync('cd ../docs && yarn build')

    console.log(chalk.green(`[✓] documentation compiled successfully`))
  } catch (error) {
    console.log(
      chalk.red('[x] documentation could not be compiled due to some errors')
    )
  }
}
