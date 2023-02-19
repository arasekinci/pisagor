import type { PackageName } from '../types'

export function getPackageName(name: PackageName) {
  switch (name) {
    case 'accordion':
      return '@pisagor/accordion'
    case 'alert':
      return '@pisagor/alert'
    case 'anchor':
      return '@pisagor/anchor'
    case 'avatar':
      return '@pisagor/avatar'
    case 'badge':
      return '@pisagor/badge'
    case 'blanket':
      return '@pisagor/blanket'
    case 'breadcrumbs':
      return '@pisagor/breadcrumbs'
    case 'button':
      return '@pisagor/button'
    case 'checkbox':
      return '@pisagor/checkbox'
    case 'core':
      return '@pisagor/core'
    case 'cormorant':
      return '@pisagor/cormorant'
    case 'drawer':
      return '@pisagor/drawer'
    case 'form':
      return '@pisagor/form'
    case 'gridview':
      return '@pisagor/gridview'
    case 'icon':
      return '@pisagor/icon'
    case 'input':
      return '@pisagor/input'
    case 'layout':
      return '@pisagor/layout'
    case 'menu':
      return '@pisagor/menu'
    case 'navbar':
      return '@pisagor/navbar'
    case 'page':
      return '@pisagor/page'
    case 'popper':
      return '@pisagor/popper'
    case 'popup':
      return '@pisagor/popup'
    case 'portal':
      return '@pisagor/portal'
    case 'radio':
      return '@pisagor/radio'
    case 'sidebar':
      return '@pisagor/sidebar'
    case 'textarea':
      return '@pisagor/textarea'
    case 'tooltip':
      return '@pisagor/tooltip'
  }
}
