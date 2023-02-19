import type { Token } from '../../types'

const shadow: Token[] = [
  {
    name: 'shadow.overlay',
    value: 'var(--shadow-overlay)',
    attributes: {
      group: 'shadow',
      state: 'on',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
  {
    name: 'shadow',
    value: 'var(--shadow)',
    attributes: {
      group: 'shadow',
      state: 'on',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
]

export default shadow
