import type { IUseCase } from '@domain/common'
import type { IFilialDTO } from '@domain/filial'

type IGetFilialUseCase = IUseCase<undefined, IFilialDTO[]>

export type { IGetFilialUseCase }
