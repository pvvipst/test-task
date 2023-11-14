interface IMenuOtherDTO {
  id: number
  name: string
}

interface IMenuDTO {
  id: number
  name: string
  filial: IMenuOtherDTO
  tt: IMenuOtherDTO
  active: boolean
  export: string[]
}

export type { IMenuDTO, IMenuOtherDTO }
