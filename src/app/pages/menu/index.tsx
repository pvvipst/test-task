import { useEffect, useState } from 'react'

import Table from '@app/components/common/table'
import { useFilialContext } from '@app/common/filial'
import { useGetMenu } from '@app/pages/menu/requests/use-get-menu'

import { useFilterMenuContext } from '@app/common/filter-menu'

import type { IMenuDTO } from '@domain/menu'

const MenuPage = (): JSX.Element => {
  const [rows, setRows] = useState<IMenuDTO[]>([])
  const { mutateAsync } = useGetMenu(setRows)
  const { selectedFilial } = useFilialContext()
  const { name, tt, active, filial } = useFilterMenuContext()

  useEffect(() => {
    if (selectedFilial !== null)
      void mutateAsync({ id: selectedFilial, name, active, filial, tt })
  }, [selectedFilial, name, tt, active, filial])

  return (
    <Table rows={ rows } />
  )
}

export default MenuPage
