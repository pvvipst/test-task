import { HttpService } from '@data/common'

import { ExceptionService, InternalCode } from '@domain/common'

import type { IGetMenuUseCasePort, IMenuDTO, IMenuRepository } from '@domain/menu'

class MenuRepository implements IMenuRepository {

  public async getMenu (port: IGetMenuUseCasePort): Promise<IMenuDTO[]> {
    const { id, ...params } = port
    return HttpService.get<IMenuDTO[]>(`filial/${id}/menu?limit=100`, { params })
      .then((res) => res)
      .catch(() => {
        throw ExceptionService.new({
          status: {
            code: InternalCode.SERVER_ERROR,
            message: 'Server return bad request'
          }
        })
      })
  }

}

export default MenuRepository
