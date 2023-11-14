import type { IMenuDTO, IMenuOtherDTO } from '@domain/menu'

import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

const TEST_DATA: IMenuDTO[] = [
  { id: 1, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 2, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 3, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 4, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 5, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 6, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
  { id: 7, name: '123123', filial: { id: 1, name: 'www333' }, tt: { id: 1, name: 'rrreee' }, active: true, export: []},
]

const COLUMNS: GridColDef[] = [
  { field: 'id', flex: 1 },
  { field: 'name', flex: 1 },
  {
    field: 'filial',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, IMenuOtherDTO>) => params.value?.name
  },
  {
    field: 'tt',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, IMenuOtherDTO>) => params.value?.name
  },
  {
    field: 'active',
    flex: 1,
    renderCell: (params: GridRenderCellParams<any, boolean>) => params.value === true ? 'Активен' : 'Не активен'
  },
]

export { COLUMNS, TEST_DATA }
