import { HttpService } from '@data/common/services'

import { ExceptionService, InternalCode } from '@domain/common'

import type { IFilialDTO, IFilialRepository } from '@domain/filial'

class FilialRepository implements IFilialRepository {

  public async getFilial (): Promise<IFilialDTO[]> {
    return HttpService.get<IFilialDTO[]>('/filial')
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

export default FilialRepository
