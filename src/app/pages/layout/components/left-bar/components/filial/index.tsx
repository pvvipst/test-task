import { useEffect, useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useGetFilial } from '@app/pages/layout/components/left-bar/components/filial/requests/use-get-filial'

import { useFilialContext } from '@app/common/filial'

import { FILIAL_STYLES as Component } from './_styles'

import type { SelectChangeEvent } from '@mui/material'

import type { IFilialDTO } from '@domain/filial'

const Filial = (): JSX.Element => {
  const [filials, setFilials] = useState<IFilialDTO[]>([])
  const { setSelectedFilial, selectedFilial } = useFilialContext()

  const request = useGetFilial(setFilials)

  const handleChange = (event: SelectChangeEvent<number>): void => {
    setSelectedFilial(event.target.value as number)
  }

  useEffect(() => {
    void request.refetch()
  }, [])

  return (
    <Component.Wrapper>
      <FormControl variant="outlined" sx={{ width: '100%' }}>
        <InputLabel>Филиалы</InputLabel>

        <Select<number>
          label="Филиалы"
          value={ selectedFilial === null ? 0 : selectedFilial }
          onChange={ handleChange }
          sx={{ width: '100%' }}
        >
          { filials.map((item) => <MenuItem key={ item.id } value={ item.id }>{ item.name }</MenuItem>) }
        </Select>
      </FormControl>
    </Component.Wrapper>
  )
}

export default Filial
