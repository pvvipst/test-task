import { createContext, useContext, useMemo, useState } from 'react'

import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react'

const FilialContext = createContext<IFilialContext>({
  selectedFilial: null,
  setSelectedFilial: () => {
    //
  }
})

const useFilialContext = (): IFilialContext => useContext(FilialContext)

const FilialProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedFilial, setSelectedFilial] = useState<null | number>(null)

  const context = useMemo(() => ({
    selectedFilial,
    setSelectedFilial
  }), [selectedFilial])

  return (
    <FilialContext.Provider value={ context }>
      { children }
    </FilialContext.Provider>
  )
}

interface IFilialContext {
  selectedFilial: number | null
  setSelectedFilial: Dispatch<SetStateAction<number | null>>
}

export { useFilialContext }
export default FilialProvider
