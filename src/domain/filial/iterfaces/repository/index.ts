import type { IFilialDTO } from '@domain/filial'

interface IFilialRepository {
  getFilial(): Promise<IFilialDTO[]>
}

export type { IFilialRepository }
