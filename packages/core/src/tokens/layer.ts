/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY
 *
 * @command yarn build
 */

import { TOKEN_NOT_FOUND } from '../constants'

const tokens = {
  card: 100,
  navigation: 200,
  dialog: 300,
  layer: 400,
  blanket: 500,
  modal: 510,
  flag: 600,
  spotlight: 700,
  tooltip: 800,
}

export function layer(name: keyof typeof tokens) {
  return tokens[name] || TOKEN_NOT_FOUND
}
