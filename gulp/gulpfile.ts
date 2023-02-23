import fs from 'node:fs'
import path from 'node:path'
import ejs from 'ejs'

import { components } from './shared/packages'

function template2(name: string) {
  return fs.readFileSync(path.join('./templates', `${name}.ejs`), 'utf8')
}

async function createNodeFile() {
  const template = fs.readFileSync('./templates/npmignore.ejs', 'utf8')

  for (const component of components) {
    const pgkPath = `../packages/${component.name}/package.json`
    const pgk = fs.readFileSync(pgkPath, 'utf8')
    const config = JSON.parse(pgk)
    config.description = component.description
    config.keywords = ['react', 'pisagor', component.name]

    fs.writeFileSync(pgkPath, JSON.stringify(config, null, 2))
    fs.writeFileSync(`../packages/${component.name}/.npmignore`, template)
  }
}

async function createLicenceFile() {
  const template = fs.readFileSync('./templates/license.ejs', 'utf8')

  for (const component of components) {
    const path = `../packages/${component.name}/LICENSE`

    fs.writeFileSync(path, template)
  }
}

async function createReadmeFile() {
  const template = fs.readFileSync('./templates/readme.ejs', 'utf8')

  for (const component of components) {
    const path = `../packages/${component.name}/README.md`
    const data = ejs.render(template, {
      name: component.name,
      namespace: component.namespace,
      description: component.description,
      submodules: component.submodules,
    })

    fs.writeFileSync(path, data)
  }
}

async function createTypeScriptConfigFile() {
  const config = template2('tsconfig')
  const commonjs = template2('tsconfig/commonjs')
  const esm = template2('tsconfig/esm')
  const esnext = template2('tsconfig/esnext')

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
