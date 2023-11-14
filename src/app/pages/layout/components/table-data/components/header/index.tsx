import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react'

import {
  TABLE_DATA_HEADER_STYLES as Component
} from '@app/pages/layout/components/table-data/components/header/_styles'
import TableFilter from '@app/pages/layout/components/table-data/components/header/components/filter'
import { FilterType } from '@app/pages/layout/components/table-data/components/header/components/filter/_setting'
import { FilterTypeActive } from '@app/pages/layout/components/table-data/components/header/_setting'

import { useFilterMenuContext } from '@app/common/filter-menu'

import type { SelectChangeEvent } from '@mui/material'

interface IData {
  [FilterType.NAME]: undefined | NodeJS.Timeout
  [FilterType.FILIAL]: undefined | NodeJS.Timeout
  [FilterType.TT]: undefined | NodeJS.Timeout
}

const TableDataHeader = (): JSX.Element => {
  const [data, setData] = useState<IData>({
    [FilterType.NAME]: undefined,
    [FilterType.TT]: undefined,
    [FilterType.FILIAL]: undefined
  })
  const [selectValue, setSelectValue] = useState('')
  const context = useFilterMenuContext()

  const handleChange = (type: FilterType) => (value: string) => {
    const timeout = setTimeout(() => {
      context[type](value)
    }, 1000)

    if (data[type] === undefined) setData({ ...data, [type]: timeout })
    else {
      clearTimeout(data[type])
      setData({ ...data, [type]: timeout })
    }
  }

  const handleChangeActive = (event: SelectChangeEvent): void => {
    setSelectValue(event.target.value)
    context.setActive(event.target.value as FilterTypeActive)
  }

  return (
    <Component.Wrapper>
      <TableFilter label="Название меню" type={ FilterType.NAME } onChange={ handleChange(FilterType.NAME) } />

      <TableFilter label="Филиал" type={ FilterType.FILIAL } onChange={ handleChange(FilterType.FILIAL) } />

      <TableFilter label="Торговая точка" type={ FilterType.TT } onChange={ handleChange(FilterType.TT) } />

      <FormControl variant="outlined">
        <InputLabel>Активность</InputLabel>

        <Select
          label="Активность"
          onChange={ handleChangeActive }
          value={ selectValue }
          sx={{ width: '200px' }}
        >
          <MenuItem value={ FilterTypeActive.EMPTY }>Не выбрано</MenuItem>

          <MenuItem value={ FilterTypeActive.ACTIVE }>Активный</MenuItem>

          <MenuItem value={ FilterTypeActive.NO_ACTIVE }>Не активный</MenuItem>
        </Select>
      </FormControl>
    </Component.Wrapper>
  )
}

export default TableDataHeader
