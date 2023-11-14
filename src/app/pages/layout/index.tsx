import LeftBar from '@app/pages/layout/components/left-bar'

import TableData from '@app/pages/layout/components/table-data'

import { DEFAULT_PAGE_STYLES as Component } from './_styles'

const Default = (): JSX.Element => {
  return (
    <Component.Wrapper>
      <LeftBar />

      <TableData />
    </Component.Wrapper>
  )
}

export default Default
