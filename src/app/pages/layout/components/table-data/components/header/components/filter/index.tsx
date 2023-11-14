import { TextField } from '@mui/material'

import type { ChangeEvent } from 'react'

import type {
  ITableFilterProps
} from '@app/pages/layout/components/table-data/components/header/components/filter/_setting'

const TableFilter = (props: ITableFilterProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(event.target.value)
  }

  return (
    <TextField
      label={ props.label }
      variant="outlined"
      onChange={ handleChange }
    />
  )
}

export default TableFilter
