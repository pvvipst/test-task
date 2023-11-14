import type { FilterTypeActive } from '@app/pages/layout/components/table-data/components/header/_setting'

import type { IUseCase } from '@domain/common'
import type { IMenuDTO } from '@domain/menu'

interface IGetMenuUseCasePort {
  id: number
  name: string
  tt: string
  filial: string
  active: FilterTypeActive | ''
}

type IGetMenuUseCase = IUseCase<IGetMenuUseCasePort, IMenuDTO[]>

export type { IGetMenuUseCase, IGetMenuUseCasePort }
