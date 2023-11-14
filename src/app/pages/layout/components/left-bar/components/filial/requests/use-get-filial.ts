import { useQuery } from '@tanstack/react-query'

import FilialRepository from '@data/repository/filial'
import GetFilialUseCase from '@domain/filial/use-case'

import type { Dispatch, SetStateAction } from 'react'

import type { UseQueryResult } from '@tanstack/react-query'

import type { IFilialDTO } from '@domain/filial'

type UseGetFilialResult = UseQueryResult<IFilialDTO[]>

const useGetFilial = (setter: Dispatch<SetStateAction<IFilialDTO[]>>): UseGetFilialResult => {
  const repository = new FilialRepository()
  const useCase = new GetFilialUseCase(repository)

  const callback = async (): Promise<IFilialDTO[]> => {
    return useCase.execute()
  }

  return useQuery(['get filial'], callback, {
    onSuccess: (data) => {
      setter(data)
    }
  })
}

export { useGetFilial }
