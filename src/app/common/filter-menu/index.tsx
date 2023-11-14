import { createContext, useContext, useMemo, useState } from 'react'

import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'

import type { FilterTypeActive } from '@app/pages/layout/components/table-data/components/header/_setting'

const FilterMenuContext = createContext<IFilterMenuContext>({
  name: '',
  filial: '',
  tt: '',
  active: '',
  setActive: () => {
    //
  },
  setFilial: () => {
    //
  },
  setName: () => {
    //
  },
  setTt: () => {
    //
  }
})

const useFilterMenuContext = (): IFilterMenuContext => useContext(FilterMenuContext)

const FilterMenuProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [name, setName] = useState('')
  const [filial, setFilial] = useState('')
  const [tt, setTt] = useState('')
  const [active, setActive] = useState<FilterTypeActive | ''>('')

  const context = useMemo(() => ({
    name,
    filial,
    tt,
    active,
    setName,
    setFilial,
    setTt,
    setActive
  }), [name, filial, tt, active])

  return (
    <FilterMenuContext.Provider value={ context }>
      { children }
    </FilterMenuContext.Provider>
  )
}

interface IFilterMenuContext {
  name: string
  setName: Dispatch<SetStateAction<string>>
  filial: string
  setFilial: Dispatch<SetStateAction<string>>
  tt: string
  setTt: Dispatch<SetStateAction<string>>
  active: FilterTypeActive | ''
  setActive: Dispatch<SetStateAction<FilterTypeActive | ''>>
}

export { useFilterMenuContext }
export default FilterMenuProvider
