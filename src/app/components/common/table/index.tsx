import { DataGrid } from '@mui/x-data-grid'

import { COLUMNS } from './_setting'

import { TABLE_STYLES as Component } from './_styles'

import type { IMenuDTO } from '@domain/menu'

interface ITableProps {
  rows: IMenuDTO[]
}

const Table = ({ rows }: ITableProps): JSX.Element => {
  return (
    <Component.Wrapper>
      <DataGrid
        rows={ rows }
        columns={ COLUMNS }
      />
    </Component.Wrapper>
  )
}

export default Table
