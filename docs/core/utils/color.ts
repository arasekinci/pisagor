export const rgb = (hex: string) => {
  const color = hex.trim().replace('#', '')
  const red = parseInt(color.substring(0, 2), 16)
  const green = parseInt(color.substring(2, 4), 16)
  const blue = parseInt(color.substring(4, 6), 16)

  return [red, green, blue]
}

export const shade = (color: string, percent: number) => {
  const [red, green, blue] = rgb(color)
  let r: number | string = red + percent
  let g: number | string = green + percent
  let b: number | string = blue + percent

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}
