import type { IFilialDTO, IFilialRepository, IGetFilialUseCase } from '@domain/filial'

class GetFilialUseCase implements IGetFilialUseCase {

  private _repository: IFilialRepository

  constructor (repository: IFilialRepository) {
    this._repository = repository
  }

  public async execute (): Promise<IFilialDTO[]> {
    return this._repository.getFilial()
  }

}

export default GetFilialUseCase
