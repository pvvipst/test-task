import type { IGetMenuUseCasePort, IMenuDTO } from '@domain/menu'

interface IMenuRepository {
  getMenu(port: IGetMenuUseCasePort): Promise<IMenuDTO[]>
}

export type { IMenuRepository }
