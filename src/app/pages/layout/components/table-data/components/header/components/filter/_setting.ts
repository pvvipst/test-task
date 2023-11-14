enum FilterType {
  NAME = 'setName',
  FILIAL = 'setFilial',
  TT = 'setTt'
}

interface ITableFilterProps {
  label: string
  type: FilterType
  onChange(value: string): void
}

export type { ITableFilterProps }
export { FilterType }
