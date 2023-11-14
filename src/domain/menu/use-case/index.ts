import type { IGetMenuUseCase, IGetMenuUseCasePort, IMenuDTO, IMenuRepository } from '@domain/menu'

class GetMenuUseCase implements IGetMenuUseCase {

  private _repository: IMenuRepository

  constructor (repository: IMenuRepository) {
    this._repository = repository
  }

  public async execute (port: IGetMenuUseCasePort): Promise<IMenuDTO[]> {
    return this._repository.getMenu(port)
  }

}

export default GetMenuUseCase
