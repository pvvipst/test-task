import { useLocation } from 'react-router-dom'

import { TYPE_MENU } from '@app/pages/layout/components/left-bar/components/menu/_setting'

import { MENU_STYLED as Component } from './_styled'

const Menu = (): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Component.Wrapper>
      { TYPE_MENU.map((item) => (
        <Component.Element key={ item.label }>
          <span>-</span>

          <Component.Link to={ item.to } selected={ pathname === item.to }>{ item.label }</Component.Link>
        </Component.Element>
      )) }
    </Component.Wrapper>
  )
}

export default Menu
