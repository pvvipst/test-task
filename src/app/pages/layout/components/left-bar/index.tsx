import { ReactComponent as LogoIcon } from '@app/assets/icons/logo.svg'
import { ReactComponent as Logo2Icon } from '@app/assets/icons/logo-2.svg'

import Filial from '@app/pages/layout/components/left-bar/components/filial'

import Menu from '@app/pages/layout/components/left-bar/components/menu'

import { LEFT_BAR_STYLES as Component } from './_styles'

const LeftBar = (): JSX.Element => {
  return (
    <Component.Wrapper>
      <Component.SiteName.Wrapper>
        <Component.SiteName.BoxTitle.Wrapper>
          <LogoIcon />

          <Component.SiteName.BoxTitle.BoxWrapper>
            <Component.SiteName.BoxTitle.Title>
              НАЗВАНИЕ ФИРМЫ
            </Component.SiteName.BoxTitle.Title>

            <Component.SiteName.BoxTitle.Title>
              Лоскутникова В.П.
            </Component.SiteName.BoxTitle.Title>
          </Component.SiteName.BoxTitle.BoxWrapper>
        </Component.SiteName.BoxTitle.Wrapper>

        <Component.Divider />

        <Component.SiteName.BoxTitle.Wrapper>
          <Logo2Icon />

          <Component.SiteName.BoxTitle.Wrapper>
            <Component.SiteName.BoxTitle.Title>
              СКЛАДСКОЙ УЧЁТ
            </Component.SiteName.BoxTitle.Title>
          </Component.SiteName.BoxTitle.Wrapper>
        </Component.SiteName.BoxTitle.Wrapper>
      </Component.SiteName.Wrapper>

      <Filial />

      <Component.Divider />

      <Menu />
    </Component.Wrapper>
  )
}

export default LeftBar
