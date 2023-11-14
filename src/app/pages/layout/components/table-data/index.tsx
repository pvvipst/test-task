import { Outlet } from 'react-router-dom'

import { TABLE_DATA_STYLES as Component } from '@app/pages/layout/components/table-data/components/_styles'
import TableDataHeader from '@app/pages/layout/components/table-data/components/header'

const TableData = (): JSX.Element => {
  return (
    <Component.Wrapper>
      <TableDataHeader />

      <Outlet />
    </Component.Wrapper>
  )
}

export default TableData
