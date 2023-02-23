export type Package = {
  namespace?: string
  name: string
  description: string
  submodules?: string[]
}

export type Component = Package
