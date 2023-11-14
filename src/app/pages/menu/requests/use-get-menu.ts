import { useMutation } from '@tanstack/react-query'

import MenuRepository from '@data/repository/menu'
import GetMenuUseCase from '@domain/menu/use-case'

import type { Dispatch, SetStateAction } from 'react'

import type { UseMutationResult } from '@tanstack/react-query'

import type { IGetMenuUseCasePort, IMenuDTO } from '@domain/menu'

type UseGetMenuResult = UseMutationResult<IMenuDTO[], unknown, IGetMenuUseCasePort>

const useGetMenu = (setter: Dispatch<SetStateAction<IMenuDTO[]>>): UseGetMenuResult => {
  const repository = new MenuRepository()
  const useCase = new GetMenuUseCase(repository)

  const callback = async (port: IGetMenuUseCasePort): Promise<IMenuDTO[]> => {
    return useCase.execute(port)
  }

  return useMutation(['get menu'], callback, {
    onSuccess: (data) => {
      setter(data)
    }
  })
}

export { useGetMenu }
