import { FocusEventHandler, useState } from 'react'
import { classnames } from 'begonya/functions'
import Icon from '@pisagor/icon'
import Input from '@pisagor/input'

import type { SearchProps } from './Search.types'
import * as styles from './Search.styles'

export const Search: React.FunctionComponent<SearchProps> = ({
  children,
  containerClassName,
  onBlur,
  onFocus,
  testId,
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
    <div
      className={classnames(styles.root, containerClassName)}
      data-testid={`${testId}-search`}
      style={{ width: isOpen ? '100%' : 200 }}
    >
      <div className={styles.search}>
        <Icon name="search" size={18} />
        <Input
          className={styles.searchInput}
          size="small"
          placeholder="Search"
          maxLength={500}
          data-testid={`${testId}-search-input`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </div>
      {isOpen && <div className={styles.searchResult}>{children}</div>}
    </div>
  )
}
