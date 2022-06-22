import { FocusEventHandler, useState } from 'react'
import Icon from '@pisagor/icon'

import type { SearchProps } from './Search.types'
import * as Styles from './Search.styles'

export const Search: React.FunctionComponent<SearchProps> = ({
  containerClassName,
  children,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    if (onFocus) {
      onFocus(event)
    }

    setIsOpen(true)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    if (onBlur) {
      onBlur(event)
    }

    setIsOpen(false)
  }

  return (
    <Styles.Root
      className={containerClassName}
      style={{ width: isOpen ? '100%' : 200 }}
    >
      <Styles.Search>
        <Icon name="search" size={18} />
        <Styles.SearchInput
          placeholder="Search"
          maxLength={500}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </Styles.Search>
      {isOpen && <Styles.SearchResult>{children}</Styles.SearchResult>}
    </Styles.Root>
  )
}
